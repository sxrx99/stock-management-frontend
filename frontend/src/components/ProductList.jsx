import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import AddProductModal from './AddProductModal';
import EditProductModal from './EditProductModal';
import DeleteConfirmationModal from './DeleteConfirmationModal';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);
  const [productToDelete, setProductToDelete] = useState(null); // NEW

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:8000/products/');
      setProducts(res.data.sort((a, b) => a.id - b.id));
    } catch (err) {
      console.error('Failed to fetch products:', err);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/products/${productToDelete.id}/`);
      setProducts(prev => prev.filter(p => p.id !== productToDelete.id));
      setProductToDelete(null); 
    } catch (err) {
      console.error('Delete failed:', err);
    }
  };

  const handleModify = (product) => {
    setProductToEdit(product);
    setShowEditModal(true);
  };

  const handleAddProduct = async (formData) => {
    try {
      const res = await axios.post('http://localhost:8000/products/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setProducts(prev => [...prev, res.data].sort((a, b) => a.id - b.id));
    } catch (err) {
      console.error('Failed to add product:', err);
    }
  };

  const handleUpdateProduct = (updatedProduct) => {
    setProducts(prev =>
      prev.map(p => (p.id === updatedProduct.id ? updatedProduct : p))
    );
    setShowEditModal(false);
    setProductToEdit(null);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-screen-xl">
        <ProductCard isAddCard onAddClick={() => setShowAddModal(true)} />
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onDelete={() => setProductToDelete(product)} 
            onModify={() => handleModify(product)}
          />
        ))}
      </div>

      {showAddModal && (
        <AddProductModal
          onClose={() => setShowAddModal(false)}
          onSave={handleAddProduct}
        />
      )}

      {showEditModal && productToEdit && (
        <EditProductModal
          product={productToEdit}
          onClose={() => {
            setShowEditModal(false);
            setProductToEdit(null);
          }}
          onSave={handleUpdateProduct}
        />
      )}

      {productToDelete && (
        <DeleteConfirmationModal
          onConfirm={handleDelete}
          onCancel={() => setProductToDelete(null)}
        />
      )}
    </div>
  );
}
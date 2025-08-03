import React, { useState } from 'react';
import axios from 'axios';

export default function EditProductModal({ product, onClose, onSave }) {
  const [name, setName] = useState(product.name || '');
  const [price, setPrice] = useState(product.price || '');
  const [description, setDescription] = useState(product.description || '');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('description', description);
    if (image) formData.append('image', image);

    try {
      const res = await axios.patch(
        `http://localhost:8000/products/${product.id}/`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      onSave(res.data);
    } catch (err) {
      console.error('Failed to update product:', err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 backdrop-blur-sm bg-white/30 overflow-y-auto flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl p-6 w-full max-w-md space-y-4 shadow-xl text-[#021024]"
      >
        <h2 className="text-xl font-semibold">Edit Product</h2>

        <input
          type="text"
          placeholder="Name"
          className="w-full border p-2 rounded text-[#021024]"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Price"
          className="w-full border p-2 rounded text-[#021024]"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <textarea
          placeholder="Description"
          className="w-full border p-2 rounded text-[#021024]"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="file"
          accept="image/*"
          className="w-full text-[#021024]"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-[#021024] rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-[#00B2FF] text-white rounded hover:bg-[#0099dd]"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

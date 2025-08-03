import React, { useState } from 'react';

export default function AddProductModal({ onClose, onSave }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    quantity: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert("Name is required.");
      return;
    }

    const data = new FormData();
    for (let key in formData) {
      if (formData[key] !== '' && formData[key] !== null) {
        data.append(key, formData[key]);
      }
    }

    onSave(data);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 backdrop-blur-sm bg-white/30 overflow-y-auto">
      <div className="max-w-md mx-auto mt-10 bg-white rounded-lg p-6 shadow-lg relative text-[#021024]">
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-4">Add Product</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="name"
            placeholder="Name *"
            className="w-full border p-2 rounded text-[#021024]"
            onChange={handleChange}
            required
          />
          <input
            name="description"
            placeholder="Description"
            className="w-full border p-2 rounded text-[#021024]"
            onChange={handleChange}
          />
          <input
            name="price"
            type="number"
            placeholder="Price"
            className="w-full border p-2 rounded text-blue-500"
            onChange={handleChange}
          />
          <input
            name="quantity"
            type="number"
            placeholder="Quantity"
            className="w-full border p-2 rounded text-[#021024]"
            onChange={handleChange}
          />
          <input
            name="image"
            type="file"
            accept="image/*"
            className="w-full border p-2 rounded text-[#021024]"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

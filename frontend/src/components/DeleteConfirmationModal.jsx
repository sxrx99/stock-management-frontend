import React from 'react';

export default function DeleteConfirmationModal({ onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 z-50 backdrop-blur-sm bg-white/30 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-semibold mb-4">Confirm Deletion</h2>
        <p className="mb-6">Are you sure you want to delete this product?</p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

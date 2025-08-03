import React from 'react';

export default function DeleteConfirmationModal({ onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 z-50 backdrop-blur-sm bg-white/30 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-sm w-full text-[#021024]">
        <h2 className="text-xl font-semibold mb-4">Confirm Deletion</h2>
        <p className="mb-6">Are you sure you want to delete this product?</p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-200 text-[#021024] rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-[#00B2FF] text-white rounded hover:bg-[#0099dd]"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

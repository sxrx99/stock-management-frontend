export default function ProductCard({ product, onDelete, onModify, isAddCard, onAddClick }) {
  if (isAddCard) {
    return (
      <div 
        onClick={onAddClick}
        className="border rounded-xl p-4 shadow hover:shadow-lg transition-all w-64 bg-gray-100 flex items-center justify-center text-5xl text-blue-500 cursor-pointer"
      >
        +
      </div>
    );
  }

  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition-all w-64 bg-white">
      {product.image && (
        <img
          src={product.image}
          alt="product" 
          className="w-full h-40 object-cover rounded-md mb-3"
        />
      )}
      <h2 className="text-xl font-bold mb-1">{product.name}</h2>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <p className="text-green-600 font-semibold">${product.price}</p>
      <p className="text-sm text-gray-500">Qty: {product.quantity}</p>

      <div className="flex gap-2 mt-4">
        <button 
          onClick={onDelete}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
        <button 
          onClick={onModify}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
        >
          Modify
        </button>
      </div>
    </div>
  );
}

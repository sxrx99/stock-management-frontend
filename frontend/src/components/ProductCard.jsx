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
      <h2 className="text-xl font-bold text-[#021024] mb-1">{product.name}</h2>
      <p className="text-[#292929] mb-2">{product.description}</p>
      <p className="text-blue-600 font-semibold">${product.price}</p>
      <p className="text-sm text-[#444]">Qty: {product.quantity}</p>

      <div className="flex items-center gap-2 mt-4">
        <button onClick={onModify} className="p-1 hover:bg-gray-100 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" 
               width="24" height="24" viewBox="0 0 24 24" 
               fill="#021024" className="hover:scale-110 transition">
            <path d="M18.4,4.4l1.2,1.2L6.2,19H5v-1.2L18.4,4.4 M18.4,2c-0.3,0-0.5,0.1-0.7,0.3L3,17v4h4L21.7,6.3c0.4-0.4,0.4-1,0-1.4l-2.6-2.6 C18.9,2.1,18.7,2,18.4,2L18.4,2z"></path>
            <path d="M15.8 4.3H17.8V9.2H15.8z" transform="rotate(-45.001 16.75 6.75)"></path>
          </svg>
        </button>

        <button onClick={onDelete} className="p-1 hover:bg-gray-100 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" 
              width="24" height="24" viewBox="0 0 24 24" 
              fill="#021024" className="hover:scale-110 transition">
            <path d="M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

import React from 'react';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="min-h-screen bg-[#021024] text-[#C1E8FF]">
      <h1 className="text-3xl font-bold text-center py-6">Inventory</h1>
      <ProductList />
    </div>
  );
}

export default App;

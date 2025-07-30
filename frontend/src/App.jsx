import React from 'react';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="min-h-screen flex-col justify-center">
      <h1 className="text-3xl font-bold text-center my-6">Stock management</h1>
      <ProductList />
    </div>
  );
}

export default App;

// src/App.js
import React from 'react';
import './App.css';
import ProductCard from './components/products/productcard';
import Counter from './components/products/counter';
import ShoppingCart from './components/cart/shoppingcart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>📦RectroSPect</h1>
        <p>ShoppingSpree</p>
      </header>

      <Counter />
      <ShoppingCart />

      <main style={{ padding: '20px' }}>
        <h2>Products</h2>
        
        {/* Using our ProductCard component with sample data */}
        <ProductCard 
          name="  Gaming Laptop"
          description="High-performance gaming laptop with RTX graphics"
          price={1299.99}
          stockQuantity={15}
        />
        
        <ProductCard 
          name="Wireless Mouse"
          description="Ergonomic wireless mouse with long battery life"
          price={29.99}
          stockQuantity={50}
        />
        
        <ProductCard 
          name="Mechanical Keyboard"
          description="RGB mechanical keyboard with blue switches"
          price={89.99}
          stockQuantity={8}
        />
      </main>
    </div>
  );
}

export default App;

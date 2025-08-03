// src/components/cart/shoppingCart.js
import React, { useState } from 'react';

function ShoppingCart() {
  // State to store cart items (array of products)
  const [cartItems, setCartItems] = useState([]);

  // Function to add product to cart
  const addToCart = (product) => {
    // Check if product already exists in cart
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      // If exists, increase quantity
      setCartItems(cartItems.map(item =>
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      // If new product, add with quantity 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Function to remove product from cart
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  // Function to update quantity
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
    } else {
      setCartItems(cartItems.map(item =>
        item.id === productId 
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  // Calculate total price
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  // Get total number of items
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div style={{ 
      border: '2px solid #007bff', 
      padding: '20px', 
      margin: '20px',
      borderRadius: '10px',
      backgroundColor: '#f8f9fa'
    }}>
      <h2>🛒 Shopping Cart ({getTotalItems()} items)</h2>
      
      {/* Demo buttons to add products */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Add Products to Cart:</h3>
        <button 
          onClick={() => addToCart({id: 1, name: 'Gaming Laptop', price: 1299.99})}
          style={{ margin: '5px', padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px' }}
        >
          Add Laptop ($1299.99)
        </button>
        
        <button 
          onClick={() => addToCart({id: 2, name: 'Wireless Mouse', price: 29.99})}
          style={{ margin: '5px', padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px' }}
        >
          Add Mouse ($29.99)
        </button>
        
        <button 
          onClick={() => addToCart({id: 3, name: 'Mechanical Keyboard', price: 89.99})}
          style={{ margin: '5px', padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px' }}
        >
          Add Keyboard ($89.99)
        </button>
      </div>

      {/* Cart Items Display */}
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px',
              margin: '10px 0',
              backgroundColor: 'white',
              borderRadius: '5px',
              border: '1px solid #ddd'
            }}>
              <div>
                <strong>{item.name}</strong>
                <p>Price: ${item.price}</p>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  style={{ padding: '5px 10px', backgroundColor: '#ffc107', border: 'none', borderRadius: '3px' }}
                >
                  -
                </button>
                
                <span style={{ minWidth: '30px', textAlign: 'center' }}>
                  {item.quantity}
                </span>
                
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  style={{ padding: '5px 10px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '3px' }}
                >
                  +
                </button>
                
                <button 
                  onClick={() => removeFromCart(item.id)}
                  style={{ padding: '5px 10px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '3px', marginLeft: '10px' }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          
          {/* Total Section */}
          <div style={{
            marginTop: '20px',
            padding: '15px',
            backgroundColor: '#e9ecef',
            borderRadius: '5px',
            textAlign: 'center'
          }}>
            <h3>Total: ${getTotalPrice()}</h3>
            <button 
              style={{
                padding: '12px 30px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                fontSize: '16px',
                cursor: 'pointer'
              }}
              onClick={() => alert(`Checkout ${getTotalItems()} items for $${getTotalPrice()}`)}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;

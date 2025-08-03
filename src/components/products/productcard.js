// src/components/Products/ProductCard.js
import React from 'react';

function ProductCard(props) {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '16px',
      margin: '8px',
      borderRadius: '8px'
    }}>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p><strong>Price: ${props.price}</strong></p>
      <p>Stock: {props.stockQuantity}</p>
    </div>
  );
}

export default ProductCard;

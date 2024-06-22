import React from 'react';
import './Favorites.css';

const Favorites = () => {
  return (
    <div className="favorites-container">
      <h1>Favorites</h1>
      <div className="favorites-product-list">
        {/* List of favorite products */}
        {/* Example product card */}
        <div className="favorites-product-card">
          <h2 className="favorites-product-name">Product Name</h2>
          <p className="favorites-product-description">Product description lorem ipsum</p>
          <p className="favorites-product-price">$19.99</p>
          <button className="btn btn-primary">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
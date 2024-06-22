import React from 'react';
import './ProductDetail.css';

const ProductDetail = () => {
  return (
    <div className="product-detail-container">
      <div className="product-detail">
        <h1 className="product-detail-name">Product Name</h1>
        <p className="product-detail-description">Product description lorem ipsum</p>
        <p className="product-detail-price">$19.99</p>
      </div>
      <div className="product-detail-actions">
        <button className="btn btn-primary">Add to Cart</button>
        <button className="btn btn-outline-primary">Add to Favorites</button>
      </div>
    </div>
  );
};

export default ProductDetail;
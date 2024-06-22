import React from 'react';
import './Catalog.css';

const Catalog = () => {
  return (
    <div className="catalog-container">
      <h1>Catalog</h1>
      <div className="catalog-search">
        {/* Search form */}
        <input type="text" placeholder="Search products..." className="form-control" />
      </div>
      <div className="catalog-filter">
        {/* Filters */}
        {/* Example filter */}
        <select className="form-control">
          <option>All Categories</option>
          <option>Category 1</option>
          <option>Category 2</option>
          <option>Category 3</option>
        </select>
      </div>
      <div className="catalog-product-list">
        {/* List of products */}
        {/* Example product card */}
        <div className="catalog-product-card">
          <h2 className="catalog-product-name">Product Name</h2>
          <p className="catalog-product-description">Product description lorem ipsum</p>
          <p className="catalog-product-price">$19.99</p>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
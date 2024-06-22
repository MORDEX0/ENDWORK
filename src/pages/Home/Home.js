import React from 'react';
import './Home.css';
import Product from '../Product/Product';

const Home = ({ addToCart }) => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to My Shop</h1>
      <p className="home-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ligula aliquet, condimentum ligula non, malesuada metus.
      </p>
      <div className="home-product-list">
        {/* List of products */}
        {/* Example product card */}
        <div className="home-product-card">
          <Product name="PvZ Футболка" image='image.png' price={19.99} addToCart={addToCart} />
        </div>
      </div>
    </div>
  );
};

export default Home;
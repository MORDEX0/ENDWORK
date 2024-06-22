import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
  return (
    <div className="cart-container">
      <h1>Cart</h1>
      <div className="cart-product-list">
        {/* List of products in the cart */}
        {cart.length === 0 ? <p>Корзина пуста</p> : (
          cart.map((item, index) => (
            <div className="cart-product-card" key={index}>
              <h2 className="cart-product-name">{item.name}</h2>
              <p className="cart-product-description">Описание товара lorem ipsum</p>
              <p className="cart-product-price">${item.price.toFixed(2)}</p>
              <button className="btn btn-danger">Remove</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';

const App = () => {
  const [cart, setCart] = useState([]);

  // Функция для добавления товара в корзину
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Home addToCart={addToCart} />
          </Route>
          <Route path="/cart">
            <Cart cart={cart} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
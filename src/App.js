import React, { useState } from 'react';
import Product from './Product';
import Cart from './Cart';
import './styles.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    { id: 1, name: 'Gimber Red', price: 10, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeHlyGfGjuNBRhpjW0SO7oe54f6waryWNW6g&s' },
    { id: 2, name: 'Gimber Black', price: 20, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-4uZUehT4wlqdJksA19MhmvDmOBLZxGJpvw&s' },
    { id: 3, name: 'Gimber White', price: 30, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Xipw680iU7J1VtfY5_zqgDXFEKifLBcTZA&s' },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter(product => product !== productToRemove));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Shopping Cart</h1>
      <input
        type="text"
        placeholder="Search Products"
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
      />
      <div className="content">
        <div className="product-list">
          <h2>Products</h2>
          {filteredProducts.map((product) => (
            <Product key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
        <div className="cart">
          <h2>Cart</h2>
          <Cart cart={cart} removeFromCart={removeFromCart} calculateTotal={calculateTotal} />
        </div>
      </div>
    </div>
  );
};

export default App;

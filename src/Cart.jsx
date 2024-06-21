import React from 'react';

const Cart = ({ cart, removeFromCart, calculateTotal }) => {
  return (
    <div className="cart-items">
      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div className="cart-item-details">
            <p>{item.name}</p>
            <p>${item.price}</p>
          </div>
          <button onClick={() => removeFromCart(item)}>Remove</button>
        </div>
      ))}
      <h3>Total: ${calculateTotal()}</h3>
    </div>
  );
};

export default Cart;

import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const clearCart = () => {
  setCartItems([]);
};


  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find(item => item.title === product.title);
      if (existing) {
        return prevItems.map(item =>
          item.title === product.title ? { ...item, quantity: item.quantity + 1 } : item
        );
      }else{
      return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productTitle) => {
    setCartItems((prevItems) =>
      prevItems.filter(item => item.title !== productTitle)
    );
  };

  const increment = (title) => {
    setCartItems((prevItems) =>
      prevItems.map(item =>
        item.title === title ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrement = (title) => {
    setCartItems((prevItems) =>
      prevItems.map(item =>
        item.title === title
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, increment, decrement, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (item) => {
    const existingItem = cartItem.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedCart = cartItem.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
          : cartItem
      );
      setCartItem(updatedCart);
      localStorage.setItem("cartItem", JSON.stringify(updatedCart));
    } else {
      setCartItem([...cartItem, item]);
      localStorage.setItem("cartItem", JSON.stringify([...cartItem, item]));
    }
  };

  const removeFromCart = (id) => {
    const updatedCart = cartItem.filter((item) => item.id !== id);
    setCartItem(updatedCart);
    localStorage.setItem("cartItem", JSON.stringify(updatedCart));
  };

  const updateCartItemQuantity = (id, quantity) => {
    const updatedCart = cartItem.map((item) => {
      if (item.id === id) {
        item.quantity = quantity;
      }
      return item;
    });
    setCartItem(updatedCart);
    localStorage.setItem("cartItem", JSON.stringify(updatedCart));
  };

  useEffect(() => {
    const json = localStorage.getItem("cartItem");
    const savedCart = JSON.parse(json);
    if (savedCart) {
      setCartItem(savedCart);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(cartItem);
    localStorage.setItem("cartItem", json);
  }, [cartItem]);

  return (
    <CartContext.Provider
      value={{
        cartItem,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

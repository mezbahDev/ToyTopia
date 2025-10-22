import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item, quantity) => {
    setCartItems((prev) => {
      const existingItem = prev.find((i) => i.id === item.toyId);
      if (existingItem) {
        return prev.map((i) =>
          i.id === item.toyId ? { ...i, quantity: i.quantity + quantity } : i
        );
      } else {
        return [
          ...prev,
          {
            id: item.toyId,
            name: item.toyName,
            price: item.price,
            img: item.pictureURL,
            seller: item.sellerName || "Unknown",
            quantity: quantity,
          },
        ];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const grandTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, grandTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};

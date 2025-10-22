import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (toy) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === toy.toyId);
      if (existing) {
        return prevItems.map((item) =>
          item.id === toy.toyId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [
          ...prevItems,
          {
            id: toy.toyId,
            name: toy.toyName,
            seller: toy.seller || "Unknown",
            price: toy.price,
            quantity: 1,
            img: toy.pictureURL,
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

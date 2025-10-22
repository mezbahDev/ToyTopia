import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ShoppingCart = () => {
  const { cartItems, removeFromCart, grandTotal } = useContext(CartContext);

  return (
    <div className="flex flex-col md:flex-row gap-10 p-6 max-w-6xl mx-auto text-black">
      <div className="flex-1 flex flex-col gap-4">
        {cartItems.length === 0 && (
          <p className="text-white text-2xl font-semibold text-center mt-10">
            Your cart is empty.
          </p>
        )}

        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white rounded-3xl shadow-lg p-4 hover:shadow-xl transition-shadow"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-[100px] h-[100px] object-cover rounded-l-3xl"
            />
            <div className="flex-1 px-4 flex flex-col justify-center gap-2">
              <p>
                Item: <span className="font-semibold">{item.name}</span>
              </p>
              <p>
                Seller: <span className="font-semibold">{item.seller}</span>
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 mr-5">
              <p>Price</p>
              <p className="font-semibold">${item.price.toFixed(2)}</p>
            </div>
            <div className="flex flex-col items-center gap-2 mr-5">
              <p>Quantity</p>
              <p className="font-semibold">{item.quantity}</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p>Sub Total</p>
              <p className="font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 cursor-pointer font-bold text-xl ml-4 hover:text-red-700 transition"
            >
              &times;
            </button>
          </div>
        ))}
      </div>

      <div className="w-full md:w-64 bg-white p-6 rounded-3xl shadow-lg flex flex-col justify-between h-[250px]">
        <div className="flex flex-col gap-4 mb-4 overflow-y-auto">
          <h2 className="font-bold text-xl">Cart Summary</h2>
          <p>
            Total Items:{" "}
            <span className="font-semibold">{cartItems.length}</span>
          </p>
          <p className="text-lg font-semibold">
            Grand Total: ${grandTotal.toFixed(2)}
          </p>
        </div>
        <button className="w-full bg-[#FBC270] p-3 rounded-2xl cursor-pointer shadow-md text-black font-semibold hover:bg-[#4178a1] hover:text-white transition-colors">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;

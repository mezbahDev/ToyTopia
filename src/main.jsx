import { StrictMode } from "react";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";
import { createRoot } from "react-dom/client";
import AuthProvider from "./provider/AuthProvider";
import { CartProvider } from "./context/CartContext";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  </StrictMode>
);

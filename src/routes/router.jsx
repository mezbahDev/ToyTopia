import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Products from "../pages/Products";
import Signin from "../pages/Signin";
import ShoppingCart from "../pages/ShoppingCart";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/aboutus", element: <AboutUs /> },
      { path: "/login", element: <Signin /> },
      { path: "/cart", element: <ShoppingCart /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;

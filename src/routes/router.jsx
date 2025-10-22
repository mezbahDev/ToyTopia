import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Products from "../pages/Products";
import Signin from "../pages/Signin";
import ShoppingCart from "../pages/ShoppingCart";
import NotFound from "../pages/NotFound";
import SignUp from "../pages/SignUp";
import ToyDetails from "../pages/ToyDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/aboutus", element: <AboutUs /> },
      { path: "/signin", element: <Signin /> },
      { path: "/cart", element: <ShoppingCart /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/toys/:id", element: <ToyDetails /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;

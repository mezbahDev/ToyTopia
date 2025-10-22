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
import MyProfile from "../pages/MyProfile";
import PrivateRoute from "../routes/PrivateRoute";
import ForgotPassword from "../pages/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "aboutus", element: <AboutUs /> },
      { path: "signin", element: <Signin /> },
      { path: "signup", element: <SignUp /> },
      { path: "forgot-password", element: <ForgotPassword /> },

      {
        path: "cart",
        element: (
          <PrivateRoute>
            <ShoppingCart />
          </PrivateRoute>
        ),
      },

      {
        path: "toys/:id",
        element: (
          <PrivateRoute>
            <ToyDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "myprofile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;

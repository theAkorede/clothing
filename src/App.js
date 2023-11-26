import React from "react";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Cart from "./Pages/Cart";
import ProductCart from "./Components/ProductCart";
import Login from "./Pages/Login";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/ProductCart/:id",
        element: <ProductCart />
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);


function App() {
  return (
    <RouterProvider router={router}>
      <ScrollRestoration />
    </RouterProvider>
  );
}

export default App;

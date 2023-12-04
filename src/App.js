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
import { whatsapp } from "./assets";

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
        element: <ProductCart />,
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
    <div>
      <RouterProvider router={router}>
        <ScrollRestoration />
      </RouterProvider>

      <div
        className="fixed bottom-0 right-0 p-3 cursor-pointer"
        style={{ zIndex: 6, left: "auto" }}
      >
        <a
          href="https://wa.me/+2349026000778?text=Hello! have some questions. Can i help you?"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <img src={whatsapp} alt="Whatsapp" className="w-16 h-15" />
        </a>
      </div>
    </div>
  );
}

export default App;

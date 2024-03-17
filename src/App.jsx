import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Home from "./Home" ;
import Navbar from "./Navbar" ;
import Footer from "./Footer" ;

import Products from "./Products" ;
import Product from "./Product" ;
import { useEffect } from 'react';

const Layout = () => {

  return(
    <div>
    <Navbar />
    <Outlet />
    <Footer />
    </div>
  )
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
          path: "/",
          element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
    },
    {
      path: "/product/:id",
        element: <Product />,
  },
    ]
  }
]);


function App() {

  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default App

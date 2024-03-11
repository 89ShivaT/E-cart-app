import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ProdectDetails from "./componets/ProdectDetails";
import {createBrowserRouter , RouterProvider, Route } from "react-router-dom";

const router =  createBrowserRouter([{
  path : "/",
  element : <App/>
},
{
  path : "/Product/:id",
  element : <ProdectDetails/>
}

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);

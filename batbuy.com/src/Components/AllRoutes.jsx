import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Products from "../Pages/Products";
import ProductDetails from "../Pages/ProductDetails";
import Cart from "../Pages/Cart";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/products/:category" element={<Products />}></Route>
      <Route path="/product-details/:id" element={<ProductDetails />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Routes>
  );
};

export default AllRoutes;

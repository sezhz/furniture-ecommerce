import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import All from "./components/CategoriesPages/All";
import Chairs from "./components/CategoriesPages/Chairs";
import Footstools from "./components/CategoriesPages/Footstools";
import Sideboards from "./components/CategoriesPages/Sideboards";
import Furnitures from "./components/CategoriesPages/Furnitures";
import Sofas from "./components/CategoriesPages/Sofas";
import Tables from "./components/CategoriesPages/Tables";
import Ordering from "./pages/Ordering";
import ProductPage, { CartContext } from "./pages/ProductPage";

const App = () => {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (item) => {
    setCartItem([...cartItem, item]);
  };

  useEffect(() => {
    const json = localStorage.getItem("cartItem");
    const savedCart = JSON.parse(json);
    if (savedCart) {
      setCartItem(savedCart);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(cartItem);
    localStorage.setItem("cartItem", json);
  }, [cartItem]);

  return (
    <CartContext.Provider value={{ cartItem, addToCart, setCartItem }}>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="categories" element={<Categories />}>
          <Route path="all" element={<All />} />
          <Route path="chairs" element={<Chairs />} />
          <Route path="footstools" element={<Footstools />} />
          <Route path="sideboards" element={<Sideboards />} />
          <Route path="furnitures" element={<Furnitures />} />
          <Route path="sofas" element={<Sofas />} />
          <Route path="tables" element={<Tables />} />
        </Route>
        <Route path="categories/product/:id" element={<ProductPage />} />
        <Route path="ordering" element={<Ordering />} />
      </Routes>
    </CartContext.Provider>
  );
};

export default App;

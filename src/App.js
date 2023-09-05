import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import All from "./components/CategoriesPages/All";
import Chairs from "./components/CategoriesPages/Chairs";
import Footstools from "./components/CategoriesPages/Footstools";
import Sideboards from "./components/CategoriesPages/Sideboards";
import Furniture from "./components/CategoriesPages/Furniture";
import Sofas from "./components/CategoriesPages/Sofas";
import Tables from "./components/CategoriesPages/Tables";
import Ordering from "./pages/Ordering";
import ProductPage from "./pages/ProductPage";
import { CartProvider } from "./components/Cart/CartProvider";

const App = () => {
  return (
    <CartProvider>
      <div>
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="categories" element={<Categories />}>
            <Route path="all" element={<All />} />
            <Route path="chairs" element={<Chairs />} />
            <Route path="footstools" element={<Footstools />} />
            <Route path="sideboards" element={<Sideboards />} />
            <Route path="furniture" element={<Furniture />} />
            <Route path="sofas" element={<Sofas />} />
            <Route path="tables" element={<Tables />} />
          </Route>
          <Route path="categories/product/:id" element={<ProductPage />} />
          <Route path="ordering" element={<Ordering />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </CartProvider>
  );
};

export default App;

import { Link } from "react-router-dom";
import EmptyCartImg from "../../img/cart/empty-cart.png";
import React from "react";

const EmptyCart = ({ openCart }) => {
  return (
    <div className="empty-cart">
      <img src={EmptyCartImg} alt="empty-cart" />
      <p>your cart is empty</p>
      <Link to="/categories/all">
        <button onClick={openCart}>Keep Browsing</button>
      </Link>
    </div>
  );
};

export default EmptyCart;

import EmptyCartImg from "../../img/cart/empty-cart.png";
import React from "react";

const EmptyCart = ({ openCart }) => {
  return (
    <div className="empty-cart">
      <img src={EmptyCartImg} alt="empty-cart" />
      <p>your cart is empty</p>
      <button onClick={openCart}>Keep Browsing</button>
    </div>
  );
};

export default EmptyCart;

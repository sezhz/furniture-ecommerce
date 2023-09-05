import React, { useContext } from "react";
import CartItem from "./CartItem";
import { CartContext } from "./CartProvider";
import EmptyCart from "./EmptyCart";
import { Link } from "react-router-dom";

const CartWithItems = (props) => {
  const { cartItem } = useContext(CartContext);

  const totalItemsPrice = cartItem.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  return (
    <>
      <div className="full-cart-div">
        <div className="full-cart">
          {cartItem.length > 0 ? (
            cartItem.map((item) => <CartItem key={item.id} item={item} />)
          ) : (
            <EmptyCart />
          )}
        </div>
      </div>
      <div className="subtotal-div">
        <div className="sub-right">
          <p>Subtotal</p>
          <p className="total-price">{totalItemsPrice.toFixed(2)}$</p>
        </div>
        <div className="sub-left">
          <Link to="/ordering" onClick={() => props.closeCart()}>
            Go to Checkout
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartWithItems;


import React, { useContext, useEffect, useState } from "react";
import CartItem from "./CartItem";
import { CartContext } from "../../pages/ProductPage";
import EmptyCart from "./EmptyCart";
import { Link } from "react-router-dom";

const CartWithItems = () => {
  const { cartItem, setCartItem } = useContext(CartContext);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newTotalPrice = cartItem.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(newTotalPrice);
  }, [cartItem]);

  return (
    <>
      <div className="full-cart-div">
        <div className="full-cart">
          {cartItem.map((item, id) =>
            cartItem.length !== 0 ? (
              <CartItem key={id} item={item} setCartItem={setCartItem} />
            ) : (
              <EmptyCart key={id} />
            )
          )}
        </div>
      </div>
      <div className="subtotal-div">
        <div className="sub-right">
          <p>Subtotal</p>
          <p className="total-price">{totalPrice + ".00$"}</p>
        </div>
        <div className="sub-left">
          <Link to='/ordering'>Go to Checkout</Link>
        </div>
      </div>
    </>
  );
};

export default CartWithItems;

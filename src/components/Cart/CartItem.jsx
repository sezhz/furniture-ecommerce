import React, { useContext } from "react";
import { CartContext } from "./CartProvider";

const CartItem = ({ item }) => {
  const { removeFromCart, updateCartItemQuantity } = useContext(CartContext);

  const increase = () => {
    updateCartItemQuantity(item.id, item.quantity + 1);
  };

  const decrease = () => {
    if (item.quantity > 1) {
      updateCartItemQuantity(item.id, item.quantity - 1);
    }
  };

  const calcPrice = () => {
    if (item) {
      return item.quantity * item.price;
    }
    return 0;
  };

  return (
    <div className="cart-item">
      <div className="cart-img">
        <img src={item.img} alt="product" />
      </div>
      <div className="cart-middle">
        <p className="cart-name">{item.description}</p>
        <div className="cart-btns">
          <button onClick={decrease}>-</button>
          <p className="quantity">{item.quantity}</p>
          <button onClick={increase}>+</button>
        </div>
      </div>
      <div className="cart-right">
        <p className="cart-price">{calcPrice().toFixed(2)}$</p>
        <i
          onClick={() => removeFromCart(item.id)}
          className="fa-sharp fa-solid fa-xmark"
        ></i>
      </div>
    </div>
  );
};

export default CartItem;

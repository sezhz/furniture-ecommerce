import React, { useContext, useState } from "react";
import { CartContext } from "../components/Cart/CartProvider";
import { useParams, useNavigate } from "react-router-dom";
import { items } from "../components/AllData";
import TrendingSlider from "../components/Trending/TrendingSlider";
import Feedback from "../components/Feedback/Feedback";
import Footer from "../components/Footer/Footer";
import '../pages/ProductPage.css';

const ProductPage = () => {
  const { id } = useParams();
  const item = items.find((item) => item.id === parseInt(id));
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState(item.img);

  const { addToCart } = useContext(CartContext);

  const increase = () => {
    setQuantity(quantity + 1);
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const calcPrice = (quantity) => {
    return quantity * item.price;
  };

  const [notify, setNotify] = useState(false);

  const showNotify = () => {
    setNotify(true);
    setTimeout(() => {
      setNotify(false);
    }, 2000);
  };

  const handleAddToCartClick = () => {
    addToCart({ ...item, quantity });
    showNotify();
  };

  const handleCheckoutClick = () => {
    addToCart({ ...item, quantity });
    showNotify();
    navigate("/ordering");
  };

  return (
    <>
      <div
        onAnimationEnd={() => setNotify(false)}
        className={`notify ${notify ? "slide-in" : ""}`}
      >
        <p>Item has been added to the cart &nbsp; 🧺</p>
      </div>

      <div className="product-page-div">
        <div className="container">
          <div className="product-div">
            <h3 className="product-big-name">{item.description}</h3>
            <div className="product-left">
              <div className="big-img">
                <img src={image} alt="product" />
              </div>
              <div className="small-imgs"></div>
            </div>
            <div className="product-right">
              <p className="product-spec">{item.specs}</p>
              <div className="product-quant">
                <p>Quantity</p>
                <div className="product-btns">
                  <button onClick={decrease}>-</button>
                  <p className="quantity">{quantity}</p>
                  <button onClick={increase}>+</button>
                </div>
                <p className="product-price">{calcPrice(quantity)}.00$</p>
              </div>
              <div className="atc-buy">
                <button onClick={handleAddToCartClick} className="atc-btn">
                  add to cart
                </button>
                <button onClick={handleCheckoutClick} className="buy-btn">
                  buy now
                </button>
              </div>
            </div>
          </div>

          <div className="specifications">
            <div className="spec">
              <p className="spec-title">Texture:</p>
              <p className="title-desc">{item.texture}</p>
            </div>
            <div className="spec">
              <p className="spec-title">Weight:</p>
              <p className="title-desc">{item.weight}</p>
            </div>
            <div className="spec">
              <p className="spec-title">Size:</p>
              <p className="title-desc">{item.size}</p>
            </div>
          </div>
        </div>
        <TrendingSlider />
        <Feedback />
        <Footer />
      </div>
    </>
  );
};

export default ProductPage;

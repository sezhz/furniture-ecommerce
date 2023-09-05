import "./Navbar.css";

import LogoImg from "../../img/logo1.png";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import CartWithItems from "../Cart/CartWithItems";
import EmptyCart from "../Cart/EmptyCart";
import { CartContext } from "../Cart/CartProvider";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [cart, setCart] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  const { cartItem } = useContext(CartContext);

  const totalQuantity = cartItem.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const openCart = () => {
    setCart(!cart);
  };

  window.addEventListener("scroll", handleScroll);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className={`mobile-nav-full ${mobileNav ? "open-flex" : "closed-flex"}`}
      >
        <i
          onClick={() => setMobileNav(!mobileNav)}
          className="fa-sharp fa-solid fa-xmark"
        ></i>
        <div className="mobile-links">
          <Link onClick={() => setMobileNav(!mobileNav)} to="/categories/all">
            categories
          </Link>
          <Link
            onClick={() => setMobileNav(!mobileNav)}
            to="/categories/tables"
          >
            tables
          </Link>
          <Link
            onClick={() => setMobileNav(!mobileNav)}
            to="/categories/product/7"
          >
            product
          </Link>
        </div>
      </div>

      <div
        onClick={openCart}
        className={`page-overlay ${cart ? "open-flex" : "closed-flex"}`}
      ></div>

      <div className={`cart-div ${cart ? "open-cart" : "closed-cart"}`}>
        <div className="cart-title-btn">
          <h2 className="cart-full-h2">Your Shopping Cart</h2>
          <i onClick={openCart} className="fa-sharp fa-solid fa-xmark"></i>
        </div>

        <div className="cart-body">
          {cartItem.length < 1 ? (
            <EmptyCart openCart={openCart} />
          ) : (
            <CartWithItems />
          )}
        </div>
      </div>

      <nav className="navbar">
        <div className="container">
          <div className={`nav-container ${sticky ? "cont-sticky" : ""}`}>
            <Link to="/">
              <img
                onClick={scrollToTop}
                src={LogoImg}
                alt="logo"
                className="logo-img"
              />
            </Link>
            <div className="nav-links">
              <Link onClick={() => window.scrollTo(0, 0)} to="/categories/all">
                categories
              </Link>
              <Link
                onClick={() => window.scrollTo(0, 0)}
                to="/categories/product/6"
              >
                product page
              </Link>
              <i
                data-array-length={totalQuantity}
                onClick={openCart}
                className={`fa-solid fa-cart-shopping ${
                  totalQuantity < 1 ? "cart-icon" : "cart-icon with-items"
                }`}
              ></i>
            </div>
            <div className="hamburger-menu">
              <i
                data-array-length={totalQuantity}
                onClick={openCart}
                className={`fa-solid fa-cart-shopping hamburger-cart ${
                  totalQuantity < 1 ? "cart-icon" : "cart-icon with-items"
                }`}
              ></i>
              <i
                onClick={() => setMobileNav(!mobileNav)}
                className="fa-solid fa-bars hamburger-hamb"
              ></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

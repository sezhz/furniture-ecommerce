import React, { useState } from "react";
import { Link } from "react-router-dom";

const CategoriesHeader = () => {
  const [btnName, setBtnName] = useState("All");

  const handleBtnName = (e) => {
    setBtnName(e);
  };

  return (
    <>
      <div className="container">
        <div className="catego-header">
          <div className="title-home">
            <Link onClick={() => window.scrollTo(0, 0)} to="/">
              <i className="fa-solid fa-angle-left"></i>Home
            </Link>
            <h3>{btnName}</h3>
          </div>
          <div className="filter-btns">
            <Link to="all" onClick={() => handleBtnName("all")}>
              <button>All</button>
            </Link>
            <Link to="sofas" onClick={() => handleBtnName("sofas")}>
              <button>Sofas</button>
            </Link>
            <Link to="chairs" onClick={() => handleBtnName("chairs")}>
              <button>Chairs</button>
            </Link>
            <Link to="sideboards" onClick={() => handleBtnName("sideboards")}>
              <button>Sideboards</button>
            </Link>
            <Link to="tables" onClick={() => handleBtnName("tables")}>
              <button>Tables</button>
            </Link>
            <Link to="footstools" onClick={() => handleBtnName("footstools")}>
              <button>Footstool</button>
            </Link>
            <Link to="furnitures" onClick={() => handleBtnName("furniture")}>
              <button>Furnitures</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesHeader;

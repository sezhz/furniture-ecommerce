import React, { useEffect, useState } from "react";
import TrendingItem from "./TrendingItem";
import "./TrendingSlider.css";

const TrendingSlider = () => {
  const [scrollDistance, setScrollDistance] = useState(235);

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - scrollDistance;
  };
  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + scrollDistance;
  };

  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
      setScrollDistance(350)
    }
  }, []);

  return (
    <div className="trending">
      <div className="container">
        <div className="title-btns">
          <h3>Best deals</h3>
          <div className="btns">
            <button title="scroll left" onClick={slideLeft}>
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button title="scroll right" onClick={slideRight}>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <div className="row-container" id="slider">
          <TrendingItem />
        </div>
      </div>
    </div>
  );
};

export default TrendingSlider;

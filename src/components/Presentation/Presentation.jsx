import "./Presentation.css";
import Main1 from "../../img/presentation/presentation1.png";
import Main2 from "../../img/presentation/presentation2.png";
import Main3 from "../../img/presentation/presentation3.png";
import Main4 from "../../img/presentation/presentation4.png";
import { Link } from "react-router-dom";

const Presentation = () => {
  return (
    <>
      <div className="home-container">
        <div className="container">
          <div className="grid-container">
            <div className="featured grid-one">
              <Link to="categories/all">
                <div id="img1" className="lil-overlay"></div>
                <img src={Main1} alt="img1" />
                <p className="main-description">Live Comfortably</p>
              </Link>
            </div>
            <div className="featured grid-two">
              <Link to="categories/tables">
                <div id="img2" className="lil-overlay"></div>
                <img src={Main2} alt="img2" />
                <p className="main-description">Tables</p>
              </Link>
            </div>
            <div className="featured grid-four">
              <Link to="categories/chairs">
                <div id="img3" className="lil-overlay"></div>
                <img src={Main3} alt="img3" />
                <p className="main-description">Chairs</p>
              </Link>
            </div>
            <div className="featured grid-four-low">
              <Link to="categories/sofas">
                <div id="img4" className="lil-overlay"></div>
                <img src={Main4} alt="img4" />
                <p className="main-description">Sofas</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Presentation;

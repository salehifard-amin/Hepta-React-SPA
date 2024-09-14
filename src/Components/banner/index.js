import { Fragment } from "react";
import "./style.css"
import { Link } from "react-router-dom";
 
export default function Banner() {
  return (
    <Fragment>
      <div className="banner">
        <div className="banner-content-holder flex justify-center align-center">
          <div className="banner-content text-center pos-relative">
            <div className="container">
              <h1>Travel & Tours</h1>
              <p>
                A free template by{" "}
                <Link to="/#" className="trans-250ms">
                  Colorlib
                </Link>
                . Download and share!
              </p>
              <Link to="/gallery" className="button">
                visit colorlib
              </Link>
            </div>
          </div>
        </div>
        <div className="scroll text-center">
          <a href="#" className="white">
            <i className="fa-solid fa-play"></i>
            <p className="uppercase">scroll down</p>
          </a>
        </div>
      </div>
    </Fragment>
  );
}

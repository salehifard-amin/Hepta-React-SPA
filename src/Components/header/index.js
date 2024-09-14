import { Fragment } from "react";
import "./style.css";
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <Fragment>
      <div className="header">
        <div className="container-full">
          <div className="flex justify-between align-center">
            <div className="logo font-30">
              <Link
                to="/"
                className="white"
              >
                Hepta
              </Link>
            </div>
            <div className="hamburger-menu flex flex-column justify-between">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

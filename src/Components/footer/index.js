import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Footer() {
  const quickLinks = [
    {
      link: "/",
      paragraph: "Home",
    },
    {
      link: "/about-us",
      paragraph: "About us",
    },
    {
      link: "/gallery",
      paragraph: "Gallery",
    },
  ];
  const supportLinks = [
    {
      link: "https://maps.google.com/",
      paragraph: "Our Location",
    },
    {
      link: "https://www.merriam-webster.com/dictionary/host#:~:text=of%204%20noun-,1,host",
      paragraph: "The Hosts",
    },
    {
      link: "https://about.me/",
      paragraph: "About",
    },
    {
      link: "https://www.google.co.uk/",
      paragraph: "Contact",
    },
    {
      link: "https://www.google.co.uk/",
      paragraph: "Restaurant",
    },
  ];

  const renderLinks = (arrayList) => {
    return arrayList.map(({ link, paragraph }) => {
      return (
        <Link to={link}>
          <p>{paragraph}</p>
        </Link>
      );
    });
  };
  return (
    <Fragment>
      <div className="footer bg-black">
        <div className="padding-section">
          <div className="container">
            <div className="top-footer grid">
              <div className="col-3">
                <div className="top-footer-item capitalize white">
                  <h4 className="white mb-30">quick link</h4>
                  {renderLinks(quickLinks)}
                </div>
              </div>
              <div className="col-3">
                <div className="top-footer-item capitalize white">
                  <h4 className="white mb-30">support</h4>
                   {renderLinks(supportLinks)}
                </div>
              </div>
              <div className="col-3">
                <div className="top-footer-item capitalize white font-18 ">
                  <h4 className="white mb-30">contact info</h4>
                  <p className="italic">address:</p>
                  <span>98 West 21th Street, Suite 721 New York NY 10016</span>
                  <p className="italic">phone:</p>
                  <span>(+1) 435 3533</span>
                  <p className="italic">Email:</p>
                  <span>info@yourdomain.com</span>
                </div>
              </div>
              <div className="col-3">
                <div className="top-footer-item capitalize white font-18">
                  <h4 className="white mb-30">Subscribe</h4>
                  <span>Sign up for our newsletter</span>
                  <div className="email flex pos-relative align-center justify-between mt-30">
                    <input type="text" placeholder="your eamil..." />
                    <button>
                      <i className="fa-solid fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-footer text-center white">
              <p className="opacity07">
                Copyright © 2024 All rights reserved | This template is made
                with <i className="fa-regular fa-heart font-18"></i> by Colorlib
                & Amin Salehi!
              </p>
              <div className="follow-us font-18">
                <a href="#">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

import React from "react";
import logo from "./images/logo.png";
import "./header.css";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="navigation">
            <div className="logo">
              <img src={logo} />
            </div>
            <nav className="navbar">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Product</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </nav>
            <button className="header_btn">Buy Now</button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

import React from "react";
import "./footer_style.css";

import facebook_1 from "./image/facebook 1.png";
import Group_117 from "./image/Group 117.png";
import Group_116 from "./image/Group-116.png";
import Group_118 from "./image/Group 118.png";
import instagram_1 from "./image/instagram 1.png";
import linkedin_1 from "./image/linkedin 1.png";
import twitter_1 from "./image/twitter 1.png";
import logo from "./image/logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container row-footer">
          <div className="column-one">
            <a href="#">
              <img className="foot-logo" src={logo} />
            </a>
            <p>
              Some food has looked so awful that it's looked like something that
              the dog's brought home.
            </p>
            <h3>Fllow Us</h3>
            <div className="footer-icons">
              <a href="#">
                <img src={facebook_1} />
              </a>
              <a href="#">
                <img src={twitter_1} />
              </a>
              <a href="#">
                <img src={instagram_1} />
              </a>
              <a href="#">
                <img src={linkedin_1} />
              </a>
            </div>
          </div>

          <div className="column-two">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Product</a>
              </li>
              <li>
                <a href="#">Blog</a>
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
          </div>

          <div className="column-three">
            <ul>
              <li>
                <a href="#">Delivery Information</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Condition</a>
              </li>
              <li>
                <a href="#">Search Terms</a>
              </li>
              <li>
                <a href="#">Order & Return</a>
              </li>
            </ul>
          </div>

          <div className="column-four">
            <h2>Newsletter</h2>
            <form action="">
              <label for="email"></label>
              <input
                className="email"
                type="email"
                id="email"
                name="email:"
                placeholder="Your Email"
              />
              <input className="foot-submit" type="submit" value="Subscribe" />
            </form>
            <div className="footer-logos">
              <a href="#">
                <img src={Group_118} />
              </a>
              <a href="#">
                <img src={Group_117} />
              </a>
              <a href="#">
                <img src={Group_116} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

import React from "react";
import "./main_style.css";
import apple from "./image/apple.png";
import bg_ice_cream from "./image/bg-ice-cream.png";
import car from "./image/car.png";
import card1 from "./image/card1.png";
import card2 from "./image/card2.png";
import card3 from "./image/card3.png";
import cash_back from "./image/cash-back.png";
import child_1 from "./image/child_1.png";
import child_2 from "./image/child_2.png";
import child_3 from "./image/child_3.png";
import child_4 from "./image/child_4.png";
import Ellipse_soya from "./image/Ellipse-soya.png";
import Ellipse_soya2 from "./image/Ellipse-soya2.png";
import Ellipse from "./image/Ellipse.png";
import fast_delivery_1 from "./image/fast-delivery 1.png";
import five_img from "./image/five-img.jpg";
import google_play from "./image/google-play.png";
import Group from "./image/Group.png";
import ice_cream from "./image/ice-cream.png";
import qizaloq from "./image/qizaloq.png";
import section2_image from "./image/section2-image.png";
import yigitcha from "./image/yigitcha.png";

const Main = () => {
  return (
    <div>
      <main className="main">
        <section className="first_section">
          <div className="container">
            <div className="ice-cream">
              <div className="ice-cream-title">
                <h5>Sweet fun, full of milk.</h5>
                <h1>
                  Feel inside cold with our delicious <span>ice-cream.</span>
                </h1>
                <p>
                  Some food has looked so awful that it's looked like something
                  that the dog's brought home, yet after one mouthful I've been
                  left eating my thoughts, my words.
                </p>
                <button className="ice-cream-btn">Buy Now</button>
              </div>
              <div className="ice-cream-img">
                <img src={ice_cream} />
              </div>
              <img className="bg-ellips" src={Ellipse} />
              <img className="bg-ice-cream" src={bg_ice_cream} />
              <img className="bg-ellips-soya" src={Ellipse_soya} />
            </div>
          </div>
        </section>

        <section className="second_section">
          <div className="container">
            <div className="cards">
              <div className="card">
                <a href="#">
                  {" "}
                  <img src={car} />
                </a>
                <h2>Free Shipping</h2>
                <p>Last Chance! Free shipping on all orders ends today.</p>
              </div>
              <div className="card">
                <a href="#">
                  {" "}
                  <img src={Group} />
                </a>
                <h2>Quick Packaging</h2>
                <p>Last Chance! Free shipping on all orders ends today.</p>
              </div>
              <div className="card">
                <a href="#">
                  <img src={cash_back} />
                </a>
                <h2>100% Money Back</h2>
                <p>Last Chance! Free shipping on all orders ends today.</p>
              </div>
              <div className="card">
                <a href="#">
                  <img src={fast_delivery_1} />
                </a>
                <h2></h2>
                <p>Last Chance! Free shipping on all orders ends today.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="third_section">
          <div className="container">
            <div className="section_sugar">
              <div className="sugar_title">
                <h1>
                  Brown Sugar <br /> Oatmea
                </h1>
                <p>
                  Together with McDonald's, Burger King has grown to become
                  synonymous with burgers in the US.Together with McDonald's,
                  Burger King has grown to become synonymous.
                </p>
                <button className="third_section_btn">See Details</button>
              </div>
              <div className="sugar_img">
                <img src={section2_image} />
                <img src={Ellipse_soya2} />
              </div>
            </div>
          </div>
        </section>

        <section className="four_section">
          <div className="container">
            <div className="products">
              <div className="title">
                <h1>Our Products</h1>
              </div>

              <nav className="product_navbar">
                <ul>
                  <li>
                    <a href="#">ICE CREAM</a>
                  </li>
                  <li>
                    <a href="#">CAYENNE CHOCOLATE</a>
                  </li>
                  <li>
                    <a href="#">CAKE BATTER</a>
                  </li>
                  <li>
                    <a href="#">CANDY CANE</a>
                  </li>
                  <li>
                    <a href="#">PLATTERS</a>
                  </li>
                  <li>
                    <a href="#">DESSERT</a>
                  </li>
                </ul>
              </nav>

              <div className="product-card-one">
                <div className="image">
                  <img src={child_1} />
                </div>
                <div className="card-one-title">
                  <h2>Brown bread</h2>
                  <p>
                    Bon Au Pain is a pioneer in the healthy fast food scene.Bon
                    Au Pain is a pioneer in the healthy fast food scene.Bon Au
                    Pain is a pioneer in the healthy fast food scene.
                  </p>
                  <p className="narx">
                    <span className="big-narx">$19.55</span>
                    <span className="small-narx">$22.55</span>
                  </p>
                  <button className="card-one-btn">Buy Now</button>
                </div>
              </div>

              <div className="product-card-two">
                <div className="card-two-title">
                  <h2>Cayenne chocolate</h2>
                  <p>
                    Bon Au Pain is a pioneer in the healthy fast food scene.Bon
                    Au Pain is a pioneer in the healthy fast food scene.Bon Au
                    Pain is a pioneer in the healthy fast food scene.
                  </p>
                  <p className="narx">
                    <span className="big-narx">$19.55</span>
                    <span className="small-narx">$22.55</span>
                  </p>
                  <button className="card-two-btn">Buy Now</button>
                </div>
                <div className="image">
                  <img src={child_2} />
                </div>
              </div>

              <div className="product-card-one">
                <div className="image">
                  <img src={child_3} />
                </div>
                <div className="card-one-title">
                  <h2>Sweet corn</h2>
                  <p>
                    Bon Au Pain is a pioneer in the healthy fast food scene.Bon
                    Au Pain is a pioneer in the healthy fast food scene.Bon Au
                    Pain is a pioneer in the healthy fast food scene.
                  </p>
                  <p className="narx">
                    <span className="big-narx">$19.55</span>
                    <span className="small-narx">$22.55</span>
                  </p>
                  <button className="card-one-btn">Buy Now</button>
                </div>
              </div>

              <div className="product-card-two">
                <div className="card-two-title">
                  <div className="about">
                    <img src={qizaloq} />
                    <div className="about-title">
                      <h1>Adele A. McNeill</h1>
                      <p>AMIRICAN</p>
                    </div>
                  </div>
                  <p className="text-product">
                    {" "}
                    <strong>"</strong> Thanks a lot for the prompt service.
                    Really appreciate. Excellence taste in Every Bite.Add a joy
                    of best Taste. <br /> Foodie Moments. <strong>"</strong>{" "}
                  </p>
                  <div className="slider">
                    {/* <span><</span> */}
                    <img src={yigitcha} />
                    <img src={qizaloq} />
                    <img src={qizaloq} />
                    {/* <span>></span> */}
                  </div>
                </div>
                <div className="image">
                  <img src={child_4} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="five_section">
          <div className="container">
            <div className="five-row">
              <div className="five-img">
                <img src={five_img} />
              </div>
              <div className="five-title">
                <h1>Simple Way To Order Your Food</h1>
                <p>
                  Some food has looked so awful that it's looked like something
                  that the dog's brought home, yet after one mouthful I've been
                  left eating my thoughts.
                </p>
                <div className="five-icons">
                  <div className="icon">
                    <div className="icon-img">
                      <a href="#">
                        <img src={card1} />
                      </a>
                    </div>
                    <span>Select Your Food</span>
                  </div>
                  <div className="icon">
                    <div className="icon-img">
                      <a href="#">
                        <img src={card2} />
                      </a>
                    </div>
                    <span>Add To Cart</span>
                  </div>
                  <div className="icon">
                    <div className="icon-img">
                      <a href="#">
                        <img src={card3} />
                      </a>
                    </div>
                    <span>Order Your Food</span>
                  </div>
                </div>
                <div className="google-play-btn">
                  <a href="#">
                    <img src={apple} />
                  </a>
                  <a href="#">
                    <img src={google_play} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="six_section">
          <div className="container registration-container">
            <h1>
              Have Question in Mind? <br /> Let us help you
            </h1>
            <form action="" className="form">
              <div id="top-form">
                <label for="tel"></label>
                <input
                  className="tel"
                  type="tel"
                  id="tel"
                  name="tel:"
                  placeholder="Your phone number"
                />
                <label for="question"></label>
                <select className="question" name="question" id="question">
                  <optgroup>
                    <option value="Question type">Question type</option>
                  </optgroup>
                </select>
              </div>

              <label for="text"></label>
              <input
                className="text"
                type="text"
                id="text"
                name="text"
                placeholder="Enter your question"
              />
              <input className="submit" type="submit" value="Send" />
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Main;

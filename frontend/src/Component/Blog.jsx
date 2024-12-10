import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import image1 from "../assets/blog-hero-image.jpg";
import blog1 from "../assets/blog1.webp";
import blog2 from "../assets/blog2.webp";
import blog3 from "../assets/blog3.webp";
import blog4 from "../assets/blog4.webp";
import person1 from "../assets/person1.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Blog() {
  return (
    <div className="blog-page">
      <Navbar />
      <div className="blog-hero-image">
        <h2>BLOGS</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint id
          temporibus aspernatur corporis nisi expedita iusto, neque porro,
          tenetur quia, ipsa delectus beatae repudiandae quidem. Doloribus quod
          iusto repellendus officiis?
        </p>
      </div>
      <div className="main-blog-page">
        <div className="left-main-blog-page">
          <div className="blog-search-container">
            <input
              type="text"
              placeholder="Search ... "
              className="blog-searchbar"
            />
          </div>
          <h2>Categories</h2>
          <div className="category-container">
            <div className="category culture">Culture</div>
            <div className="category creativity">Creativity</div>
            <div className="category technology">Technology</div>
            <div className="category product">Products</div>
            <div className="category quality">Quality</div>
          </div>
        </div>
        <div className="right-main-blog-page">
          <div className="blog-container">
            <img src={blog1} alt="" />
            <div className="blog-message">
              <p>FOOD, CUSTOM NOV 17,2020</p>
              <h4>Awesome food and destination</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In aut
                magnam aperiam iste dolorum ad cum excepturi cupiditate illo
                amet.
              </p>
              <div className="blog-user">
                <div>
                  <img src={person1} alt="" className="blog-username" />{" "}
                  <span>Prajon Adhikari</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faHeart} className="heart-icon" />{" "}
                  <span>20</span>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-container">
            <img src={blog2} alt="" />
            <div className="blog-message">
              <p>FOOD, CUSTOM NOV 17,2020</p>
              <h4>Awesome food and destination</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In aut
                magnam aperiam iste dolorum ad cum excepturi cupiditate illo
                amet.
              </p>
              <div className="blog-user">
                <div>
                  <img src={person1} alt="" className="blog-username" />{" "}
                  <span>Prajon Adhikari</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faHeart} className="heart-icon" />{" "}
                  <span>20</span>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-container">
            <img src={blog3} alt="" />
            <div className="blog-message">
              <p>FOOD, CUSTOM NOV 17,2020</p>
              <h4>Awesome food and destination</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In aut
                magnam aperiam iste dolorum ad cum excepturi cupiditate illo
                amet.
              </p>
              <div className="blog-user">
                <div>
                  <img src={person1} alt="" className="blog-username" />{" "}
                  <span>Prajon Adhikari</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faHeart} className="heart-icon" />{" "}
                  <span>20</span>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-container">
            <img src={blog4} alt="" />
            <div className="blog-message">
              <p>FOOD, CUSTOM NOV 17,2020</p>
              <h4>Awesome food and destination</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In aut
                magnam aperiam iste dolorum ad cum excepturi cupiditate illo
                amet.
              </p>
              <div className="blog-user">
                <div>
                  <img src={person1} alt="" className="blog-username" />{" "}
                  <span>Prajon Adhikari</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faHeart} className="heart-icon" />{" "}
                  <span>20</span>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-container">
            <img src={image1} alt="" />
            <div className="blog-message">
              <p>FOOD, CUSTOM NOV 17,2020</p>
              <h4>Awesome food and destination</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In aut
                magnam aperiam iste dolorum ad cum excepturi cupiditate illo
                amet.
              </p>
              <div className="blog-user">
                <div>
                  <img src={person1} alt="" className="blog-username" />{" "}
                  <span>Prajon Adhikari</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faHeart} className="heart-icon" />{" "}
                  <span>20</span>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-container">
            <img src={image1} alt="" />
            <div className="blog-message">
              <p>FOOD, CUSTOM NOV 17,2020</p>
              <h4>Awesome food and destination</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In aut
                magnam aperiam iste dolorum ad cum excepturi cupiditate illo
                amet.
              </p>
              <div className="blog-user">
                <div>
                  <img src={person1} alt="" className="blog-username" />{" "}
                  <span>Prajon Adhikari</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faHeart} className="heart-icon" />{" "}
                  <span>20</span>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-container">
            <img src={image1} alt="" />
            <div className="blog-message">
              <p>FOOD, CUSTOM NOV 17,2020</p>
              <h4>Awesome food and destination</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In aut
                magnam aperiam iste dolorum ad cum excepturi cupiditate illo
                amet.
              </p>
              <div className="blog-user">
                <div>
                  <img src={person1} alt="" className="blog-username" />{" "}
                  <span>Prajon Adhikari</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faHeart} className="heart-icon" />{" "}
                  <span>20</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

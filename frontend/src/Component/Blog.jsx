import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import image1 from "../assets/meeting.webp";

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
            <div className="category">Culture</div>
            <div className="category">Culture</div>
            <div className="category">Culture</div>
            <div className="category">Culture</div>
            <div className="category">Culture</div>
          </div>
        </div>
        <div className="right-main-blog-page">
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

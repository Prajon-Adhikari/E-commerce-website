import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import blog1 from "../assets/blog1.webp";
import blog2 from "../assets/blog2.webp";
import blog3 from "../assets/blog3.webp";
import blog4 from "../assets/blog4.webp";
import person1 from "../assets/person1.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Blog() {
  const initialBlogs = [
    {
      id: 1,
      image: blog1,
      title: "Awesome food and destination",
      likeCount: 20,
      likeClicked: false,
    },
    {
      id: 2,
      image: blog2,
      title: "Exploring creativity",
      likeCount: 15,
      likeClicked: false,
    },
    {
      id: 3,
      image: blog3,
      title: "Technology insights",
      likeCount: 30,
      likeClicked: false,
    },
    {
      id: 4,
      image: blog4,
      title: "Quality Products",
      likeCount: 10,
      likeClicked: false,
    },
    {
      id: 5,
      image: blog4,
      title: "Quality Products",
      likeCount: 10,
      likeClicked: false,
    },
    {
      id: 6,
      image: blog3,
      title: "Quality Products",
      likeCount: 15,
      likeClicked: false,
    },
    {
      id: 7,
      image: blog1,
      title: "Quality Products",
      likeCount: 10,
      likeClicked: false,
    },
  ];

  const [blogs, setBlogs] = useState(initialBlogs);

  const handleLikeClick = (id) => {
    setBlogs((prevBlogs) =>
      prevBlogs.map((blog) =>
        blog.id === id
          ? {
              ...blog,
              likeCount: blog.likeClicked
                ? blog.likeCount - 1
                : blog.likeCount + 1,
              likeClicked: !blog.likeClicked,
            }
          : blog
      )
    );
  };

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
          {blogs.map((blog) => (
            <div className="blog-container" key={blog.id}>
              <img src={blog.image} alt={blog.title} />
              <div className="blog-message">
                <p>FOOD, CUSTOM NOV 17,2020</p>
                <h4>{blog.title}</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                  aut magnam aperiam iste dolorum ad cum excepturi cupiditate
                  illo amet.
                </p>
                <div className="blog-user">
                  <div>
                    <img src={person1} alt="" className="blog-username" />{" "}
                    <span>Prajon Adhikari</span>
                  </div>
                  <div>
                    <FontAwesomeIcon
                      icon={faHeart}
                      className={`heart-icon ${
                        blog.likeClicked ? "liked" : ""
                      }`}
                      onClick={() => handleLikeClick(blog.id)}
                    />{" "}
                    <span>{blog.likeCount}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

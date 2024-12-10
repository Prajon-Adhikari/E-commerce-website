import React from "react";
import meeting1 from "../assets/meeting.webp";
import meeting2 from "../assets/meeting2.webp";
import person1 from "../assets/person1.jpeg";
import person2 from "../assets/person2.jpg";
import person3 from "../assets/person3.jpg";
import person4 from "../assets/person4.jpg";
import meeting3 from "../assets/meeting3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default function AboutUs() {
  return (
    <div>
      <div className="aboutus-hero-section">
        <div className="left-aboutus-hero-section">
          <p>Branded &nbsp; | &nbsp; Quality &nbsp; | &nbsp; Products</p>
          <h2>
            WE OFFER <span>QUALITY</span> PRODUCTS
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non amet
            neque nobis. Fugiat eos id esse excepturi velit, debitis alias.
          </p>
          <button>Read More &rarr;</button>
        </div>
        <div className="right-aboutus-hero-section">
          <img src={meeting3} alt="" />
        </div>
      </div>

      <div className="features-section">
        <div className="features">
          <div className="feature-top-section">
            <p>01</p>
          </div>
          <div className="feature-bottom-section">
            <h3>Best Quality</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
              deserunt ad, officiis illo voluptates aspernatur quod quidem unde
              perferendis nostrum!
            </p>
          </div>
        </div>
        <div className="features">
          <div className="feature-top-section">
            <p>02</p>
          </div>
          <div className="feature-bottom-section">
            <h3>Fast Delivery</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
              deserunt ad, officiis illo voluptates aspernatur quod quidem unde
              perferendis nostrum!
            </p>
          </div>
        </div>
        <div className="features">
          <div className="feature-top-section">
            <p>03</p>
          </div>
          <div className="feature-bottom-section">
            <h3>Best Price</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
              deserunt ad, officiis illo voluptates aspernatur quod quidem unde
              perferendis nostrum!
            </p>
          </div>
        </div>
      </div>
      <div className="aboutus-contents">
        <img className="aboutus-content-image" src={meeting3} alt="" />
        <div className="aboutus-description">
          <h4>ABOUT US</h4>
          <h2>Building More Business Competition</h2>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            eligendi odio cupiditate, minus consectetur provident placeat, atque
            magni libero culpa unde reprehenderit molestias vel repellat? Dolor
            nulla quia eveniet quod.
          </p>
          <div className="about-qualities">
            <div className="about-quality">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="circle-check-icon"
              />
              <p>Technology Services</p>
            </div>
            <div className="about-quality">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="circle-check-icon"
              />
              <p>Technology Services</p>
            </div>
            <div className="about-quality">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="circle-check-icon"
              />
              <p>Technology Services</p>
            </div>
            <div className="about-quality">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="circle-check-icon"
              />
              <p>Technology Services</p>
            </div>
          </div>
          <div className="experiences">
            <div className="experience">
              <p className="experience-section-leftside">
                10 <sup>+</sup>
              </p>
              <p className="experience-section-rightside">
                Years of Experience
              </p>
            </div>
            <div className="experience">
              <p className="experience-section-leftside">
                70 <sup>k</sup>
              </p>
              <p className="experience-section-rightside">
                Individual Customers
              </p>
            </div>
          </div>
          <button className="learn-btn">Learn More &rarr;</button>
        </div>
      </div>
      <div className="meeting-contents">
        <div className="meeting-image">
          <img src={meeting1} alt="" />
          <img src={meeting2} alt="" />
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque quia
          fuga ea vitae, porro ullam numquam magni! Sed nobis pariatur sequi
          dolor accusantium maxime quaerat commodi id blanditiis deserunt
          facilis corporis, voluptates tenetur aspernatur quasi architecto
          praesentium voluptatem, debitis, at aliquam aut saepe ex ratione
          tempora. Vero magnam quia magni.
        </p>
      </div>
      <div className="teams-container">
        <h2>OUR TEAMS</h2>
        <div className="teams">
          <div className="person-pic-container">
            <img src={person1} alt="" />
            <p>Manager</p>
          </div>
          <div className="person-pic-container">
            <img src={person2} alt="" />
            <p>Sales Manager</p>
          </div>
          <div className="person-pic-container">
            <img src={person3} alt="" />
            <p>Executive Head</p>
          </div>
          <div className="person-pic-container">
            <img src={person4} alt="" />
            <p>Product Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
}

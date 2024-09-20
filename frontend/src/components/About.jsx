import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            At Zayka Mahal, we are passionate about serving authentic,
             flavorful dishes that celebrate the rich culinary traditions of India. 
             Our carefully crafted menu blends time-honored recipes with a modern twist, 
             using the freshest ingredients to create a dining experience that delights the senses. 
             Whether you’re here for a casual meal or a special celebration, we’re committed to providing
              warm hospitality, vibrant flavors, and an unforgettable journey through the diverse tastes of World cuisine.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
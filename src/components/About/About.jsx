/* eslint-disable no-unused-vars */
import React from "react";
import CarPng from "../../assets/aboutcar.png";

const About = () => {
  return (
    <>
    <span id="about"></span>
    <div className="dark:bg-dark bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={CarPng}
              alt=""
              className="sm:scale-100 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif"
              >
                About us
              </h1>
              <p data-aos="fade-up">
              The car rental website provides a seamless and user-friendly platform for individuals and businesses to rent vehicles with ease. Whether for daily commutes, business trips, vacations, or special occasions, users can browse through a diverse fleet of well-maintained cars, ranging from economy models to luxury vehicles.  
              </p>
              <p data-aos="fade-up">
              With a streamlined booking process, users can compare prices, select pickup and drop-off locations, and complete secure online payments effortlessly. Additional features such as customer reviews, real-time availability updates, and exclusive discounts enhance the overall experience.
              </p>
              <button data-aos="fade-up" className="button-outline">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;

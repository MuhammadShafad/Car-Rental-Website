/* eslint-disable no-unused-vars */
import React from "react";
import AppStoreImg from "../../assets/website/app_store.png";
import PlayStoreImg from "../../assets/website/play_store.png";
import pattern from "../../assets/website/pattern.jpeg";

const AppStoreBanner = () => {
  return (
    <div className="container">
      <div
        className="relative text-white py-16 sm:py-24 rounded-xl overflow-hidden"
        style={{
          backgroundImage: `url(${pattern})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content Section */}
        <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
          <h1
            data-aos="fade-up"
            className="text-3xl sm:text-5xl font-bold font-serif"
          >
            Get Started with Our App
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-4 text-lg text-gray-200"
          >
            Enjoy seamless car rentals at your fingertips. Browse, book, and hit
            the road with ease. Download the app today and start your journey!
          </p>

          {/* Store Buttons */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="mt-6 flex flex-wrap justify-center gap-4"
          >
            <a href="#">
              <img
                src={PlayStoreImg}
                alt="Download on Google Play"
                className="max-w-[160px] sm:max-w-[180px] hover:scale-105 transition-transform duration-300"
              />
            </a>
            <a href="#">
              <img
                src={AppStoreImg}
                alt="Download on the App Store"
                className="max-w-[160px] sm:max-w-[180px] hover:scale-105 transition-transform duration-300"
              />
            </a>
          </div>

          {/* CTA Button */}
          <div data-aos="zoom-in" data-aos-delay="600" className="mt-8">
            <a
              href="#"
              className="inline-block bg-primary text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-primary/80 transition duration-300"
            >
              Download Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStoreBanner;

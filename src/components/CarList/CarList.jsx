/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import car1 from "../../assets/car1.png";
import car2 from "../../assets/car2.png";
import car3 from "../../assets/car3.png";
import car4 from "../../assets/car4.png";
import car5 from "../../assets/car5.png";
import car6 from "../../assets/car6.png";


const carList = [
  {
    name: "BMW 7 Series",
    price: 13000,
    image: car1,
    aosDelay: "0",
  },
  {
    name: "Rolls Royce Ghost",
    price: 45000,
    image: car2,
    aosDelay: "500",
  },
  {
    name: "Audi A8",
    price: 34000,
    image: car3,
    aosDelay: "1000",
  },
  {
    name: "Fronix",
    price: 1500,
    image: car4,
    aosDelay: "1500",
  },
  {
    name: "Jeep Willy's",
    price: 5500,
    image: car5,
    aosDelay: "2000",
  },
  {
    name: "Swift Sport",
    price: 2500,
    image: car6,
    aosDelay: "2500",
  },
];

const CarList = () => {
  return (
    <>
    <span id="cars"></span>
    <div className="pb-24">
      <div className="container">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          Explore Our Cars
        </h1>
        <p data-aos="fade-up" aos-delay="400" className="text-sm pb-10">
          Check our premium and standard car collection
        </p>
        {/* Car listing */}
        <div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {carList.map((data) => (
      <div
        key={data.id}
        data-aos="fade-up"
        data-aos-delay={data.aosDelay}
        className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition duration-300 group"
      >
        {/* Image Section*/}
        <div className="w-full h-[150px] bg-gray-100 flex items-center justify-center relative overflow-hidden">
          <img
            src={data.image}
            alt={data.name}
            className="max-w-[90%] max-h-[120px] object-contain transform transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2"
          />
        </div>

        {/* Details Section */}
        <div className="p-4 space-y-3">
          <h1 className="text-lg font-bold text-gray-800 dark:text-white">
            {data.name}
          </h1>
          
          <div className="flex justify-between items-center text-base font-semibold">
            <p className="text-gray-700 dark:text-gray-300">₹{data.price}/Day</p>
            <a 
              href="#" 
              className="text-primary font-medium hover:underline"
            >
              View Details
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

        {/* End of car listing */}
        <div className="grid place-items-center mt-8">
          <button data-aos="fade-up" className="button-outline">
            View More
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default CarList;

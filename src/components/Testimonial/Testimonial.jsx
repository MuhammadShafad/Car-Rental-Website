/* eslint-disable no-unused-vars */
import React from "react";

const testimonialData = [
  {
    name: "Shanavas",
    image: "",
    description: "I had an amazing experience using this car rental website! The booking process was super easy, and I found the perfect car within minutes. The vehicle was clean, well-maintained, and ready on time. Highly recommend for anyone looking for a hassle-free rental!",
    aosDelay: "0",
  },
  {
    name: "Georgina",
    image: "",
    description: "I was impressed with the affordable rates and wide selection of cars. The rental process was seamless, and the customer support team was very helpful. The car was in great condition, making my trip stress-free. I will definitely book again!",
    aosDelay: "300",
  },
  {
    name: "Rahul",
    image: "",
    description: "The entire rental experience was smooth from start to finish. The website is user-friendly, and I was able to pick up my car quickly without any delays. The safety measures and insurance options gave me peace of mind. Highly satisfied!",
    aosDelay: "1000",
  },
];
const Testimonial = () => {
  return (
    <>
      <span id="about"></span>
<div className="dark:bg-black dark:text-white py-14 sm:pb-24">
  <div className="container">
    {/* Header */}
    <div className="space-y-4 pb-12 text-center">
      <p data-aos="fade-up" className="text-3xl font-bold sm:text-4xl font-serif">
        What Our Clients Say About Us
      </p>
      <p data-aos="fade-up" className="text-lg text-gray-600 dark:text-gray-300 sm:px-44">
        Hear from our satisfied customers about their rental experience.
      </p>
    </div>

    {/* Testimonials Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-black dark:text-white">
      {testimonialData.map((testimonial, index) => {
        // Array of unique images for each testimonial
        const images = [
          "https://randomuser.me/api/portraits/men/32.jpg",
          "https://randomuser.me/api/portraits/women/44.jpg",
          "https://randomuser.me/api/portraits/men/50.jpg"
        ];

        // Array of different star ratings
        const starRatings = ["⭐⭐⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐"];

        return (
          <div
            key={testimonial.name}
            data-aos="fade-up"
            data-aos-delay={testimonial.aosDelay}
            className="bg-white dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-700 rounded-2xl p-6 text-center group transform transition-all duration-300 hover:scale-105"
          >
            {/* Image Section */}
            <div className="flex justify-center">
              <img
                src={images[index % images.length]} // Rotating images
                alt={testimonial.name}
                className="rounded-full w-20 h-20 border-4 border-primary shadow-md"
              />
            </div>

            {/* Star Rating */}
            <div className="text-2xl my-3 text-yellow-500">{starRatings[index % starRatings.length]}</div>

            {/* Testimonial Text */}
            <p className="text-gray-700 dark:text-gray-300 italic">{testimonial.description}</p>

            {/* Client Name */}
            <p className="mt-4 text-lg font-semibold text-primary">{testimonial.name}</p>
          </div>
        );
      })}
    </div>
  </div>
</div>

    </>
  );
};

export default Testimonial;

/* eslint-disable no-unused-vars */
import React from "react";

const Contact = () => {
  return (
    <>
      <span id="contact"></span>
      <div data-aos="fade-up" className="dark:bg-black dark:text-white py-16">
        <div className="container mx-auto px-6">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              Lets Connect & Get You on the Road!
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Have questions or need assistance? Reach out to us anytime. We are here to help make your car rental experience smooth and hassle-free!
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Contact Information */}
            <div data-aos="fade-right" className="bg-gray-800 p-6 rounded-lg shadow-lg text-white space-y-4">
              <h2 className="text-2xl font-semibold text-primary">Contact Information</h2>
              <p><strong>Address:</strong> Karalmanna, Cherpulassery, Palakkad, Kerala</p>
              <p><strong>Phone:</strong> +91 9074505209</p>
              <p><strong>Email:</strong> muhammadshafad445@gmail.com</p>
              <p><strong>Hours:</strong> Monday - Sunday: 9:00 AM - 7:00 PM</p>
            </div>

            {/* Contact Form */}
            <div data-aos="fade-up" className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-primary mb-4">Send Us a Message</h2>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 focus:outline-primary" />
                <input type="email" placeholder="Your Email" className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 focus:outline-primary" />
                <textarea placeholder="Your Message" className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 h-32 focus:outline-primary"></textarea>
                <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/80 transition duration-300">
                  Send Message
                </button>
              </form>
            </div>

            {/* Google Map Location */}
            <div data-aos="fade-left" className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Google Map"
                className="w-full h-full min-h-[250px] rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4040312.3390171523!2d72.6618782!3d8.5364618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c3100000017%3A0x3fc252c6b603d99d!2sTRANZ%20CARS%20KERALA%20RENT%20A%20CAR%20COMPANY!5e0!3m2!1sen!2sin!4v1739207353385!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-block font-semibold py-3 px-8 bg-primary text-white hover:bg-primary/80 duration-200 tracking-widest uppercase text-lg rounded-lg shadow-lg"
              data-aos="zoom-in"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

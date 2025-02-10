/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
  FaEnvelope,
} from "react-icons/fa";

const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "About", link: "/#about" },
  { title: "Contact", link: "/#contact" },
  { title: "Cars", link: "/#cars" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 rounded-t-3xl">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-primary">GoCarRent</h1>
            <p className="text-sm text-gray-300">
              Your trusted car rental service, offering a seamless experience with a wide range of vehicles.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <FaLocationArrow className="text-primary" />
              <p>Cherpulassery, Palakkad</p>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <FaMobileAlt className="text-primary" />
              <p>+91 9074505209</p>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <FaEnvelope className="text-primary" />
              <p>muhammadshafad445@gmail.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold text-primary">Quick Links</h2>
            <ul className="mt-4 space-y-2">
              {FooterLinks.map((link) => (
                <li key={link.title} className="hover:translate-x-1 transition-all">
                  <a href={link.link} className="hover:text-primary">
                    ➜ {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h2 className="text-xl font-semibold text-primary">Stay Updated</h2>
            <p className="mt-2 text-gray-300 text-sm">
              Subscribe to our newsletter for the latest offers and updates.
            </p>
            <div className="mt-4 flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-l-lg border-none outline-none text-black"
              />
              <button className="bg-primary px-4 py-2 rounded-r-lg hover:bg-primary/80 transition">
                Subscribe
              </button>
            </div>
          </div>

          {/* Google Map */}
          <div>
            <h2 className="text-xl font-semibold text-primary">Find Us</h2>
            <div className="mt-4 w-full h-[180px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Google Map"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4040312.3390171523!2d72.6618782!3d8.5364618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c3100000017%3A0x3fc252c6b603d99d!2sTRANZ%20CARS%20KERALA%20RENT%20A%20CAR%20COMPANY!5e0!3m2!1sen!2sin!4v1739207353385!5m2!1sen!2sin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Social Media & Footer Bottom */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-4 text-sm">
          <p>© {new Date().getFullYear()} GoCarRent. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-2xl hover:text-primary transition">
              <FaInstagram />
            </a>
            <a href="#" className="text-2xl hover:text-primary transition">
              <FaFacebook />
            </a>
            <a href="http://www.linkedin.com/in/muhammadshafadkk" className="text-2xl hover:text-primary transition">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-3 mt-3">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-3">
        <div>
          <h2 className="text-2xl font-bold mb-4">VK Clothing</h2>
          <p className="text-sm text-gray-400">
            Clothing that is premium and unique
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/Mens" className="hover:underline">Men</Link></li>
            <li><Link to="/women" className="hover:underline">Women</Link></li>
            <li><Link to="/Sneakers" className="hover:underline">Sneakers</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
            <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
            <li><Link to="/terms" className="hover:underline">Terms of Service</Link></li>
            <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="https://www.facebook.com/Amazon/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="hover:text-blue-500" />
            </a>
            <a href="https://www.instagram.com/amazon/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-pink-500" />
            </a>
            <a href="https://twitter.com/amazon" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="hover:text-sky-400" />
            </a>
            <a href="https://www.youtube.com/amazon" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="hover:text-red-600" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Vk Clothing. All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;
import React from 'react';
import { ReactComponent as Logo } from '../assets/heatz-logo.svg';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 sm:text-sm text-base">
      <div className="w-full p-6 lg:px-20 lg:py-8 md:px-10">
        {/* Footer content */}
        <div className="flex flex-col lg:flex-row lg:justify-between">
          {/* Left Column: Logo, Text, Form */}
          <div className="mb-6 lg:mb-0 lg:w-1/2">
            {/* Logo */}
            <div className="flex justify-center lg:justify-start mb-4">
              <Logo style={{ width: '150px', height: 'auto' }} alt="Heatz Logo" />
            </div>

            {/* Text */}
            <section className="sm:text-center lg:text-left mb-4">
              <p className="text-base sm:text-sm lg:text-lg leading-relaxed lg:leading-loose">
                Heatz® is a registered brand of Ashtelgroup. Known in the Middle East for its product variety and quality, it is registered in various countries including Saudi Arabia and UAE.
              </p>
            </section>

            {/* Email Subscription Form */}
            <section className="text-center lg:text-left mb-4">
              <form>
                <div className="relative mb-4">
                  <input
                    type="email"
                    className="font-sans text-base sm:text-sm lg:text-lg w-full h-10 border-b border-gray-500 bg-gray-950 pl-10 pr-4 text-gray-300 outline-none focus:ring-1 focus:ring-teal-600"
                    placeholder="Enter your email"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16"
                    >
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                  </div>
                </div>

                {/* Checkbox */}
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="privacyPolicy"
                    className="form-check-input mr-2 w-4 h-4 text-teal-600 bg-gray-700 border-gray-300 rounded focus:ring-2 focus:ring-teal-600"
                  />
                  <label htmlFor="privacyPolicy" className="text-gray-300 text-sm lg:text-base">
                    I accept the <a href="#" className="text-teal-500">Privacy Policy</a>.
                  </label>
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-fit py-2 px-8 bg-teal-950 border-white border-[0.5px] text-white rounded-md hover:bg-teal-600 focus:ring-2 focus:ring-teal-600">
                  Subscribe
                </button>
              </form>
            </section>
          </div>

          {/* Right Column: Links */}
          <div className="flex flex-wrap justify-center lg:justify-end lg:w-1/2 " >
            {/* Category 1 */}
            <ul className="list-none sm:text-center lg:text-left ">
              <h5 className="text-gray-300 uppercase text-sm mb-2">Mob Acc</h5>
              <li><a href="#!" className="text-gray-400 hover:text-teal-400 text-base sm:text-sm lg:text-lg">Earphones</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-teal-400 text-base sm:text-sm lg:text-lg">Cables</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-teal-400 text-base sm:text-sm lg:text-lg">Adapters</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-teal-400 text-base sm:text-sm lg:text-lg">Power Bank</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-teal-400 text-base sm:text-sm lg:text-lg">Smartwatches</a></li>
            </ul>

            {/* Category 2 */}
            <ul className="list-none sm:text-center lg:text-left ">
              <h5 className="text-gray-300 uppercase text-sm mb-2">Com Acc</h5>
              <li><a href="#!" className="text-gray-400 hover:text-teal-400 text-base sm:text-sm lg:text-lg">Earphones</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-teal-400 text-base sm:text-sm lg:text-lg">Cables</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-teal-400 text-base sm:text-sm lg:text-lg">Adapters</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-teal-400 text-base sm:text-sm lg:text-lg">Speakers</a></li>
            </ul>

            {/* Category 3 */}
            <ul className="list-none sm:text-center lg:text-left ">
              <h5 className="text-gray-300 uppercase text-sm mb-2">Help</h5>
              <li><a href="#!" className="text-gray-400 hover:text-teal-400 text-base sm:text-sm lg:text-lg">Contact Us</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-teal-400 text-base sm:text-sm lg:text-lg">FAQs</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-teal-400 text-base sm:text-sm lg:text-lg">Shipping & Returns</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-teal-400 text-base sm:text-sm lg:text-lg">About Us</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-950 text-center text-gray-300 py-4">
        <p className="text-xs">
          &copy; 2024 <span className="font-semibold text-white">Heatz</span> - All rights reserved. | Developed by <a href="#" className="text-blue-500 hover:text-blue-300">AdAgency Technologies</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

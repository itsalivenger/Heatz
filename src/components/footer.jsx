import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactComponent as Logo } from '../assets/heatz-logo.svg';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="container py-4 px-0 ">
        {/* Footer content - two columns */}
        <div className="row">
            {/* Left Column: Logo, Text, Form */}
          <div className="col-md-6">
            {/* Logo */}
            <Logo style={{ width: '200px', height: 'auto' }} alt="Heatz Logo" />

            {/* Text */}
            <section className="text-left my-4">
              <p>Heatz® is a registered brand of Ashtelgroup. It is registered in different countries 
including Saudi Arabia and UAE, especially in the Middle East. Heatz® is well known 
for its variety and quality of products launched every season.</p>
            </section>

            {/* Form: Email & Checkbox */}
            <section className="text-left mb-4">
              <form action="">
                <div className="mb-4 relative">
                  {/* SVG icon container */}
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16"
                    >
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                  </div>
                  {/* Input field with padding for the icon */}
                  <input
                    type="email"
                    id="form5Example2"
                    className="box-border font-sans text-[14px] align-baseline font-normal leading-[1.29] tracking-[0.16px] 
                    rounded-none outline outline-2 outline-transparent outline-offset-[-2px] w-full h-[40px] border-b border-gray-500 
                    bg-gray-950 pl-10 pr-4 text-gray-300 transition-colors duration-75 ease-[cubic-bezier(0.2,0,0.38,0.9)] 
                    focus:outline focus:outline-2 focus:outline-offset-[-2px] focus:outline-teal-600"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Checkbox for Privacy Policy acceptance */}
                <div className="mb-3">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      id="privacyPolicy"
                      className="form-check-input mr-2 w-4 h-4 text-teal-600 bg-gray-700 border-gray-300 rounded focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="privacyPolicy" className="form-check-label text-gray-300">
                      I accept the <a href="#" className="text-teal-500 no-underline">Privacy Policy</a> and consent to its terms, including the use of cookies.
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="col-auto">
                  <button type="submit" className="btn btn-outline-light mb-4">
                    Subscribe
                  </button>
                </div>
              </form>
            </section>
          </div>
          {/* Right Column: Links */}
          <div className="col-md-6 ">
            <section className="flex text-left mt-12 ">
              {/* Category 1: Mob Acc */}
              <ul className="list-unstyled mx-4 ">
                <h5 className="text-uppercase text-gray-300">Mob Acc</h5>
                <li><a href="#!" className="text-gray-400 hover:text-teal-400 no-underline">Earphones</a></li>
                <li><a href="#!" className="text-gray-400 hover:text-teal-400 no-underline">Cables</a></li>
                <li><a href="#!" className="text-gray-400 hover:text-teal-400 no-underline">Adapters</a></li>
                <li><a href="#!" className="text-gray-400 hover:text-teal-400 no-underline">Power Bank</a></li>
                <li><a href="#!" className="text-gray-400 hover:text-teal-400 no-underline">Batteries</a></li>
                <li><a href="#!" className="text-gray-400 hover:text-teal-400 no-underline">Car Charger</a></li>
                <li><a href="#!" className="text-gray-400 hover:text-teal-400 no-underline">Holders</a></li>
                <li><a href="#!" className="text-gray-400 hover:text-teal-400 no-underline">Speakers</a></li>
                <li><a href="#!" className="text-gray-400 hover:text-teal-400 no-underline">Smartwatches</a></li>
              </ul>

              {/* Category 2: Com Acc */}
              <ul className="list-unstyled mx-4 ">
                <h5 className="text-uppercase text-gray-100">Com Acc</h5>
                <li><a href="#!" className="text-gray-400 hover:text-teal-400 no-underline">Earphones</a></li>
                <li><a href="#!" className="text-gray-400 hover:text-teal-400 no-underline">Cables</a></li>
                <li><a href="#!" className="text-gray-400 hover:text-teal-400 no-underline">Adapters</a></li>
                <li><a href="#!" className="text-gray-400 hover:text-teal-400 no-underline">Power Bank</a></li>
                <li><a href="#!" className="text-gray-400 hover:text-teal-400 no-underline">Batteries</a></li>
                <li><a href="#!" className="text-gray-400 hover:text-teal-400 no-underline">Car Charger</a></li>
                <li><a href="#!" className="text-gray-400 hover:text-teal-400 no-underline">Holders</a></li>
                <li><a href="#!" className="text-gray-400 hover:text-teal-400 no-underline">Speakers</a></li>
                <li><a href="#!" className="text-gray-400 hover:text-teal-400 no-underline">Smartwatches</a></li>
              </ul>

              {/* Category 3: Help */}
              <ul className="list-unstyled mx-4">
                <h5 className="text-uppercase text-gray-300 ">Help</h5>
                <li><a href="#!" className="text-gray-400 hover:text-teal-400 no-underline ">Contact Us</a></li>
                <li><a href="#!" className="text-gray-400 hover:text-teal-400 no-underline">FAQs</a></li>
                <li><a href="#!" className="text-gray-400 hover:text-teal-400 no-underline">Shipping & Returns</a></li>
                <li><a href="#!" className="text-gray-400 hover:text-teal-400 no-underline">Payment Methods</a></li>
                <li><a href="#!" className="text-gray-400 hover:text-teal-400 no-underline">Track Your Order</a></li>
                <li><a href="#!" className="text-gray-400 hover:text-teal-400 no-underline">About Us</a></li>
                <li><a href="#!" className="text-gray-400 hover:text-teal-400 no-underline">Delivery Policy</a></li>
                <li><a href="#!" className="text-gray-400 hover:text-teal-400 no-underline">Cancellation Policy</a></li>
                <li><a href="#!" className="text-gray-400 hover:text-teal-400 no-underline">Return Policy</a></li>
                <li><a href="#!" className="text-gray-400 hover:text-teal-400 no-underline">Privacy Policy</a></li>
                <li><a href="#!" className="text-gray-400 hover:text-teal-400 no-underline">Terms and Conditions</a></li>
              </ul>
            </section>
          </div>

          
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-950 text-center text-gray-300 py-4">
        <p className="mb-2 text-sm">
          Copyright &copy; 2024
          <span className="font-semibold text-white">
            Heatz - All rights reserved.
          </span>
        </p>
        <p className="text-xs">
          Developed by <a href="#" className="text-blue-500 hover:text-blue-300">AdAgency Technologies</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

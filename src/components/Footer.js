import React, { useState } from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaAngleDown,
  FaAngleUp,
} from "react-icons/fa";

const Footer = () => {
  const [showPolicies, setShowPolicies] = useState(false);
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [showFollowUs, setShowFollowUs] = useState(false);

  const togglePolicies = () => setShowPolicies(!showPolicies);
  const toggleContactInfo = () => setShowContactInfo(!showContactInfo);
  const toggleFollowUs = () => setShowFollowUs(!showFollowUs);

  return (
    <div className="bg-blue-400 py-10 mt-10 text-zinc-300">
      <div className="max-w-screen-xl mx-auto space-y-6">
        {/* Store Policies Section */}
        <div className="text-white">
          <h2
            className="text-2xl font-semibold mb-4 cursor-pointer flex items-center justify-between pr-4"
            onClick={togglePolicies}
          >
            Store Policies{" "}
            {showPolicies ? <FaAngleUp /> : <FaAngleDown />}
          </h2>
          {showPolicies && (
            <div className="flex flex-col gap-2 text-base">
              <p className="hover:text-black duration-300 cursor-pointer">
                Return Policy
              </p>
              <p className="hover:text-black duration-300 cursor-pointer">
                Shipping Policy
              </p>
              <p className="hover:text-black duration-300 cursor-pointer">
                Privacy Policy
              </p>
            </div>
          )}
        </div>

        {/* Contact Info Section */}
        <div className="text-white">
          <h2
            className="text-2xl font-semibold mb-4 cursor-pointer flex items-center justify-between pr-4"
            onClick={toggleContactInfo}
          >
            Contact Info{" "}
            {showContactInfo ? <FaAngleUp /> : <FaAngleDown />}
          </h2>
          {showContactInfo && (
            <div className="text-base flex flex-col gap-1">
              <p>Victoria Island, Lagos Nigeria</p>
              <p>Mobile: 09026000778</p>
              <p>E-mail: Koredeaa77@gmail.com</p>
            </div>
          )}
        </div>

        {/* Follow Us Section */}
        <div className="text-white">
          <h2
            className="text-2xl font-semibold mb-4 cursor-pointer flex items-center justify-between pr-4"
            onClick={toggleFollowUs}
          >
            Follow Us{" "}
            {showFollowUs ? <FaAngleUp /> : <FaAngleDown />}
          </h2>
          {showFollowUs && (
            <div className="flex gap-4 text-3xl">
              <a href="#" className="hover:text-black duration-300">
                <FaFacebookSquare />
              </a>
              <a href="#" className="hover:text-black duration-300">
                <FaTwitterSquare />
              </a>
              <a href="#" className="hover:text-black duration-300">
                <FaInstagramSquare />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;

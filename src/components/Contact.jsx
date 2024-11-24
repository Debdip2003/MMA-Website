import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaInstagramSquare,
  FaMailBulk,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import expertteamImage2 from "..//assests/expertteamImage2.jpg";

const Contact = () => {
  return (
    <>
      <div className="mx-auto flex flex-col md:flex-row justify-between items-center w-full pt-20">
        {/* Left Side - Contact Details */}
        <div className="flex flex-col justify-center w-full md:w-1/2">
          <h2 className="text-5xl md:text-5xl font-semibold text-white max-w-lg text-center mb-14">
            Contact Us
          </h2>
          <div>
            <div className="flex items-center mb-4">
              <FaLocationDot size={20} className="mr-4 text-white" />
              <div>
                <p className="text-xl mb-2 text-white">Location</p>
                <p className="text-gray-500 hover:text-white duration-200 hover:cursor-pointer">
                  AE 669, Near VIP Sweets, Quality, Sector 1, Bidhannagar,
                  Kolkata, West Bengal 700064
                </p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <FaPhone size={20} className="mr-4 text-white" />
              <div>
                <p className="text-xl mb-2 text-white">Phone</p>
                <p className="text-gray-500 hover:text-white duration-200 hover:cursor-pointer">
                  +91 98315 85746
                </p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <FaMailBulk size={20} className="mr-4 text-white" />
              <div>
                <p className="text-xl mb-2 text-white">Email</p>
                <p className="text-gray-500 hover:text-white duration-200 hover:cursor-pointer">
                  admin@nextlevelmma.org
                </p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <FaInstagramSquare size={20} className="mr-4 text-white" />
              <div>
                <p className="text-xl mb-2 text-white">Socials</p>
                <div className="flex">
                  <a
                    href="https://www.facebook.com/NEXTLEVEL91?mibextid=qi2Omg&rdid=fZTqNE7mWQaQtBnJ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F47n3Kc3LHFekpjnY%2F%3Fmibextid%3Dqi2Omg"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebook className="mr-2 hover:cursor-pointer hover:scale-125 text-gray-500 hover:text-white duration-200" />
                  </a>
                  <a
                    href="https://www.instagram.com/nextlevelmmaindia?utm_source=qr&igsh=NWNhdzN0c2R4aWU0"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram className="hover:cursor-pointer hover:scale-125 text-gray-500 hover:text-white duration-200 mr-2" />
                  </a>
                  <a
                    href="https://www.youtube.com/@nextlevelmma"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaYoutube className="hover:cursor-pointer hover:scale-125 text-gray-500 hover:text-white duration-200" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image (hidden on mobile, visible on desktop) */}
        <div className="hidden md:block md:w-1/2  pb-10 justify-center items-center">
          <img
            src={expertteamImage2}
            alt="contactpage"
            className="w-full max-w-4xl h-auto rounded-2xl grayscale hover:grayscale-0 hover:scale-105 hover:cursor-pointer duration-200"
          />
        </div>
      </div>
    </>
  );
};

export default Contact;

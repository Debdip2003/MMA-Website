import React, { useState } from "react";
import logo from "../assests/logo.jpg";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const links = [
    { id: 1, link: "Home" },
    { id: 2, link: "About" },
    { id: 3, link: "Events" },
    { id: 4, link: "Affiliations" },
    { id: 5, link: "Blogs" },
  ];

  return (
    <div className="w-full h-16 bg-black flex justify-between items-center px-4 md:px-8">
      <div>
        <img
          src={logo}
          alt="logo"
          className="h-12 w-auto md:h-16 object-contain px-2 py-1 hover:cursor-pointer hover:scale-105 duration-200"
        />
      </div>

      <ul className="hidden md:flex space-x-6">
        {links.map(({ id, link }) => (
          <li
            className="cursor-pointer text-xl text-gray-400 font-medium hover:scale-105 duration-200 hover:text-white"
            key={id}
          >
            <Link to={link === "Home" ? "/" : `/${link.toLowerCase()}`}>
              {link}
            </Link>
          </li>
        ))}
        <li>
          <span className="cursor-pointer text-xl text-gray-400 font-medium hover:scale-105 duration-200 hover:text-white">
            <Link to="/Contact">Contact Us</Link>
          </span>
        </li>
      </ul>

      <div
        className="md:hidden cursor-pointer text-gray-400 text-2xl"
        onClick={() => setNavOpen(!navOpen)}
      >
        {navOpen ? <FaTimes /> : <FaBars />}
      </div>

      {navOpen && (
        <div className="fixed inset-0 bg-black flex flex-col justify-center items-center space-y-6 text-white text-2xl z-50">
          <button
            className="absolute top-4 right-4 text-3xl text-gray-400 hover:text-white"
            onClick={() => setNavOpen(false)}
          >
            <FaTimes />
          </button>

          {links.map(({ id, link }) => (
            <Link
              to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
              key={id}
              className="cursor-pointer hover:scale-105 duration-200"
              onClick={() => setNavOpen(false)}
            >
              {link}
            </Link>
          ))}
          <Link
            to="/Contact"
            className="cursor-pointer hover:scale-105 duration-200"
            onClick={() => setNavOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;

import React from "react";
import logo from "..//assests/logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "events",
    },
    {
      id: 5,
      link: "affiliations",
    },
    {
      id: 6,
      link: "blogs",
    },
  ];

  return (
    <div className="w-full h-16 bg-black flex justify-between items-center">
      <div>
        <img
          src={logo}
          alt="logo"
          className="h-full w-20 px-4 hover:cursor-pointer hover:scale-105 duration-200"
        />
      </div>
      <ul className="flex justify-center items-center h-full">
        {links.map(({ id, link }) => {
          return (
            <li
              className="px-4 cursor-pointer text-xl text-gray-400 font-medium hover:scale-105 duration-200 hover:text-white"
              key={id}
            >
              <Link to={link === "home" ? "/" : `/${link}`}>{link}</Link>
            </li>
          );
        })}
      </ul>
      <div>
        <span className="px-4 cursor-pointer text-xl text-gray-400 font-medium hover:scale-105 duration-200 hover:text-white">
          <Link to={"/Contact"}>Contact Us</Link>
        </span>
      </div>
    </div>
  );
};

export default Navbar;

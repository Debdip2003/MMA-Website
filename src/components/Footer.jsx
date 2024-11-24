import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const links = [
    {
      id: 1,
      link: "home",
      name: "Home",
    },
    {
      id: 2,
      link: "about",
      name: "About",
    },
    {
      id: 3,
      link: "events",
      name: "Events",
    },
    {
      id: 4,
      link: "affiliations",
      name: "Affiliations",
    },
    {
      id: 5,
      link: "blogs",
      name: "Blogs",
    },
    {
      id: 6,
      link: "contact",
      name: "Contact",
    },
  ];

  return (
    <>
      <div className="bg-black w-full pb-2 flex flex-col justify-center items-center mt-auto">
        {/* Title Section */}
        <div className="mb-8">
          <p className="text-3xl md:text-5xl mt-10 font-semibold text-white max-w-lg  text-center">
            Next Level MMA
          </p>
        </div>

        {/* Links Section */}
        <div>
          <ul className="flex flex-wrap justify-center items-center h-full">
            {links.map(({ id, link, name }) => {
              return (
                <li
                  className="px-4 cursor-pointer text-xl text-gray-400 font-medium hover:scale-105 duration-200 hover:text-white mb-4 md:mb-0"
                  key={id}
                >
                  <Link to={link === "home" ? "/" : `/${link}`}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Footer Text */}
        <p className="text-white mt-10 pt-2 w-[70%] flex items-center justify-center text-sm border-t-white border-t-[1px]">
          Copyright © 2024 Next Level MMA. All rights reserved
        </p>
      </div>
    </>
  );
};

export default Footer;

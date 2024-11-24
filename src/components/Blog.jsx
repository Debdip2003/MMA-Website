import React from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";

const Blog = () => {
  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 px-10">
        <div>
          <p className="text-5xl font-semibold pt-10 flex justify-center items-center mb-8 text-white">
            Blogs
          </p>
        </div>

        {/* Blog card */}
        <div className="w-full md:w-[30%] bg-gray-800 rounded-2xl p-6 flex justify-between mb-6 mx-auto">
          <div>
            <h2 className="mb-2 text-2xl text-white">K-Pro Ameture 2</h2>
            <p className="block text-sm text-gray-500">
              Thursday, April 13, 2023
            </p>
          </div>

          <div className="flex justify-center items-end">
            <p className="text-sm hover:cursor-pointer text-gray-500 hover:text-white duration-200">
              <Link to={"/Blogs"}>Read More...</Link>
            </p>
          </div>
        </div>

        <Contact />
      </div>
    </>
  );
};

export default Blog;

import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-5 px-4 md:px-10 bg-black">
      <p className="text-3xl md:text-5xl font-semibold text-white">
        404 - Page Not Found
      </p>
      <p className="text-xl text-white text-center max-w-md">
        The page you are looking for might be removed or is temporarily
        unavailable.
      </p>
      <button
        className="bg-orange-600 p-3 text-white text-lg md:text-xl rounded-2xl mt-5 hover:bg-orange-800 transition-colors duration-300"
        onClick={() => navigate("/")}
      >
        Back to Homepage
      </button>
    </div>
  );
};

export default ErrorPage;

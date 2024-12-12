// SearchBar.jsx
import React, { useEffect } from "react";

const SearchBar = ({ onSearch }) => {
  useEffect(function () {
    const el = document.querySelector("#searchPlayer");
    el.focus();
  }, []);

  return (
    <div className="w-full flex justify-center items-center">
      <input
        type="text"
        placeholder="Search players..."
        className=" p-2 mt-2 rounded-xl w-[50%] text-black"
        id="searchPlayer"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;

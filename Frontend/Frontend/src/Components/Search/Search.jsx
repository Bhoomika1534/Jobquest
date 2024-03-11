import React from "react";
import { AiOutlineSearch, AiOutlineCloseCircle } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const Search = () => {
  return (
    <div className="search md:grid md:gap-8 bg-gray-100 rounded-lg p-6 md:p-8">
      <form action="">
        <div className="firstDiv bg-white rounded-lg p-5 md:p-10 shadow-md flex flex-col md:flex-row items-center justify-between">
          <div className="search-group flex items-center mb-4 md:mb-0">
            <AiOutlineSearch className="icon cursor-pointer text-xl" />
            <input
              type="text"
              className="search-input bg-transparent border-none w-full md:w-auto outline-none text-blue-500"
              placeholder="Search Job here ..."
            />
            <AiOutlineCloseCircle className="icon1 cursor-pointer text-gray-700 text-xl" />
          </div>
          <div className="search-group flex items-center mb-4 md:mb-0">
            <BsHouseDoor className="icon cursor-pointer text-xl" />
            <input
              type="text"
              className="search-input bg-transparent border-none w-full md:w-auto outline-none text-blue-500"
              placeholder="Search Job by Company ..."
            />
            <AiOutlineCloseCircle className="icon1 cursor-pointer text-gray-700 text-xl" />
          </div>
          <div className="search-group flex items-center">
            <CiLocationOn className="icon cursor-pointer text-xl" />
            <input
              type="text"
              className="search-input bg-transparent border-none w-full md:w-auto outline-none text-blue-500"
              placeholder="Search Job by Location ..."
            />
            <AiOutlineCloseCircle className="icon1 cursor-pointer text-gray-700 text-xl" />
          </div>
          <button className="custom-btn mt-4 md:mt-0">
            Search
          </button>
        </div>
      </form>

      <div className="search2 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-10 mt-6">
        <div className="singleSearch flex flex-col md:flex-row items-center">
          <label htmlFor="relevance" className="sort-label text-gray-600 font-semibold mb-2 md:mb-0">
            Sort by :
          </label>
          <select name="" id="relevance" className="sort-select bg-white rounded-lg border-none px-4 py-1 md:ml-4">
            <option value="">Relevance</option>
            <option value="">Inclusive</option>
            <option value="">Start With</option>
            <option value="">Contains</option>
          </select>
        </div>
        <div className="singleSearch flex flex-col md:flex-row items-center">
          <label htmlFor="level" className="sort-label text-gray-600 font-semibold mb-2 md:mb-0">
            Level :
          </label>
          <select name="" id="relevance" className="sort-select bg-white rounded-lg border-none px-4 py-1 md:ml-4">
            <option value="">Senior</option>
            <option value="">Beginner</option>
            <option value="">Intermediate</option>
            <option value="">Advocate</option>
          </select>
        </div>
        <div className="singleSearch flex flex-col md:flex-row items-center">
          <label htmlFor="type" className="sort-label text-gray-600 font-semibold mb-2 md:mb-0">
            Type :
          </label>
          <select name="" id="relevance" className="sort-select bg-white rounded-lg border-none px-4 py-1 md:ml-4">
            <option value="">Full-Time</option>
            <option value="">Remote</option>
            <option value="">Contract</option>
            <option value="">Part-Time</option>
          </select>
        </div>
        <span className="text-gray-500 cursor-pointer mt-4 md:mt-0">Clear All</span>
      </div>
    </div>
  );
};

export default Search;

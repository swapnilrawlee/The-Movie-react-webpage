
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {

  return (
    <div className="sidepannel w-[16%]  flex flex-col items-center  p-10 border-r-[1px]">
      <h1 className="text-white">
        <i className=" mr-2 text-[#7E5AC1] ri-movie-fill"></i>
        <span className="font-bold">Movies.</span>
      </h1>

      <h1 className="text-white text-sm font-extralight mt-4">New Features</h1>
      <nav className="mt-4 flex flex-col   ">
        <Link to="/trending" className="text-white hover:bg-[#2f267185] hover:text-white rounded-lg py-3 px-4 ">
        <i className="mr-2 text-[#7E5AC1] ri-fire-fill"></i>
            Trending
        </Link>  
        <Link to="/popular" className="text-white px-4 hover:bg-[#2f267185] hover:text-white rounded-lg py-3  ">
        <i className="mr-2 text-[#7E5AC1] ri-sparkling-fill"></i>
            Popular
        </Link>  
        <Link to="/movie" className="text-white hover:bg-[#2f267185] hover:text-white rounded-lg py-3 px-4 ">
        <i className="mr-2 text-[#7E5AC1] ri-movie-2-fill"></i>
            Movies
        </Link>  
        <Link to="/tv" className="text-white hover:bg-[#2f267185] hover:text-white rounded-lg py-3 px-4 ">
        <i className="mr-2 text-[#7E5AC1] ri-tv-fill"></i>
            Tv Shows
        </Link> 
        <Link to="/person" className="text-white hover:bg-[#2f267185] hover:text-white rounded-lg py-3 px-4 ">
        <i className="mr-2 text-[#7E5AC1] ri-team-fill"></i>
            People
        </Link> 
        <hr  className="mt-7 mb-4"/>
        <h1 className="text-white text-sm font-extralight mt-4 mb-2">Website Information</h1>
        <Link className="text-white hover:bg-[#2f267185] hover:text-white rounded-lg py-3 px-4 ">
        <i className="mr-2 text-[#7E5AC1] ri-information-fill"></i>
            About
        </Link> 
        <Link className="text-white hover:bg-[#2f267185] hover:text-white rounded-lg py-3 px-4 ">
        <i className="mr-2 text-[#7E5AC1] ri-phone-fill"></i>
            Contact
        </Link> 
      </nav>
    </div>
  );
};

export default Sidebar;

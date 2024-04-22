import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../utlities/axios";

const Navbar = () => {
  const [query, setQuerry] = useState("");
  const [searches, setSearches] = useState([]);
  
  const getSearch = async () => {
    try {
      const rdata = await axios.get(`/search/multi?query=${query}`);
      setSearches(rdata.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSearch();
  }, [query]);

  return (
    <>
      <div className="nav text-white py-3 w-[80%] flex items-center gap-3 justify-start ml-[10%]  ">
        <i className="ri-search-2-line text-white mx-15"></i>
        <input
          onChange={(e) => setQuerry(e.target.value)}
          value={query}
          type="text"
          placeholder="   Search Anything..."
          className="w-[50%]  border-[1px] outline-none bg-transparent text-white "
        />
        {query.length > 0 && <i onClick={()=>setQuerry("")} className="ri-close-fill text-white mx-1"></i>}
     
        <div className="absolute  z-50 bg-zinc-100 rounded top-14 w-[40%] max-h-[50vh] overflow-auto">
  {searches && searches.map((item, index) => (
    <Link to={`${item.media_type}/details/${item.id}`}
      key={index}
      className="p-2  text-black rounded flex items-center justify-between px-7"
    >
      {item.poster_path && (
        <img
          src={item.poster_path || item.backdrop_path || item.profile_path ? `https://image.tmdb.org/t/p/w200${item.poster_path || item.backdrop_path || item.profile_path}` :"https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"}
          alt="Poster"
          className="mr-2 w-[100px] h-[100px]"
        />
      )}
      <h1 className=" text-xl">{item.name || item.title|| item.original.name|| item.original_title}</h1>
    </Link>
  ))}
</div>

      </div>
    </>
  );
};

export default Navbar;

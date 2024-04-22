import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Dropdown from "../utlities/Dropdown";
import axios from "../utlities/axios";
import Cards from "../utlities/Cards";

const Tvshows = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("popular");
  const [tv, setTv] = useState([]);

  const getTrending = async () => {
    try {
      const data = await axios.get(`/tv/${category}`);
      const rdata = data.data.results;
      setTv(rdata);
      console.log(rdata);
    } catch (error) {
      console.error("Error fetching tv:", error);
    }
  };

  useEffect(() => {
    document.title = "Movie. | tv ";

    getTrending();
  }, [category]);
  return tv ? (
    <>
      <div className="bg-black w-screen min-h-screen p-2">
        <div className="flex justify-between items-center gap-4">
          <h1 className="text-white w-[20%] p-4 font-4xl">
            {" "}
            <i
              onClick={() => navigate(-1)}
              className="ri-arrow-left-line"
            ></i>{" "}
            Tv Shows <small>({category})</small>
          </h1>
          <Navbar />
          <Dropdown
            title="Categories"
            options={["airing_today", "on_the_air", "popular", "top_rated"]}
            func={(e) => setCategory(e.target.value)}
          />
        </div>

        <Cards data={tv} title="tv" />
      </div>
    </>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width="100"
      height="100"
    >
      <circle
        fill="#FF156D"
        stroke="#FF156D"
        strokeWidth="1"
        r="7.5"
        cx="30"
        cy="32.5"
      >
        <animate
          attributeName="cy"
          calcMode="spline"
          dur="2"
          values="32.5;82.5;32.5;"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          begin="-.4"
        ></animate>
      </circle>
    </svg>
  );
};

export default Tvshows;

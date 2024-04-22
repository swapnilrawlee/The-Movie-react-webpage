import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Dropdown from "../utlities/Dropdown";
import axios from "../utlities/axios";
import Cards from "../utlities/Cards";

const Trending = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState([]);

  const getTrending = async () => {
    try {
      const data = await axios.get(`/trending/${category}/${duration}`);
      const rdata = data.data.results;
      setTrending(rdata);
    } catch (error) {
      console.error("Error fetching trending:", error);
    }
  };

  useEffect(() => {
    document.title = "Movie. | Trending ";

    getTrending();
  }, [category, duration]);
  return trending ? (
    <>
      <div className="bg-black w-screen min-h-screen p-2">
        <div className="flex justify-between items-center gap-4">
          <h1 className="text-white w-[20%] p-4 font-4xl">
            {" "}
            <i
              onClick={() => navigate(-1)}
              className="ri-arrow-left-line"
            ></i>{" "}
            Trending <small>({category})</small>
          </h1>
          <Navbar />
          <Dropdown
            title="Categories"
            options={["all", "movie", "tv"]}
            func={(e) => setCategory(e.target.value)}
          />
          <Dropdown
            title="Duration"
            options={["week", "day"]}
            func={(e) => setDuration(e.target.value)}
          />
        </div>

        <Cards data={trending} title={category} />
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

export default Trending;

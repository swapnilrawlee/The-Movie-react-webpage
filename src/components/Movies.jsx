import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Dropdown from "../utlities/Dropdown";
import axios from "../utlities/axios";
import Cards from "../utlities/Cards";

const Movies = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("now_playing");
  const [movie, setMovie] = useState([]);

  const getTrending = async () => {
    try {
      const data = await axios.get(`/movie/${category}`);
      const rdata = data.data.results;
      setMovie(rdata);
    } catch (error) {
      console.error("Error fetching movie:", error);
    }
  };

  useEffect(() => {
    document.title = "Movie. | movie ";

    getTrending();
  }, [category]);
  return movie ? (
    <>
      <div className="bg-black w-screen min-h-screen p-2">
        <div className="flex justify-between items-center gap-4">
          <h1 className="text-white w-[20%] p-4 font-4xl">
            {" "}
            <i
              onClick={() => navigate(-1)}
              className="ri-arrow-left-line"
            ></i>{" "}
            Movies <small>({category})</small>
          </h1>
          <Navbar />
          <Dropdown
            title="Categories"
            options={["upcoming", "top_rated", "now_playing"]}
            func={(e) => setCategory(e.target.value)}
          />
        </div>

        <Cards data={movie} title="movie"/>
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

export default Movies;

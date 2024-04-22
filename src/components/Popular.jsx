import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "../utlities/axios";
import Cards from "../utlities/Cards";
import Dropdown from "../utlities/Dropdown";

const Popular = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("movie");
  const [popular, setPopular] = useState([]);

  const getPopular = async () => {
    try {
      const data = await axios.get(`${category}/popular`);
      console.log(data);
      const rdata = data.data.results;
      setPopular(rdata);
    } catch (error) {
      console.error("Error fetching popular:", error);
    }
  };

  useEffect(() => {
    document.title = "Movie. | Popular ";
    getPopular();
  }, [category]);

  return (
    <div className="bg-black w-screen min-h-screen p-2">
      <div className="flex justify-between items-center">
        <h1 className="text-white w-[20%] p-4 font-4xl">
          {" "}
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line"
          ></i>{" "}
          Popular <small>({category})</small>
        </h1>
        <Navbar />
        <Dropdown
          title="Categories"
          options={["movie", "tv"]}
          func={(e) => setCategory(e.target.value)}
        />
      </div>
      {popular.length > 0 ? (
        <Cards data={popular} title={category} />
      ) : (
        <h1 className="text-white">Loading...</h1>
      )}
    </div>
  );
};

export default Popular;

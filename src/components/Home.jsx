import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Header from "./Header";
import axios from "../utlities/axios";
import Horizontalcards from "./Horizontalcards";
import Dropdown from "../utlities/Dropdown";

const Home = () => {
  document.title = "Home";
  const [wallpaper, setWallpaper] = useState("");
  const [trend, setTrend] = useState("");
  const [category, setCategory] = useState("all");

  const getHeaderWallpaper = async () => {
    try {
      const data = await axios.get(`/trending/all/day`);
      const rdata = data.data;
      const randomData =
        rdata.results[(Math.random() * rdata.results.length).toFixed()];
      setWallpaper(randomData);
    } catch (error) {
      console.error("Error fetching wallpaper:", error);
    }
  };

  const getTrending = async () => {
    try {
      const data = await axios.get(`/trending/${category}/day`);
      const rdata = data.data.results;
      setTrend(rdata);
    } catch (error) {
      console.error("Error fetching trending:", error);
    }
  };

  useEffect(() => {
    getTrending();
    !wallpaper && getHeaderWallpaper();
  }, [category]);

 
  return wallpaper ? (
    <div className="main w-screen h-screen flex bg-[#0e032c] fixed">
      <Sidebar />
      <div className="rightpannel  w-screen h-screen overflow-x-auto p-2">
        <Navbar />
        <Header data={wallpaper} />
        <div className="p-10 flex  justify-between items-center">
          <h1 className="text-3xl text-gray-400 p-3">Trending</h1>
       <Dropdown title ="Filter" options={["tv" ,"movies" ,"all"]} func={(e)=>setCategory(e.target.value)}/>
        </div> 
        <Horizontalcards trend={trend} />
      </div>
    </div>
  ) : (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100" height="100">
  <circle fill="#FF156D" stroke="#FF156D" strokeWidth="1" r="7.5" cx="30" cy="32.5">
    <animate attributeName="cy" calcMode="spline" dur="2" values="32.5;82.5;32.5;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate>
  </circle>
  <circle fill="#FF156D" stroke="#FF156D" strokeWidth="1" r="7.5" cx="50" cy="32.5">
    <animate attributeName="cy" calcMode="spline" dur="2" values="32.5;82.5;32.5;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate>
  </circle>
  <circle fill="#FF156D" stroke="#FF156D" strokeWidth="1" r="7.5" cx="70" cy="32.5">
    <animate attributeName="cy" calcMode="spline" dur="2" values="32.5;82.5;32.5;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate>
  </circle>
</svg>
  );
};

export default Home;

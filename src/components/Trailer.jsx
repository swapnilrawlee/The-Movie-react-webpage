import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const Trailer = () => {
   const navigate = useNavigate()
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector((state) => state[category].info.videos);
  return ytvideo ? (
    <div className="z-10  bg-[rgba(0,0,0,.9)] absolute w-screen h-screen flex items-center justify-center text-white top-0 left-0">
             <i onClick={() => navigate(-1)} className=" absolute text-white  right-40 top-10 text-5xl ri-close-line"></i>

      <ReactPlayer height={500}
      width={800}
      url={`https://www.youtube.com/watch?v=${ytvideo.key}`} />
    </div>
  ):(
    <h1 className="text-white font-5xl">404 not found</h1>
  )
};

export default Trailer;

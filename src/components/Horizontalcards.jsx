import React from "react";
import { Link } from "react-router-dom";

const Horizontalcards = ({ trend }) => {
  return (
    <div className="min-w-full h-1/2  flex overflow-y-auto justify-evenly  items-center  gap-10">
      {trend.map((t, i) => (
        <div className="flex gap-10 ">
          <Link
            to={`/${t.media_type}/details/${t.id}`}
            className="relative h-[400px] w-[300px] rounded-md"
            key={i}
          >
            <img
              src={`https://image.tmdb.org/t/p/original${
                t.poster_path || t.backdrop_path || t.profile_path
              }`}
              alt="image not found"
              className="z-0 h-full rounded-md object-contain w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent w-[300px]"></div>
            <div className="absolute bottom-4 left-4 text-left w-[200px]">
              <h1 className="text-lg font-semibold text-white w-[200px]">
                {t.title || t.name}
              </h1>
              <p className="mt-2 text-sm text-gray-300 w-[200px]">
                {t.overview.slice(0, 60)} <Link to="#">..more</Link>
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Horizontalcards;

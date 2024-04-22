import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data ,title }) => {
console.log(title);
  return (
    <>
      <div className="flex w-screen h-screen items-center px-3 py-5  flex-wrap gap-10">
        {data.map((card, i) => (
          <Link to={`/${card.media_type|| title}/details/${card.id}`}
            key={i}
            className="flex flex-col relative items-center  hover:shadow-slate-500 hover:shadow-2xl w-[20vw] rounded-lg h-[55vh]"
          >
            <img
              className="w-[10vw]  mt-5 "
              src={`https://image.tmdb.org/t/p/original${
                card.poster_path || card.backdrop_path || card.profile_path
              }`}
              alt=""
            />
            {card.vote_average && (
              <h3 className="absolute right-12 top-20 text-white bg-yellow-500 px-2 py-3 rounded-full">
                {(card.vote_average * 10).toFixed() + `%`}
              </h3>
            )}
            <Link className="text-white text-lg text-center w-[26vh]  tracking-tighter	 mt-3">
              {card.title || card.name}
            </Link>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Cards;

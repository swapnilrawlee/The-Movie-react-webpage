import React, { useEffect } from "react";
import { asyncloadtv, removetv } from "../Store/actions/Tvactions";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Horizontalcards from "../components/Horizontalcards";

const Tvdetails = () => {
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.tv);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadtv(id));
    return () => {
      dispatch(removetv());
    };
  }, [dispatch, id]);

  return info ? (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(https://image.tmdb.org/t/p/original${info.detail.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-screen relative h-screen px-[10%] "
    >
      <nav className="w-full h-[10vh]  text-zinc-300 flex gap-10 text-2xl items-center">
        <i onClick={() => navigate(-1)} className="ri-arrow-left-line"></i>
        <a target="_blank" href={info.detail.homepage}>
          <i className="ri-external-link-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="ri-earth-fill"> </i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
        >
          imdb
        </a>
      </nav>

      <div>
        <div className="w-full ">
          <img
            className="w-[15vw]  mt-2 "
            src={`https://image.tmdb.org/t/p/original${
              info.detail.poster_path ||
              info.detail.backdrop_path ||
              info.detail.profile_path
            }`}
            alt=""
          />
        </div>
        <div className="flex gap-3 mt-3 flex-col text-white">
          <div className="platform flex gap-5">
            <h1>Available on Platform :</h1>
            {info.watchproviders.results.IN &&
              info.watchproviders.results.IN.flatrate &&
              info.watchproviders.results.IN.flatrate.map((w) => (
                <img
                  title={w.provider_name}
                  className="w-[5vh] rounded-md object-cover h-[5vh]"
                  src={`https://image.tmdb.org/t/p/original${w.logo_path}`}
                />
              ))}
          </div>
          <div className="rent flex gap-5">
            <h1>Available on Rent :</h1>
            {info.watchproviders.results.IN.rent &&
              info.watchproviders.results.IN &&
              info.watchproviders.results.IN.rent.map((w) => (
                <img
                  title={w.provider_name}
                  className="w-[5vh] rounded-md object-cover h-[5vh]"
                  src={`https://image.tmdb.org/t/p/original${w.logo_path}`}
                />
              ))}
          </div>
          <div className="buy flex gap-5 text-white">
            <h1>Available to Buy :</h1>
            {info.watchproviders.results.IN.buy &&
              info.watchproviders.results.IN &&
              info.watchproviders.results.IN.buy.map((w) => (
                <img
                  title={w.provider_name}
                  className="w-[5vh] rounded-md object-cover h-[5vh]"
                  src={`https://image.tmdb.org/t/p/original${w.logo_path}`}
                />
              ))}
          </div>
        </div>
      </div>

      {/* part3 */}
      <div className="content font-semibold absolute top-[14%] left-[30%]">
        <h1 className="text-white text-3xl ">
          {info.detail.title ||
            info.detail.name ||
            info.detail.original_name ||
            info.detail.original_title}
          <small className="text-l px-2 ">
            ({info.detail.release_date.split("-")[0]})
          </small>
        </h1>

        <div className="flex text-sm gap-x-10 mt-3  items-center text-white">
          <h3 className=" text-white bg-yellow-500 px-2 py-3 rounded-full">
            {(info.detail.vote_average * 10).toFixed() + `%`}
          </h3>
          <h1 className="font-semibold text-l">User Score</h1>
          <h1>{info.detail.release_date}</h1>
          <h1>{info.detail.genres.map((e) => e.name).join(", ")}</h1>
          <h1>{`${info.detail.runtime}min`}</h1>
        </div>

        <h1 className="tagline text-[1px] italic text-white mt-3">
          {info.detail.tagline}
        </h1>
        <h1 className="  text-xl text-white mt-3">Overview :</h1>
        <p className="text-[1px] leading-none text-slate-300 w-[50vw]">
          {info.detail.overview}
        </p>

        <div className="mt-3">
          <Link
            className="text-white rounded-md capitalize bg-[#7E5AC1] p-1"
            to={`${pathname}/trailer`}
          >
            <i className="ri-play-fill"></i>
            Play Trailer
          </Link>
        </div>
      </div>

      {/* part 4 recommended and similar stuff */}
  <div className="mt-3">
  <h1 className="text-3xl py-2 font-semibold text-white mb-3" >Recommendation and similar :</h1>
      <Horizontalcards
        trend={info.recommendations ? info.recommendations : info.similar}
      />
  <Outlet/>
  </div>
  
    </div>
  ) : (
    <h1>masma</h1>
  );
};

export default Tvdetails;

import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({data}) => {
  return (
    <>
    <div className='w-full text-white h-[60%] relative'>
    <div
    className="absolute top-0 left-0 w-full h-[100%] bg-cover bg-top"
    style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(https://image.tmdb.org/t/p/original${data.backdrop_path})`
    }}
  ></div>      <div className="content absolute top-[45%] left-12">
    {data.backdrop_path &&   
    <>
    <h1 className='text-3xl font-black'>{data.original_title ||data.title || data.name}</h1>
      <p className='w-[45%] leading-none font-extralight text-sm'>{`${data.overview}`.slice(0 ,200)}<Link to={`${data.media_type}/details/${data.id}`}> ...more</Link></p>
      <p className='py-2 mr-2 text-sm'>
       <i className=" text-yellow-400 mr-2 ri-megaphone-fill"></i>
        {`Release date: ${data.release_date ||data.first_air_date }`}
        <i className=" text-yellow-400 mr-2 ml-2 ri-movie-2-fill"></i>
        {`Media : ${data.media_type}`.toUpperCase()}
      </p>
      <Link className='bg-purple-600 mt-3 rounded-lg px-3 py-1 text-sm overflow-hidden '>Watch Trailer</Link>
    </>
      }

      </div>
          </div>
    </>
  )
}

export default Header
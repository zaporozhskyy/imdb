import Image from 'next/image'
import React from 'react'
const API_KEY = process.env.API_KEY

async function getMovie(movieId){
    const res = await fetch( `http://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
    return await res.json()
}

export default async function page({params}) {
    const movieId = params.id
    const movie = await getMovie(movieId)
    return (
    <div className="w-full">
        <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}    
            width={500}
            height={300}
            className="rounded-lg"
            style={
                {
                    maxWidth: "100%",
                    height:"100%",
                }
            }
            placeholder="blur"
            blurDataURL="/spinner.svg"></Image>
        <div className="p-2">
            <h2 className="text-lg mb-3 font-bold">{movie.title || movie.name}</h2>
            <p className="text-lg mb-3"><span className="font-semibold mr-1">Overview:</span>{movie.overview}</p>
            <p className=""><span className="font-semibold mr-1">Date Released:</span>{movie.release_date || movie.first_air_date}</p>
            <p className=""><span className="font-semibold mr-1">Rating:</span>{movie.vote_count}</p>
        </div>
        </div>
            
    </div>
  )
}


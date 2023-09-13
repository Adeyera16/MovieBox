import React, { useState } from 'react';
import axios from 'axios';
import { useEffect, useRef } from 'react';
import NavBar from './NavBar'


const Hero = () => {
  const [movies, setMovies] = useState([]);

  const randomMovieRef = useRef(null);

  // const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b82735c257ba13fe2e97f629922f6a34&language=en-US&page=1`)
    .then((response) => {
      setMovies(response.data.results)
      randomMovieRef.current = movies[Math.floor(Math.random() * movies.length)];
    })
  }, [])

  const randomMovie = randomMovieRef.current;
  const backdropPath = randomMovie ? randomMovie.backdrop_path : null;

  return (
    <div className='w-full h-[600px] text-white'>
      <NavBar />
      <div className='absolute w-full h-[600px]  bg-gradient-to-r from-black'></div>
      <div className='w-full'>
          <img src={`https://image.tmdb.org/t/p/original/${movies.backdrop_path}`} alt={randomMovie.title}  className='h-[600px] w-full object-cover'/>
        <div className='text-white'>
          {randomMovie && <h1>{randomMovie.original_title}</h1>}
        </div>
      </div>
    </div>
  )
}

export default Hero
import axios from 'axios';
import React, { useState, useEffect} from 'react';
import {BsChevronRight} from 'react-icons/bs';
import imdb from '../assets/imdb.png';
import rottenTomato from '../assets/rotten-tomato.png';



const MovieList = () => {
    const [movieList, setMovielist] = useState([]);

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=b82735c257ba13fe2e97f629922f6a34&language=en-US&page=1')
        .then((response) => {
            setMovielist(response.data.results)
        })
        .catch(error => {
            console.error('Error fetching data:', error);
          });
    }, [])
    console.log(movieList)

    const topMovies = movieList.slice(0, 10);
  return (
    <div className='m-[3rem]'>
        <div className='flex justify-between'>
            <h1 className='text-3xl font-bold'>Featured Movie</h1>
            <p className='flex text-[#BE123C]'>See More  <span className='ml-2 p-1'><BsChevronRight className='mt-1' /></span></p>
        </div>
        <div className='grid grid-cols-4 mt-[2rem]'>
                {topMovies.map(movie => (
                    <div key={movie.id} data-testid="movie-card" className='mb-[2rem] md:mb-[5rem] w-[250px]'>
                        <img data-testid="movie-poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className='w-[250px]' />
                        <h2 className='font-bold text-xl' data-testid="movie-title">{movie.title}</h2>
                        <div className='flex justify-between py-3'>
                            <div className='flex'>
                                <img src={imdb} alt="imdb logo" className='w-[35px] h-[17px] mt-1'/>
                                <p className=' ml-4 text-sm'>{movie.vote_average}</p>
                            </div>
                            <div className='flex '>
                                <img src={rottenTomato} alt="tomato" className='w-[16px] h-[17px] mt-1'/>
                                <p className='ml-4 text-sm'>80%</p>
                            </div>
                        </div>
                        <p data-testid="movie-release-date" className='text-[#9CA3AF] text-sm'>{movie.release_date}</p>
                    </div>
                ))}
        </div>

    </div>
  )
}

export default MovieList
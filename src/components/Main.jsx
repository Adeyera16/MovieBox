import React, { useState, useEffect } from 'react';
import axios from 'axios';
import imdb from "../assets/imdb.png";
import rottenTomato from "../assets/rotten-tomato.png";
import {AiFillPlayCircle} from 'react-icons/ai';

const Main = () => {
    const [movies, setMovies] = useState([]);

    // const apiKey = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b82735c257ba13fe2e97f629922f6a34&language=en-US&page=1`)
            .then((response) => {
                setMovies(response.data.results);
            });
    }, []);

    const randomMovie = movies[Math.floor(Math.random() * movies.length)];
    console.log(randomMovie)

    return (
        <div>
            {randomMovie && (
                <div
                style={{
                    background: `url(https://image.tmdb.org/t/p/original/${randomMovie.backdrop_path})`,
                    height: '600px',
                    width: '100%',
                }}>
                    <div className='text-white flex flex-col max-w-[404px] mx-[4rem] pt-[7rem]'>
                        <h1 className='text-3xl md:text-5xl font-bold '>{randomMovie.title}</h1>
                        <div className='flex max-w-[184px] justify-between my-4'>
                        <div className='flex'>
                            <img src={imdb} alt="imbd logo" />
                            <p className=" ml-4 text-sm">{randomMovie.vote_average}</p>
                        </div>
                        <div className='flex'>
                            <img src={rottenTomato} alt="imbd logo" />
                            <p className=" ml-4 text-sm"> 80%</p>
                        </div>
                        </div>
                        <p>{randomMovie.overview}</p>
                        <div className='flex my-4 bg-[#BE123C] max-w-[169px] p-2 hover:bg-white hover:text-[#BE123C] cursor-pointer'>
                            <AiFillPlayCircle className='mr-2 w-[20px] h-[20px]'/>
                            <p> Watch Trailer</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Main;

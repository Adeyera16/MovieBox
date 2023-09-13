import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Main = () => {
    const [movies, setMovies] = useState([]);

    const apiKey = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
            .then((response) => {
                setMovies(response.data.results);
            });
    }, []);

    const randomMovie = movies[Math.floor(Math.random() * movies.length)];
    console.log(randomMovie)

    return (
        <div>
            {randomMovie && (
                <div>
                    <img
                        src={`https://image.tmdb.org/t/p/original/${randomMovie.backdrop_path}`}
                        alt=""
                        className='h-[600px] w-full'
                    />
                    <div className='text-white'>
                        <h1 className='text-3xl md:text-5xl font-bold'>{randomMovie.title}</h1>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Main;

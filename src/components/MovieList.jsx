import axios from "axios";
import React, { useState, useEffect } from "react";
import { BsChevronRight } from "react-icons/bs";
import imdb from "../assets/imdb.png";
import rottenTomato from "../assets/rotten-tomato.png";
import { Link } from "react-router-dom";

const MovieList = () => {
  const [movieList, setMovielist] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY;
  // console.log(process.env.REACT_APP_API_KEY);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
      )
      .then((response) => {
        console.log(response);
        setMovielist(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log(movieList);

  const topMovies = movieList.slice(0, 10);
  return (
    <div className="m-[3rem]">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Featured Movie</h1>
        <button className="flex text-[#BE123C] rounded-md p-2 hover:bg-[#BE123C] hover:text-white">
          See More{" "}
          <span className="ml-2 p-1">
            <BsChevronRight className="mt-1 cursor-pointer" />
          </span>
        </button>
      </div>
      <div className="grid md:grid-cols-4 mt-[2rem] items-center justify-center">
        {topMovies.map((movie) => (
          <Link key={movie.id} to={`movies/${movie.id}`}>
            <div
              key={movie.id}
              data-testid="movie-card"
              className="mb-[2rem] md:mb-[5rem] w-[250px]"
            >
              <img
                data-testid="movie-poster"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-[250px]"
              />
              <h2 className="font-bold text-xl" data-testid="movie-title">
                {movie.title}
              </h2>
              <div className="flex justify-between py-3">
                <div className="flex">
                  <img
                    src={imdb}
                    alt="imdb logo"
                    className="w-[35px] h-[17px] mt-1"
                  />
                  <p className=" ml-4 text-sm">{movie.vote_average}</p>
                </div>
                <div className="flex ">
                  <img
                    src={rottenTomato}
                    alt="tomato"
                    className="w-[16px] h-[17px] mt-1"
                  />
                  <p className="ml-4 text-sm">80%</p>
                </div>
              </div>
              <p
                data-testid="movie-release-date"
                className="text-[#9CA3AF] text-sm"
              >
                {movie.release_date}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieList;

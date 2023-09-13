import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MoviesDetails = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=b82735c257ba13fe2e97f629922f6a34&language=en-US`
      )
      .then((response) => {
        setMovieDetail(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log(movieDetail);

  const releaseDate = new Date(movieDetail.release_date);
  const utcReleaseDate = releaseDate.toUTCString();

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      <img src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`} alt={movieDetail.title} className="w-full h-[449px] object-cover"/>
      <div className="flex flex-col md:flex md:flex-row text-[#6B7280] justify-between p-3">
        <h1 className="font-bold text-black" data-testid="movie-title">{movieDetail.title}</h1>
        <p data-testid="movie-release-date">Release Date in UTC: {utcReleaseDate}</p>
        <p data-testid="movie-runtime">Runtime: {movieDetail.runtime} minutes</p>
      </div>
      <div className="flex">
        <div>
          <h2 className="font-bold font-xl px-3">Overview.</h2>
          <p className="px-3 py-2 mb-[5rem] max-w-[50rem]" data-testid="movie-overview"> {movieDetail.overview}</p>
        </div>
        <div className=" flex-col mt-[2rem] ">
          <button className="w-full bg-[#be123c] text-white p-2 rounded-md">
            See Showtimes
          </button>
          <button className="bg-[#fae7ec] w-full p-2 rounded-md mt-2">
            More Watch Options
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoviesDetails;

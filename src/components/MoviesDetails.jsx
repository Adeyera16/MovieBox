import React from 'react';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MoviesDetails = () => {
    const { id } = useParams();
    const [movieDetail, setMovieDetail] = useState(null);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/movieId?api_key=b82735c257ba13fe2e97f629922f6a34&language=en-US`)
          .then((response) => {
            setMovieDetail(response.data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, []);
    console.log(movieDetail)
  return (
    <div>MoviesDetails</div>
  )
}

export default MoviesDetails
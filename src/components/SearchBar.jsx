import React from 'react';
import {FaSearch} from 'react-icons/fa';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setIsLoading(true);

        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=b82735c257ba13fe2e97f629922f6a34&include_adult=false&language=en-US&page=1&query=${query}`
        );

        setResults(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    if (query.trim() !== '') {
      fetchMovie();
    } else {
      setResults([]);
    }
  }, [query]);


  return (
    <div className='w-[525px] h-[36px] flex border-2 justify-between p-2 rounded-md '>
        <input type="text" placeholder='What do you want to watch? ' value={query} onChange={(e) => setQuery(e.target.value)} className='w-full bg-transparent text-white outline-none'/>
        <FaSearch  className='text-white'/>
        <Link to="/searchbar">
        {isLoading && <p>Loading...</p>}
      <div>
        {results.map((movie) => (
          <div key={movie.id}>
            <img
                data-testid="movie-poster"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-[250px]"
              />
            <h2 data-testid="movie-title">{movie.title}</h2>
            <p data-testid="movie-release-date">{movie.release_date}</p>
          </div>
        ))}
      </div>
        </Link>
    </div>
  )
}

export default SearchBar
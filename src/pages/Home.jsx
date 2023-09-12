import React from 'react'
import Hero from '../components/Hero';
import Main from '../components/Main';
import MovieList from '../components/MovieList';
import MoviesDetails from '../components/MoviesDetails';

const Home = () => {
  return (
    <div>
        {/* <Hero /> */}
        <Main />
        <MovieList />
        {/* <MoviesDetails /> */}
    </div>
  )
}

export default Home
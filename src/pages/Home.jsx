import React from "react";
import Hero from "../components/Hero";
import Main from "../components/Main";
import MovieList from "../components/MovieList";

const Home = () => {
  return (
    <div className="max-w-[1440]">
      {/* <Hero /> */}
      <Main />
      <MovieList />
    </div>
  );
};

export default Home;

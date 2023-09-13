import React from "react";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import MoviesDetails from "./components/MoviesDetails";
import Footer from './components/Footer';
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/">
          <Route index exact element={<Home />} />
          <Route path="/searchbar" element={<SearchBar />} />
          <Route path=":id" element={<MoviesDetails />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;

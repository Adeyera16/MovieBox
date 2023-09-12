import React from 'react';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
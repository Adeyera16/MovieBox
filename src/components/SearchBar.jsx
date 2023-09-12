import React from 'react';
import {FaSearch} from 'react-icons/fa'

const SearchBar = () => {
  return (
    <div className='w-[525px] h-[36px] flex border-2 justify-between p-2 rounded-md '>
        <input type="text" placeholder='What do you want to watch? ' className='w-full bg-transparent text-white outline-none'/>
        <FaSearch  className='text-white'/>
    </div>
  )
}

export default SearchBar
import React from 'react';
import logo from '../assets/Logo.png';
import SearchBar from './SearchBar';
import {RxHamburgerMenu} from 'react-icons/rx'

const NavBar = () => {
  return (
    <section className='max-w-[1440] flex justify-around z-[100] w-full absolute'>
        <img src={logo} alt="logo" />
        <SearchBar />
        <div className='flex'>
            <p>Sign In</p>
            <div className='w-[24px] h-[24px] bg-[#BE123C] text-white rounded-full py-1 pl-1 ml-4'>
                <RxHamburgerMenu />
            </div>
        </div>
    </section>
  )
}

export default NavBar
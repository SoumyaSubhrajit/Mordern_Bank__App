/* eslint-disable no-unused-vars */
import { React, useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  return (
    <>
      <div>
        <nav className='w-full flex py-6 justify-between items-center navbar'>
          <img src={logo} alt='hookbank' className='w-[124px] h-[32]px' />

          <ul className='list-none sm:flex hidden justify-end items-center flex-1'></ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

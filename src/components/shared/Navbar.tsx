import Image from 'next/image';
import React from 'react';
import Logo from '@/assets/book.ico'

const Navbar = () => {
  return (
    <div className='bg-base-100 shadow-sm'>
      <div className="navbar  container mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a href='/books'>Books</a></li>
        <li><a>listed books</a></li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <div className="flex gap-2 items-center"> 
      Book Vipe 
       <Image src={Logo} alt='Logo'/>
      </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a href='/books'>Books</a></li>
      <li><a>listed books</a></li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end gap-2">
    <a className="btn btn-success">Sign In</a>
    <a className="btn btn-error">Sign Up</a>
  </div>
</div>
    </div>
  );
};

export default Navbar;
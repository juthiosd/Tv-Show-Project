import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-black text-white p-5 top-0 z-50 sticky">
      <div className="flex items-center gap-8">

        <h1 className="text-red-500 text-3xl font-bold uppercase cursor-pointer">NETFLIX</h1>
        <ul className="hidden md:flex gap-5 text-sm">
          <li className="hover:text-gray-400 cursor-pointer">Action</li>
          <li className="hover:text-gray-400 cursor-pointer">Series</li>
          <li className="hover:text-gray-400 cursor-pointer">Films</li>
          <li className="hover:text-gray-400 cursor-pointer">Animation</li>
        </ul>
      </div>

      <div className='navbar-end flex gap-4'>
        <Link to='/Signin' className='btn btn-outline'>Sign In</Link>
        <Link to='/Signup' className='btn btn-outline'>Sign Up</Link>
      </div>


    </div>

  );
};

export default Navbar;
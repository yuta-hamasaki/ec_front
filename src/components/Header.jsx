// Header.js
import React from 'react';

const Header = () => {
  return (
    <div className='bg-blue-500 p-4'>
      <h1 className='text-white text-2xl font-bold'>My App</h1>
      <nav className='mt-2'>
        <ul className='flex space-x-4'>
          <li><a href='#' className='text-white'>Login</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;


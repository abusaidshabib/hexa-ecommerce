import React from 'react';
import './NabBar.css';
import { FiSearch } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { BsCart3 } from "react-icons/bs";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='nav_div'>
      <div className='main_nav'>
        <p className='logo'>HEXA</p>
        <div className='icons_div'>
          <FiSearch className='icon' />
          <CgProfile className='icon' />
          <BsCart3 className='icon' />
        </div>
      </div>
      <div className='mega_menu'>
        <ul>
          <li>
            <Link to="/" className='menu'>Home</Link>
          </li>
          <li>
            <Link to="/" className='menu'>Catalog</Link>
          </li>
          <li>
            <Link to="/" className='menu'>New arrivals</Link>
          </li>
          <li>
            <Link to="/" className='menu'>About</Link>
          </li>
          <li>
            <Link to="/" className='menu'>Contact</Link>
          </li>
          <li>
            <Link to="/" className='menu'>Blogs</Link>
          </li>
          <li>
            <Link to="/" className='menu'>Shop</Link>
          </li>
          <li>
            <Link to="/" className='menu'>FAQ's</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
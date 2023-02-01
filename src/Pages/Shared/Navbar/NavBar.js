import React, { useState } from 'react';
import './NabBar.css';
import { FiSearch } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { BsCart3 } from "react-icons/bs";
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [search, setSearch] = useState(false);
  const [profile, setProfile] = useState(false);
  const [cart, setCart] = useState(false);

  return (
    <div className='nav_div'>
      <div className='main_nav'>
        <Link to="/" className='logo'>HEXA</Link>
        <div className='icons_div'>
          <Link to="" className='nav_main_icons'
            onClick={() => setSearch(!search)} >
            <FiSearch className='icon' /></Link>
          <Link to="" className='nav_main_icons'
            onClick={() => setProfile(!profile)}>
            <CgProfile className='icon' />
          </Link>
          <Link to="" className='nav_main_icons'
            onClick={() => setCart(!cart)}>
            <BsCart3 className='icon' />
          </Link>
        </div>
      </div>
      <div className='mega_menu'>
        <ul>
          <li>
            <Link to="/home" className='menu'>Home</Link>
          </li>
          <li>
            <Link to="/" className='menu'>Catalog</Link>
          </li>
          <li>
            <Link to="/" className='menu'>New arrivals</Link>
          </li>
          <li>
            <Link to="/about" className='menu'>About</Link>
          </li>
          <li>
            <Link to="/contact" className='menu'>Contact</Link>
          </li>
          <li>
            <Link to="/blog" className='menu'>Blogs</Link>
          </li>
          <li>
            <Link to="/" className='menu'>Shop</Link>
          </li>
          <li>
            <Link to="/faq" className='menu'>FAQ's</Link>
          </li>
        </ul>
      </div>
      <div className={search ? "search_nav active" : "search_nav"}>
        <input type="search" name="search" id="" />
        <Link className='search_btn_open' to="/">Search</Link>
      </div>

      <div className={profile ? "profile_nav active" : "search_nav"}>
        <input type="search" name="search" id="" />
        <Link className='search_btn_open' to="/">Search</Link>
      </div>

      <div className={cart ? "cart_nav active" : "search_nav"}>
        <input type="search" name="search" id="" />
        <Link className='search_btn_open' to="/">Search</Link>
      </div>
    </div>
  );
};

export default NavBar;
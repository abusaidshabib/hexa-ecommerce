import React, { useState } from 'react';
import './NabBar.css';
import { FiSearch } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { BsCart3 } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { AiOutlineDown } from "react-icons/ai";

const NavBar = () => {
  const [search, setSearch] = useState(false);
  const [profile, setProfile] = useState(false);
  const [cart, setCart] = useState(false);

  return (
    <div className='nav_div'>
      <div className='main_nav'>
        <Link to="/" className='logo'>HEXA</Link>
        <div className='icons_div'>
          <button className='nav_main_icons'
            onClick={() => setSearch(!search)} >
            <FiSearch className='icon' /></button>
          <Link to="/dashboard" className='nav_main_icons'
            onClick={() => setProfile(!profile)}>
            <CgProfile className='icon' />
          </Link>
          <button className='nav_main_icons'
            onClick={() => setCart(!cart)}>
            <BsCart3 className='icon' />
          </button>
        </div>
      </div>
      <div className='mega_menu'>
        <ul>
          <li>
            <Link to="/home" className='menu'>Home</Link>
          </li>
          <li>
            <Link to="" className='menu align_mid'>Categories<AiOutlineDown className='ml' /></Link>
          </li>
          <li>
            <Link to="/" className='menu align_mid'>New arrivals <AiOutlineDown className='ml'/> </Link>
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
          <li>
            <Link className='menu' to="/login">Login/</Link>
            <Link className='menu' to="/register">Register</Link>
          </li>
        </ul>
      </div>
      <div className={search ? "search_nav active" : "search_nav"}>
        <input type="search" name="search" id="" />
        <Link className='search_btn_open' to="">Search</Link> <RxCross1 className='cross_btn' onClick={() => setSearch(!search)} />
      </div>

      <div className={profile ? "profile_nav active" : "search_nav"}>

      </div>

      <div className={cart ? "cart_nav active" : "search_nav"}>
        <input type="search" name="search" id="" />
        <Link className='search_btn_open' to="/">Search</Link>
      </div>
    </div>
  );
};

export default NavBar;
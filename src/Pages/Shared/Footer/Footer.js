import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer card_title'>
      <ul>
        <li>
          <b>Quick links</b>
        </li>
        <li>
          <Link className='footer_links' to="/home">Home</Link>
        </li>
        <li>
          <Link className='footer_links' to="/about">About Us</Link>
        </li>
        <li>
          <Link className='footer_links' to="/catalog">Catalog</Link>
        </li>
        <li>
          <Link className='footer_links' to="/contact">Contact</Link>
        </li>
        <li>
          <Link className='footer_links' to="/blog">Blog</Link>
        </li>
      </ul>
      <ul>
        <li>
          <b>Most Purchase</b>
        </li>
        {/* 5 most purchase products */}
      </ul>
      <ul>
        <li>
          <b>High Rated</b>
        </li>
        {/* 5 high rated products */}
      </ul>
      <ul>
        <li>
          <b>Sale Collection</b>
        </li>
        {/* 5 collections name */}
      </ul>
      <div>
        <b>Newsletter</b>
        <br/>
        <input className='footer_input' type="email" name="email" id="" placeholder='Enter Your Email'/>
        <div className='footer_icons'>
          <FaFacebookF className='so_icons'/>
          <FaTwitter className='so_icons'/>
          <FaInstagram className='so_icons'/>
          <FaLinkedinIn className='so_icons'/>
          <FaPinterestP className='so_icons'/>
        </div>
      </div>

    </div>
  );
};

export default Footer;
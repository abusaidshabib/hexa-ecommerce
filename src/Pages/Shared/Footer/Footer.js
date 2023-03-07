import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaTwitter } from "react-icons/fa";
import { ApiDataContext } from '../../../Context/ApiContext/ApiContext';

const Footer = () => {
  const { products, collections } = useContext(ApiDataContext)

  let activeStyle = {
    color: "var(--hoverColor)",
  };


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
        {
          collections.slice(0, 5).map(collection => (
            <li key={collection._id}>
              <NavLink style={({ isActive }) =>
                isActive ? activeStyle : undefined
              } to={`/collection/${collection.title}`} className="footer_links">{collection.title}</NavLink>
            </li>
          ))
        }
      </ul>
      <ul>
        <li>
          <b>High Rated</b>
        </li>
        <li>
          {
            products.slice(0, 5).map(product => (
              <li key={product._id}>
                <NavLink to={`/product/${product._id}`} style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                } className="footer_links">{product.title}</NavLink>
              </li>
            ))
          }
        </li>
      </ul>
      <div>
        <b>Newsletter</b>
        <br />
        <input className='footer_input' type="email" name="email" id="" placeholder='Enter Your Email' />
        <div className='footer_icons'>
          <FaFacebookF className='so_icons' />
          <FaTwitter className='so_icons' />
          <FaInstagram className='so_icons' />
          <FaLinkedinIn className='so_icons' />
          <FaPinterestP className='so_icons' />
        </div>
      </div>

    </div>
  );
};

export default Footer;
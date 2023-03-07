import React, { useContext, useState } from 'react';
import './NabBar.css';
import { FiSearch } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { BsCart3 } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineDown } from "react-icons/ai";
import Carousel from 'react-multi-carousel';
import ProductCard from '../../Home/TopSelling/ProductCard';
import { ApiDataContext } from '../../../Context/ApiContext/ApiContext';
import { AuthContext } from '../../../Context/UserContext/UserContext';

const NavBar = () => {
  const [search, setSearch] = useState(false);
  const [profile, setProfile] = useState(false);
  const [cart, setCart] = useState(false);
  const [newArrival, setNewArrival] = useState(false);
  const [category, setCategory] = useState(false);
  const { user, logOut } = useContext(AuthContext);


  let activeStyle = {
    color: "var(--hoverColor)",
  };



  const { products, collections } = useContext(ApiDataContext)


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const funCategory = () => {
    setNewArrival(false)
    setCategory(true)
  }

  const funNewArrival = () => {
    setNewArrival(true)
    setCategory(false)
  }

  return (
    <div className='nav_div'>
      <div className='main_nav'>
        <Link to="/" className='logo'>HEXA</Link>
        <div className='icons_div'>
          <Link to="" className='nav_main_icons'
            onClick={() => setSearch(!search)} >
            <FiSearch className='icon' /></Link>
          <Link to="/dashboard" className='nav_main_icons'
            onClick={() => setProfile(!profile)}>
            <CgProfile className='icon' />
          </Link>
          <Link to="" className='nav_main_icons'>
            <BsCart3 className='icon' />
            <p className='notification_number'>0</p>
          </Link>
        </div>
      </div>
      <div className='mega_menu'>
        <ul>
          <li>
            <NavLink to="/home" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } className='menu'>Home</NavLink>
          </li>
          <li>
            <Link onMouseEnter={funCategory} to="" className='menu align_mid'>Categories<AiOutlineDown className='ml' /></Link>
          </li>
          <li>
            <Link onMouseEnter={funNewArrival}
              to="" className='menu align_mid'>New arrivals <AiOutlineDown className='ml' /> </Link>
          </li>
          <li>
            <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to="/about" className='menu'>About</NavLink>
          </li>
          <li>
            <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to="/contact" className='menu'>Contact</NavLink>
          </li>
          <li>
            <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to="/blog" className='menu'>Blogs</NavLink>
          </li>
          <li>
            <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to="/faq" className='menu'>FAQ's</NavLink>
          </li>
          {
            user?.uid ?
              <li>
                <p onClick={logOut} className="menu"  style={{
                  cursor: "pointer"
                }}>LogOut</p>
              </li>
              :
              <li>
                <NavLink style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                } className='menu' to="/login">Login/</NavLink>
                <NavLink style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                } className='menu' to="/register">Register</NavLink>
              </li>
          }
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
      {
        newArrival && <div className='arrival_menu' onMouseLeave={() => setNewArrival(false)}>
          <Carousel className='top_selling_grid'
            responsive={responsive}
            swipeable={false}
            draggable={false}
            infinite={true}
          >
            {
              products.slice(0, 10).map(product => (
                <ProductCard key={product._id} product={product}></ProductCard>
              ))
            }
          </Carousel>
        </div>
      }
      {
        category &&
        <div onMouseLeave={() => setCategory(false)} className='category_menu'>
          <div className='card_collection'>
            {
              collections.map(collection => (<Link to={`/collection/${collection.title}`} key={collection._id} className="nav_collection">
                <h3 className='title2'>{collection.title}</h3>
                <p className='card_title'>{collection.description}</p>
              </Link>))
            }
          </div>

        </div>

      }
    </div>
  );
};

export default NavBar;
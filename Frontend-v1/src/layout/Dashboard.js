import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import "./Dashboard.css";
import { HiOutlineHome, } from "react-icons/hi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { SiSimpleanalytics } from "react-icons/si";
import { RiPercentFill } from "react-icons/ri";

const Dashboard = () => {

  const location = useLocation();

  return (
    <div className='main_dashboard'>
      <div className='dash_logo'>
        <Link to="/" className='logo'>HEXA</Link>
      </div>
      <div className='main_dash_section'>
        <div className='left_nav_Main'>
          <ul>
            <li>
              <Link className='d_menu' to="/dashboard/products">Products</Link>
            </li>
            <li>
              <Link className='d_menu' to="/dashboard/home">Add Products</Link>
            </li>
          </ul>
          <div className='view_website_dashboard'>
            <Link className='d_menu' to="/" >View Website</Link>
          </div>
        </div>
        <Outlet className="dash_content"></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
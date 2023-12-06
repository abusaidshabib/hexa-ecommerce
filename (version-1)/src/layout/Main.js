import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import NavBar from '../Pages/Shared/Navbar/NavBar';
import TopNavBar from '../Pages/Shared/TopNavBar/TopNavBar';

const Main = () => {
  return (
    <div>
      <TopNavBar></TopNavBar>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ApiDataContext } from '../../../Context/ApiContext/ApiContext';
import './HeroSection.css';

const HeroSection = () => {

  const { heroData } = useContext(ApiDataContext);
  console.log(heroData);

  return (
    <div className='carousel'>
      <div className='slide1 slider'>
        <div className='hero_content'>
          <h1 className='main_title'>Protect your <br />instruments</h1>
          <p className='hero_regular'>Stay organized and secure with our line of instrument bags.</p><br />
          <Link className='btn_type1' to="/">Shop Now</Link>
        </div>
      </div>
      <div className='slide2 slider'>
        <div className='hero_content'>
          <h1 className='main_title'>Protect your <br />instruments</h1>
          <p className='hero_regular'>Stay organized and secure with our line of instrument bags.</p><br />
          <Link className='btn_type1' to="/">Shop Now</Link>
        </div>
      </div>
      <div className='slide3 slider'>
        <div className='hero_content'>
          <h1 className='main_title'>Protect your <br />instruments</h1>
          <p className='hero_regular'>Stay organized and secure with our line of instrument bags.</p><br />
          <Link className='btn_type1' to="/">Shop Now</Link>
        </div>
      </div>
      <div className='slide4 slider'>
        <div className='hero_content'>
          <h1 className='main_title'>Protect your <br />instruments</h1>
          <p className='hero_regular'>Stay organized and secure with our line of instrument bags.</p><br />
          <Link className='btn_type1' to="/">Shop Now</Link>
        </div>
      </div>
      <div className='navigation'>
        <div className="btn"></div>
        <div className="btn"></div>
        <div className="btn"></div>
        <div className="btn"></div>
        <div className="btn"></div>
      </div>
    </div>
  );
};

export default HeroSection;
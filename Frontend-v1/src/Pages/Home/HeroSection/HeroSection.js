import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ApiDataContext } from '../../../Context/ApiContext/ApiContext';
import './HeroSection.css';

const HeroSection = () => {

  const { heroData } = useContext(ApiDataContext);
  const [slideIndex, setSlideIndex] = useState(1);

  const moveDot = index => {
    setSlideIndex(index)
  }

  return (

    <div className="carousel">
      {heroData.slice(0,3).map((obj, index) => {
        return (
          <div
            key={obj._id}
            className={`${obj.class} ${slideIndex === index + 1? "active": "" }`}>
            <div className='hero_content'>
              <h1 className='hero_title'>{obj.title}</h1>
              <p className='hero_para'>{obj.paragraph}</p>
              <Link className='btn_type1' to="/">Shop now</Link>
            </div>
          </div>
        )
      })}

      <div className="navigation">
        {Array.from({ length: 3 }).map((item, index) => (
          <div key={index}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "btn active" : "btn"}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
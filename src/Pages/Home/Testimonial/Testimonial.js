import React from 'react';
import './Testimonial.css';
import person1 from "../../../assets/Person/person1.jpg";
import { BsStarFill } from "react-icons/bs";

const Testimonial = () => {
  return (
    <div className='testimonial_div'>
      <h2 className='title1'>What our clients say</h2>
      <div className='testimonial_content'>
        <div>
          <img src={person1} alt="" />
          <div className='ratings_testimonial'>
            <BsStarFill className='icons_test' />
            <BsStarFill className='icons_test' />
            <BsStarFill className='icons_test' />
            <BsStarFill className='icons_test' />
          </div>
          <p className='hero_para'>It’s Mecca of all the sports enthusiasts. One stop shop for all your sports need.<br />The variety of equipments you need for any of your favourite sport is here. The quality of products is also good.</p>
          <p className='para2'> <b>- John Smith/USA</b></p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
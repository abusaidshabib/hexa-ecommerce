import React from 'react';
import "./AboutProducts.css";
import img1 from "../../../assets/AboutSec.jpg";
import { FaRegThumbsUp } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

const AboutProducts = () => {
  return (
    <div className='about_products'>
      <img className='img_section' src={img1} alt="" />
      <div className=''>
        <h2 className='title2'>Driving Customer Satisfaction through Quality Products and Exceptional Service</h2>
        <p className='para2'>Our mission is to offer a wide range of high-quality products at unbeatable prices, with a focus on exceptional customer service. We carefully curate our selection to ensure that you have access to the latest and greatest products on the market.<br /><br />

          We believe that shopping should be convenient, easy, and most importantly, fun. That's why we have designed our website with user experience in mind. Whether you're shopping for yourself or for someone else, you can find exactly what you're looking for in just a few clicks.</p>
        <div className='about_sec_icons'>
          <FaRegThumbsUp />
            <p><b>Watche Thickness</b>
              <br />We want your shopping experience to be as smooth.</p>
        </div>
        <div className='about_sec_icons'>
          <FcLike />
          <p><b>Water Repellency</b>
            <br />We are committed to providing our customers with a safe.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutProducts;
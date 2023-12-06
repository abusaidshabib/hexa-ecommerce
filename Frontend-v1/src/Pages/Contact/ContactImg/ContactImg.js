import React from 'react';
import img1 from "../../../assets/Contact.jpg";
import "./ContactImg.css";

const ContactImg = () => {
  return (
    <div className='contact_img_div'>
      <img src={img1} alt=""/>
    </div>
  );
};

export default ContactImg;
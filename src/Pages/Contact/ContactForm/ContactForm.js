import React from 'react';
import "./ContactForm.css";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { GrMapLocation } from "react-icons/gr";

const ContactForm = () => {
  return (
    <div className='full_form'>
      <form>
        <h3 className='title1'>Get In Touch</h3>

        <label className='title3' htmlFor="name">Enter Your Name</label><br />
        <input className='input_form_field' type="text" name="name" id="name" placeholder='Enter your Name' required /><br />

        <label className='title3' htmlFor="email">Enter Your Email</label><br />
        <input className='input_form_field' type="email" name="email" id="email" placeholder='Enter Your Email' required /><br />

        <label className='title3' htmlFor="message">Enter Your Message</label><br />
        <textarea rows="" cols="" type="text" name='message' id="message" placeholder='Enter Your Message'></textarea>

        <input className='submit_btn_form' type="submit" value="Send message" />
      </form>
      <div>
        <h3 className='title1'>Support</h3>
        <div className='about_sec_icons'>
          <FiPhoneCall />
          <p className='para2'><b className='para1'>Phone</b>
            <br />+1234567890</p>
          <p></p>

        </div>

        <div className='about_sec_icons'>
          <HiOutlineMailOpen />
          <p className='para2' ><b className='para1'>Email</b>
            <br />info@gmail.com</p>
          <p></p>
        </div>

        <div className='about_sec_icons'>
          <GrMapLocation />
          <p className='para2' ><b className='para1'>Address</b>
            <br />#123 abc main city</p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
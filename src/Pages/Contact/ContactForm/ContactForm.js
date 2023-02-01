import React from 'react';
import "./ContactForm.css";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { GrMapLocation } from "react-icons/gr";

const ContactForm = () => {
  return (
    <div className='full_form'>
      <form>
        <h3 className='title2'>Get In Touch</h3>

        <label htmlFor="name">Enter Your Name</label><br />
        <input className='input_form_field' type="text" name="name" id="name" placeholder='Enter your Name' required /><br />

        <label htmlFor="email">Enter Your Email</label><br />
        <input className='input_form_field' type="email" name="email" id="email" placeholder='Enter Your Email' required /><br />

        <label htmlFor="message">Enter Your Message</label><br />
        <textarea rows="" cols="" type="text" name='message' id="message" placeholder='Enter Your Message'></textarea>

        <input className='submit_btn_form' type="submit" value="send message" />
      </form>
      <div>
        <h3 className='title2'>Support</h3>
        <div className='about_sec_icons'>
          <FiPhoneCall />
          <p><b>Phone</b>
            <br />+1234567890</p>
          <p></p>

        </div>

        <div className='about_sec_icons'>
          <HiOutlineMailOpen />
          <p><b>Email</b>
            <br />info@gmail.com</p>
          <p></p>
        </div>

        <div className='about_sec_icons'>
          <GrMapLocation />
          <p><b>Address</b>
            <br />#123 abc main city</p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
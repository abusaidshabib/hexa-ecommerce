import React from 'react';
import './Login.css';
import { HiOutlineMailOpen } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { GrMapLocation } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { AiOutlineGithub } from 'react-icons/ai';

const Login = () => {
  return (
    <div className='full_form'>
      <div>
        <form>
          <h3 className='title1'>Welcome back to us</h3>

          <label htmlFor="name">Enter Your Name</label><br />
          <input className='input_form_field' type="text" name="name" id="name" placeholder='Enter your Name' required /><br />

          <label htmlFor="password">Enter Your Password</label><br />
          <input className='input_form_field' type="password" name="password" id="password" placeholder='Enter Your Password' required /><br />

          <Link to="" className='forgot_pass end'>Forgot Password</Link>

          <input className='submit_btn_form' type="submit" value="send message" />
        </form>
        <Link className='icon_btn_text' to=""><FcGoogle className="btn_ico" /> Sign in with Google</Link>
        <Link className='icon_btn_text' to=""><FaFacebook className="btn_ico" /> Sign in with Facebook</Link>
        <Link className='icon_btn_text' to=""><AiOutlineGithub className="btn_ico" /> Sign in with Github</Link>
        <p className='test_des'>Don't have an account <Link to="" className='forgot_pass'>Sign Up</Link></p>
      </div>
      <div>
        <h3 className='title1'>Support</h3>
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

export default Login;
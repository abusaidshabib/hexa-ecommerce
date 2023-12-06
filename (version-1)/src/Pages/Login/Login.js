import React, { useContext, useState } from 'react';
import './Login.css';
import { HiOutlineMailOpen } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { GrMapLocation } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { AiOutlineGithub } from 'react-icons/ai';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Context/UserContext/UserContext';
import GoogleSignIn from '../Component/GoogleSignIn/GoogleSignIn';

const Login = () => {

  const { logIn, passReset } = useContext(AuthContext);
  const [err, setErr] = useState(' ');
  const [forget, setForget] = useState(false);
  const [email, setEmail] = useState("abusaidshabib712@GrMail.com");
  console.log(forget);

  console.log(email)

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    logIn(email, password)
      .then(result => {
        const user = result.user;
        toast("successfully log in")
      })
      .catch(error => {
        console.log(error)
        setErr(error.message);
      });
  }

  const handleReset = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    passReset(email)
      .then(() => {
        toast("successfully send email")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }



  return (
    <div className='full_form'>
      <div>
        {
          !forget ?
            <form onSubmit={handleLogin}>
              <h3 className='title1'>Welcome back to us</h3>

              <label className='title3' htmlFor="email">Enter Your Email</label><br />
              <input
                className='input_form_field' type="email" name="email" id="email" placeholder='Enter your Email' /><br />


              <label className='title3' htmlFor="password">Enter Your Password</label><br />
              <input className='input_form_field' type="password" name="password" id="password" placeholder='Enter Your Password' /><br />

              <button onClick={() => setForget(!forget)} className='forgot_pass end'>Forgot Password</button>
              <input className='submit_btn_form' type="submit" value="Login Now" />
            </form>

            :

            <form onSubmit={handleReset}>
              <h3 className='title1'>Send Reset Password Mail</h3>

              <label className='title3' htmlFor="email">Enter Your Email</label><br />
              <input
                className='input_form_field' type="email" name="email" id="email" placeholder='Enter your Email' /><br />
              <input className='submit_btn_form' type="submit" value="Reset Password" />
            </form>
        }

        <GoogleSignIn></GoogleSignIn>

        <Link className='icon_btn_text' to=""><FaFacebook className="btn_ico" /> Sign in with Facebook</Link>
        <Link className='icon_btn_text' to=""><AiOutlineGithub className="btn_ico" /> Sign in with Github</Link>
        <p className='test_des'>Don't have an account <Link to="/register" className='forgot_pass'>Sign Up</Link></p>
      </div>
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
      <ToastContainer />
    </div>
  );
};

export default Login;
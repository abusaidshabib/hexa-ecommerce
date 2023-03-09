import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HiOutlineMailOpen } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { GrMapLocation } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from 'react-icons/fa';
import { AiOutlineGithub } from 'react-icons/ai';
import { AuthContext } from '../../Context/UserContext/UserContext';
import useTitle from '../../hook/UseTitle/UseTitle';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

  useTitle("Register");

  const { createUser, updateUser, verify } = useContext(AuthContext);

  const [pass, setPass] = useState();
  const [cpass, setCPass] = useState();
  const [wrongPass, setWrongPass] = useState(false);
  const [select, setSelect] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";


  const checkPass = () => {
    if (pass === cpass) {
      setWrongPass(false)
    }
    else {
      setWrongPass(true)
    }
  }

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;

    console.log(name, email, pass, select);


    createUser(email, pass)
      .then(result => {
        const user = result.user;
        const userData = {
          displayName: name
        }
        updateUser(userData)
          .then(() => {
            verify()
              .then(() => {
                newUser(email, name, select);
                navigate(from, { replace: true });
              })
              .catch(error => console.log(error));
          })
          .catch(error => console.log(error));
      })

  }

  const newUser = (email, name, select) => {
    const newreg = {
      email: email,
      name: name,
      category: select
    }
    console.log(newreg);
    fetch('http://localhost:5000/user', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newreg)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          toast.success('User Create Successfully')
        }
        else {
          toast.error(data.message)
        }
      })
      .catch(err => console.err(err))
  }

  return (
    <div className='full_form'>
      <div>
        <form onSubmit={handleSubmit}>
          <h3 className='title1'>Welcome back to us</h3>

          <label className='title3' htmlFor="name">Enter Your Name</label><br />
          <input className='input_form_field' type="text" name="name" id="name" placeholder='Enter your Name' required />
          <br />

          <label className='title3' htmlFor="email">Enter Your Email</label><br />
          <input className='input_form_field' type="email" name="email" id="email" placeholder='Enter your Email' required />
          <br />

          <label className='title3' htmlFor="password">Enter Your Password</label>
          <br />
          <input
            onChange={(e) => setPass(e.target.value)}
            onBlur={checkPass}
            className='input_form_field' type="password" name="password" id="password" placeholder='Enter Your Password' required /><br />

          <label className='title3' htmlFor="password">Confirm Your Password</label>
          <br />
          <input
            onChange={(e) => setCPass(e.target.value)}
            onBlur={checkPass}
            className='input_form_field' type="password" name="cpassword" id="cpassword" placeholder='Confirm Your Password' required /><br />

          {
            wrongPass ? <p style={{
              color: "red",
              padding: "20 0",
              textAlign: "center",
              fontSize: "16px"
            }}>Your Password Doesn't Match</p>
              :
              ""
          }

          <label className='title3' htmlFor="status">Select your role</label>
          <br />
          <select onBlur={event => {
            setSelect(event.target.value)
            console.log(event.target)
          }} name="status" id="status" className='select_form_field' required>
            <option value="select">Select car:</option>
            <option value="Buyer">Buyer</option>
            <option value="Seller">Seller</option>
          </select>

          {
            select !== "select" ? ""
              :
              <p style={{
                color: "red",
                padding: "20 0",
                textAlign: "center",
                fontSize: "16px"
              }}>Please select the form</p>
          }

          <input className='submit_btn_form' type="submit" value="Register Now" disabled={wrongPass} />

          {
            wrongPass ? <p style={{
              color: "red",
              padding: "20 0",
              textAlign: "center",
              fontSize: "16px"
            }}>Please Fill all the form</p>
              :
              ""
          }

        </form>
        <Link className='icon_btn_text' to=""><FcGoogle className="btn_ico" /> Sign in with Google</Link>
        <Link className='icon_btn_text' to=""><FaFacebook className="btn_ico" /> Sign in with Facebook</Link>
        <Link className='icon_btn_text' to=""><AiOutlineGithub className="btn_ico" /> Sign in with Github</Link>
        <p className='test_des'>Log in on your old <Link to="/login" className='forgot_pass'>Log In</Link></p>
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

export default Register;
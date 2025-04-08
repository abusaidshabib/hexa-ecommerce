import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../../Context/UserContext/UserContext';
import { GoogleAuthProvider } from 'firebase/auth';

const GoogleSignIn = () => {

  const { googlePopUp } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const handleGPopUp = () => {
    googlePopUp(googleProvider)
      .then(result => {
        const user = result.user;
        // newUser(user?.email, user?.displayName)
      })
      .catch(error => console.error(error));

  }
  // const newUser = (email, name) => {
  //   const newreg = {
  //     email: email,
  //     name: name,
  //     category: "buyer"
  //   }
  //   console.log(newreg);

  //   fetch('https://b612-used-products-resale-server-side-abusaidshabib.vercel.app/user', {
  //     method: "POST",
  //     headers: {
  //       'content-type': 'application/json'
  //     },
  //     body: JSON.stringify(newreg)
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       if (data.acknowledged) {
  //         setUserEmail(email);
  //         toast.success('User Logged Successfully');
  //       }
  //       else {
  //         toast.success('User Logged Successfully');
  //         navigate(from, { replace: true });
  //       }
  //     })
  //     .catch(err => console.err(err))
  // }

  return (
    <>
      <Link onClick={handleGPopUp} className='icon_btn_text' to=""><FcGoogle className="btn_ico" /> Sign in with Google</Link>
    </>
  );
};

export default GoogleSignIn;
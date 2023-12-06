import React, { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext/UserContext';

const ErrorElement = () => {
  const { logOut } = useContext(AuthContext);
  const error = useRouteError();

  return (
    <div>
      <p>Something went wrong!!!</p>
      <p>{error.status}</p>
      <p> Please <button className='btn_outline' onClick={logOut}>SignOut</button> </p>
    </div>
  );
};

export default ErrorElement;
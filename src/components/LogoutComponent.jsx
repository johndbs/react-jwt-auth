import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../store/slices/userSlice';

const LogoutComponent = () => {

  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(setCurrentUser(undefined));
  };

  return (
    <li>
      <a href="#" onClick={logOut}>Logout</a>
    </li>
  )
};

export default LogoutComponent;

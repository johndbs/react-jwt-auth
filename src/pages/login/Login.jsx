import React from 'react'
import { useDispatch } from 'react-redux';
import { AuthApi } from '../../api/auth-api';
import { setCurrentUser } from '../../store/slices/userSlice';
import LoginFormCoponent from './components/LoginFormCoponent';

const Login = () => {

  const dispatch = useDispatch();

  const login = async (formValue) => {
    await AuthApi.login(formValue.username, formValue.password)
      .then(response => {
        console.log("Logged in successfully "+ JSON.stringify(response.data) );
        dispatch(setCurrentUser(response.data));
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Login page</h2>
      <LoginFormCoponent onSubmit={login} />
    </div>
  )
}

export default Login;

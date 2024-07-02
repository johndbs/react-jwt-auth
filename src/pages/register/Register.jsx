import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AuthApi } from '../../api/auth-api';
import SubcriptionFormComponent from './components/SubcriptionFormComponent';
import { setCurrentUser } from '../../store/slices/userSlice';

const Register = () => {

  const [feedBack, setFeedBack] = useState({});

  const dispatch = useDispatch();

  const navigate = useNavigate();



const login = (username, password) => {
    AuthApi.login(username, password)
      .then((userCredential) => {
        console.log("Login OK " + JSON.stringify(userCredential.data));

        dispatch(setCurrentUser(userCredential.data));

        setTimeout(() => {
          // Expect 1ms, else the AnonymousRoute redirect to the home page
          navigate("/profile", { replace: true });
        }, 1);
      })
      .catch((error) => {
        console.log("Error", error);
        // TODO put the error in a toast
      });
  };

  const handleSubmit = async (form) => {
    alert("Sub" + JSON.stringify(form));

    AuthApi.register(form.username, form.email, form.password)
      .then((response) => {
        setFeedBack({ successMessage: "User created" });

        // Connect after 5 sec
        setTimeout(() => {
          login(form.username, form.password);
        }, 5000);
      })
      .catch((error) => {
        console.error('Sign-up error: ', error.response)
        
        if (error.response) {
          setFeedBack({ alertMessage: JSON.stringify(error.response.data)});
        }
      });
  };

  return (
    <div>
      <h2>Subcription</h2>
      <SubcriptionFormComponent onSubmit={handleSubmit} feedBack={feedBack} />
    </div>
  );
}

export default Register;

import React, { useState } from 'react';
import {ValidatorHelper} from '../../../helpers/ValidatorHelper';
import FormField from '../../../ui/FormField';


const VALIDATORS = {
    username: (value) => {
        return ValidatorHelper.mandatory(value);
    },
    password: (value) => {
        return ValidatorHelper.mandatory(value);
    }
}


const LoginFormCoponent = ({onSubmit, alertMessage}) => {

    const [form, setForm] = useState({
        username: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const validate = (fieldName, value) => {
        setErrors({...errors, [fieldName]: VALIDATORS[fieldName](value)});
    };

    const handleStateChange = (fieldName, value) => {
        setForm({ ...form,[fieldName]: value});
        validate(fieldName, value);
    };

    const hasError = () => {
        return Object.values(errors).some(error => error !== undefined);
    };

  return (
    <form action='POST' onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
    }}>

        <ul>
            <li>
                <FormField name="username"
                    id="username"
                    label="Username"
                    value={form.username}
                    required={true}
                    setState={handleStateChange}
                />
                {errors.username && <span style={{color: "red"}}>{errors.username}</span>} 
            </li>
            <li>
          <FormField
            type="password"
            name="password"
            id="password"
            label="Password"
            value={form.password}
            required
            setState={handleStateChange}
          />
          {errors.password && (
            <span style={{ color: "red" }}>{errors.password}</span>
          )}
        </li>
        <li>
          <button type="submit" disabled={hasError()}>
            Login
          </button>
        </li>
        </ul>
      
    </form>
  )
};

export default LoginFormCoponent;

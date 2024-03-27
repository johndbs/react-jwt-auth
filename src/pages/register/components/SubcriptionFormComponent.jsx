import React, {  useState } from "react";
import { ValidatorHelper } from "../../../helpers/ValidatorHelper";
import FormField from "../../../ui/FormField";

const VALIDATORS = {
  username: (value) => {
    return ValidatorHelper.min(value, 3) || ValidatorHelper.max(value, 8);
  },
  email: (value) => {
    return (
      ValidatorHelper.mandatory(value) || ValidatorHelper.emailFormat(value)
    );
  },
  password: (value) => {
    return ValidatorHelper.min(value, 3) || ValidatorHelper.max(value, 40);
  },
};

const SubcriptionFormComponent = ({ onSubmit, feedBack }) => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  const validate = (fieldName, value) => {
    setErrors({ ...errors, [fieldName]: VALIDATORS[fieldName](value) });
  };

  const handleStateChange = (fieldName, value) => {
    setForm({ ...form, [fieldName]: value });
    validate(fieldName, value);
  };

  const hasError = () => {
    return Object.values(errors).some((error) => undefined !== error);
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {!!feedBack.alertMessage && (
          <>
            <li>
              <span style={{ color: "red" }}>{feedBack.alertMessage}</span>
            </li>
          </>
        )}
        {!!feedBack.successMessage && (
          <>
            <li>
              <span style={{ color: "green" }}>{feedBack.successMessage}</span>
            </li>
          </>
        )}
        <li>
          <FormField
            type="text"
            name="username"
            label="Username"
            id="username"
            value={form.username}
            required
            setState={handleStateChange}
          />
          {errors.username && (
            <span style={{ color: "red" }}>{errors.username}</span>
          )}
        </li>
        <li>
          <FormField
            type="text"
            name="email"
            id="email"
            label="email"
            value={form.email}
            required
            setState={handleStateChange}
          />
          {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
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
          <button type="sub" disabled={hasError()}>
            Sign up
          </button>
        </li>
      </ul>
    </form>
  );
};

export default SubcriptionFormComponent;

import { useState } from "react";
import { ValidatorHelper } from "../../../helpers/ValidatorHelper";
import FormField from "../../../ui/FormField";


const VALIDATORS = {
    name: (value) => {
      return ValidatorHelper.mandatory(value);
    },
  };
  
  const HelloForm = ({ onSubmit }) => {
    const [form, setForm] = useState({
      name: "",
    });
  
    const [errors, setErrors] = useState({
      name: undefined,
    });
  
    const validate = (fieldName, value) => {
      setErrors({
        ...errors,
        [fieldName]: VALIDATORS[fieldName](value),
      });
    };
  
    const handleStateChange = (fieldName, value) => {
      setForm({ ...form, [fieldName]: value });
      validate(fieldName, value);
    };
  
    const hasError = () => {
      return Object.values(errors).some((error) => error !== undefined);
    };
  
    return (
      <form
        method="POST"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(form);
        }}
      >
        <ul>
          <li>
            <FormField
              type="text"
              name="name"
              id="name"
              label="Name"
              value={form.password}
              required
              setState={handleStateChange}
            />
            {errors.password && (
              <span style={{ color: "red" }}>{errors.name}</span>
            )}
          </li>
          <li>
            <button type="submit" disabled={hasError()}>
              Submit
            </button>
          </li>
        </ul>
      </form>
    );
  };
  
  export default HelloForm;
  
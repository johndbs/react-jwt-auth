import React from 'react';

const FormField = ({
    type = 'text',
    name,
    id,
    label,
    placeholder,
    required = false,
    value,
    setState,
    ...rest
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={(e) => setState(e.target.name, e.target.value)}
        {...rest}></input>
    </>
  )
};

export default FormField;

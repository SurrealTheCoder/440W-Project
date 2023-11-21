import React, { useState } from 'react';

const InputField = ({ label, placeholder, type = 'text', onChange }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="input-field">
      <label>{label}</label>
      <input type={type} placeholder={placeholder} value={value} onChange={handleChange} />
    </div>
  );
};

export default InputField;

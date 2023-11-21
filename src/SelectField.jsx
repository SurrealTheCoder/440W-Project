import React, { useState } from 'react';

const SelectField = ({ label, options, value, onChange }) => {
  const [selectedValue, setSelectedValue] = useState(value);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="select-field">
      <label>{label}</label>
      <select value={selectedValue} onChange={handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;

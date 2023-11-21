import React, { useState } from 'react';

const CheckboxField = ({ label, name, checked, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (event) => {
    const newValue = event.target.checked;
    setIsChecked(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="checkbox-field">
      <input type="checkbox" name={name} checked={isChecked} onChange={handleChange} />
      <label>{label}</label>
    </div>
  );
};

export default CheckboxField;

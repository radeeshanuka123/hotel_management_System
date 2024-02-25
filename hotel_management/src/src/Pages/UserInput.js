// Pages/UserInput.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/main.css';

const UserInput = () => {
  const [employeeData, setEmployeeData] = useState({
    employeeId: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    phoneNumber: '',
    address: '',
    password: '',
    confirmPassword: '',
    position: '',
  });

  const [passwordError, setPasswordError] = useState('');
  const [formError, setFormError] = useState('');

  const handleChange = (e) => {
    setEmployeeData({ ...employeeData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    for (const key in employeeData) {
      if (!employeeData[key]) {
        setFormError('Please fill out all fields');
        return;
      }
    }

    // Check if passwords match
    if (employeeData.password !== employeeData.confirmPassword) {
      setPasswordError('Passwords do not match');
      setFormError('');
      return;
    }

    // Reset error states
    setPasswordError('');
    setFormError('');

    console.log('Employee data submitted:', employeeData);
    // Add logic to handle employee data
  };

  const handleClear = () => {
    setEmployeeData({
      employeeId: '',
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      email: '',
      phoneNumber: '',
      address: '',
      password: '',
      confirmPassword: '',
      position: '',
    });
    // Reset error states on clear
    setPasswordError('');
    setFormError('');
  };

  return (
    <div className="user-input-container">
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="label-input-group">
          <label>
            Employee Id:
            <input type="text" name="employeeId" value={employeeData.employeeId} onChange={handleChange} />
          </label>
          <label>
            First Name:
            <input type="text" name="firstName" value={employeeData.firstName} onChange={handleChange} />
          </label>
          <label>
            Last Name:
            <input type="text" name="lastName" value={employeeData.lastName} onChange={handleChange} />
          </label>
        </div>
        <div className="label-input-group">
          <label>
            Date of Birth:
            <input type="text" name="dateOfBirth" value={employeeData.dateOfBirth} onChange={handleChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={employeeData.email} onChange={handleChange} />
          </label>
          <label>
            Phone number:
            <input type="tel" name="phoneNumber" value={employeeData.phoneNumber} onChange={handleChange} />
          </label>
        </div>
        <div className="label-input-group">
          <label>
            Address:
            <input type="text" name="address" value={employeeData.address} onChange={handleChange} />
          </label>
          <label>
            Password:
            <input type="password" name="password" value={employeeData.password} onChange={handleChange} />
          </label>
          <label>
            Confirm Password:
            <input type="password" name="confirmPassword" value={employeeData.confirmPassword} onChange={handleChange} />
          </label>
        </div>
        {passwordError && <p className="error-message">{passwordError}</p>}
        <div className="label-input-group">
          <label>
            Position:
            <input type="text" name="position" value={employeeData.position} onChange={handleChange} />
          </label>
        </div>
        {formError && <p className="error-message">{formError}</p>}
        <div className="button-container">
          <Link to="/">
            <button className="back-button">Back</button>
          </Link>
          <button type="button" onClick={handleClear}>Clear</button>
        </div>
        <div className="button-container">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default UserInput;

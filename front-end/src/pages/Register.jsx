import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fullName: '',
    userName: '',
    primaryEmail: '',
    password: '',
    bio: '',
    primaryEmailEnabled: false,
    primaryPhone: '',
    primaryPhoneEnabled: false,
    emails: [],
    phones: [],
    userType: 'INDIVIDUAL',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/auth/register', user).then(() => {
      navigate('/dashboard');
    });
    console.log(user);
  };

  return (
    <div className="max-w-md mx-auto mb-10">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fullName" className="block mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={user.fullName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="userName" className="block mb-2">
            Username
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={user.userName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="primaryEmail" className="block mb-2">
            Primary Email
          </label>
          <input
            type="email"
            id="primaryEmail"
            name="primaryEmail"
            value={user.primaryEmail}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="bio" className="block mb-2">
            Bio
          </label>
          <textarea
            id="bio"
            name="bio"
            value={user.bio}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="primaryEmailEnabled"
            className="flex items-center mb-2"
          >
            <input
              type="checkbox"
              id="primaryEmailEnabled"
              name="primaryEmailEnabled"
              checked={user.primaryEmailEnabled}
              onChange={handleChange}
              className="mr-2"
            />
            Enable Primary Email
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="primaryPhone" className="block mb-2">
            Primary Phone
          </label>
          <input
            type="text"
            id="primaryPhone"
            name="primaryPhone"
            value={user.primaryPhone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="primaryPhoneEnabled"
            className="flex items-center mb-2"
          >
            <input
              type="checkbox"
              id="primaryPhoneEnabled"
              name="primaryPhoneEnabled"
              checked={user.primaryPhoneEnabled}
              onChange={handleChange}
              className="mr-2"
            />
            Enable Primary Phone
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="userType" className="block mb-2">
            User Type
          </label>
          <select
            id="userType"
            name="userType"
            value={user.userType}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
          >
            <option value="INDIVIDUAL">Individual</option>
            <option value="BUSINESS">Business</option>
            <option value="ADMIN">Admin</option>
            <option value="CUSTOMER_SERVICE">Customer Service</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-primary hover:bg-orange-500 text-white font-bold py-2 px-4 rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;

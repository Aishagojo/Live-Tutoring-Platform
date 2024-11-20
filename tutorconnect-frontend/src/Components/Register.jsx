
import React, { useState } from 'react';
import { registerUser } from '../api';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser({ name, email, password });
      setMessage(`User registered successfully: ${response.name}`);
    } catch (error) {
      setMessage('Error registering user. Please try again.');
      console.error('Error registering user', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded">
      <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>
      <form onSubmit={handleRegister}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Name:</label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Email:</label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Password:</label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          type="submit"
        >
          Register
        </button>
      </form>
      {message && <p className="mt-4 text-center text-red-500">{message}</p>}
    </div>
  );
};

export default Register;

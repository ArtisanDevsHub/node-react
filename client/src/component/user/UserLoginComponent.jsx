import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');


const handleLogin = async () => {
  try {
    const response = await axios.post('http://localhost:3000/users/user-login', {
      username,
      password
    });
    console.log('Login response:', response.data);
  } catch (error) {
    console.error('Login error:', error);
  }
};

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-6">User Login</h2>

        <form method='post' action={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              required
              className="mt-1 block w-full border text-center border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e)=>setUsername(() => e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={password}
              className="mt-1 block w-full border border-gray-300 
              rounded-md p-2 focus:outline-none focus:ring-2 
              focus:ring-blue-500 text-center"
              onChange={(e)=>setPassword(() => e.target.value)}
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full  bg-blue-500 text-gray-500 py-2 rounded-md hover:bg-blue-600 transition"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    axios
      .post('http://localhost:3001/login', {
        username: username,
        password: password,
      })
      .then((response) => {
        // location.reload();
        window.location.href = '/';
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-600 font-medium"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-600 font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={handleLogin}
              className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-blue-600"
            >
              Login
            </button>
            {/* Add Forgot Password link or any other links as needed */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

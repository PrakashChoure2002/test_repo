import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const response = await axios.post('/user/signin', { email, password });
      const userData = response.data; // Assuming the response includes user data
      // Storing user data in local storage
      // localStorage.setItem('userData', JSON.stringify(userData));
      console.log("hogyaa login");
        navigate('/')
      } catch (err) {
        setError(err.response);
        // navigate("/login")
    }
  };




  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full bg-blue-500 text-white p-2 rounded"
          onClick={handleSignIn}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignIn;

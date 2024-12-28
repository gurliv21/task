import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/authService'; 

const Login = () => {
  const [username, setUsername] = useState('');  // Change 'email' to 'username'
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ username, password });
      if (response.token) { // Check for 'token' in the response
        localStorage.setItem('token', response.token); // Save token to localStorage
        alert('Login successful! Welcome, ' + username); // Display welcome message
        navigate('/task-management'); // Navigate to task management page
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert(error.response ? error.response.data.message : 'Something went wrong');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Bind to 'username'
          placeholder="Username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

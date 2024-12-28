import axios from 'axios';

const API_URL = 'http://localhost:3000/api/users';

// Login user and get token
export const loginUser = async ({ username, password }) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    console.log(response.data); // Verify if the response contains the token
    return response.data; // Ensure the response has the 'token'
  } catch (error) {
    console.error('Login failed:', error);
    throw error; // Throw error for handling in component
  }
};

// Register user
export const registerUser = async ({ username, password }) => {
  try {
    const response = await axios.post(`${API_URL}/register`, { username, password });
    return response.data;
  } catch (error) {
    console.error('Registration failed:', error);
    throw error; // Throw error for handling in component
  }
};

// Make authenticated request (add token to header)
export const getAuthenticatedData = async () => {
  const token = localStorage.getItem('token'); // Get token from localStorage

  if (!token) {
    throw new Error('No token found. Please log in.');
  }

  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // Attach token to the request header
    },
  };

  try {
    const response = await axios.get(`${API_URL}/protected-route`, config); // Replace with actual protected API endpoint
    return response.data;
  } catch (error) {
    console.error('Error fetching protected data:', error);
    throw error; // Throw error for handling in component
  }
};

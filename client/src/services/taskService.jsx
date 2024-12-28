import axios from 'axios';

const API_URL = 'http://localhost:3000/api/tasks';

export const getTasks = async () => {
  const token = localStorage.getItem('token'); // Get token from localStorage
  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // Attach token to the request header
    },
  };

  const response = await axios.get(API_URL, config);
  
  return response.data;
};

export const createTask = async (task) => {
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // Attach token to request header
    },
  };

  const response = await axios.post(API_URL, task, config); // Post task with token
  return response.data;
};

export const getTaskById = async (id) => {
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // Attach token to request header
    },
  };

  const response = await axios.get(`${API_URL}/${id}`, config); // Get task by id with token
  return response.data;
};

export const updateTask = async (id, task) => {
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // Attach token to request header
    },
  };

  const response = await axios.put(`${API_URL}/${id}`, task, config); // Update task with token
  return response.data;
};

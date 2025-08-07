import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ah-game-backend-iezb.onrender.com/api',
});

// Add Authorization token for admin
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('adminToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

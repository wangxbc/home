import axios from 'axios';

// 使用环境变量配置API基础URL，默认为开发环境的localhost
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const instance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => {
    if (response.data.code !== 1) {
      return Promise.reject(response.data);
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default instance;

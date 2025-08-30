// src/api/auth.js
import axios from 'axios';
import instance from '../index';
export interface User {
  id: number;
  username: string;
  nickname: string;
  avatar?: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface RegisterData extends LoginCredentials {
  nickname: string;
  avatar?: File;
}

export interface AuthResponse {
  success: boolean;
  token: string;
  user: User;
}
// src/api/auth.ts

export const register = (data: RegisterData): Promise<{ data: AuthResponse }> => {
  const formData = new FormData();
  formData.append('username', data.username);
  formData.append('password', data.password);
  formData.append('nickname', data.nickname);
  if (data.avatar) {
    formData.append('avatar', data.avatar);
  }

  return axios.post('/', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const login = (credentials: LoginCredentials): Promise<{ data: AuthResponse }> => {
  return axios.post('/', credentials);
};

export const getProfile = (): Promise<{ data: User }> => {
  return axios.get('/');
};

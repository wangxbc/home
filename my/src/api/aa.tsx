import axios from 'axios';
export interface RegisterData {
  username: string;
  password: string;
  nickname: string;
  headImgUrl: string;
}

export interface RegisterResponse {
  code: number;
  msg: string;
}

export interface LoginResponse {
  code: number;
  msg: string;
  token: string;
  uid: string;
  username: string;
  nickname: string;
  headImgUrl: string;
}
export interface UploadResponse {
  code: number;
  msg: string;
  data: string;
}

const baseURL = 'http://localhost:5000';

export const registerUser = async (data: RegisterData): Promise<RegisterResponse> => {
  try {
    const response = await axios.post<RegisterResponse>(`${baseURL}/`, data);
    return response.data;
  } catch (error) {
    console.error('注册失败:', error);
    throw error;
  }
};

export const loginUser = async (username: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await axios.get<LoginResponse>(`${baseURL}/`, {
      params: { username, password },
    });
    return response.data;
  } catch (error) {
    console.error('登录失败:', error);
    throw error;
  }
};

export const uploadFile = async (file: File): Promise<UploadResponse> => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await axios.post<UploadResponse>(`${baseURL}/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('文件上传失败:', error);
    throw error;
  }
};

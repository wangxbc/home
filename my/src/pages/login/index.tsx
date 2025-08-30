import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import instance from '../../api';
import { AxiosError } from 'axios';
interface LoginForm {
  username: string;
  password: string;
}

interface RegisterForm {
  username: string;
  password: string;
  nickname: string;
  avatar: File | null;
}

interface ApiResponse {
  code: number;
  msg: string;
  token?: string;
  user?: {
    id: number;
    username: string;
    nickname: string;
    avatar?: string;
  };
}

interface ErrorResponse {
  code: number;
  msg: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const [loginForm, setLoginForm] = useState<LoginForm>({
    username: '',
    password: '',
  });

  const [registerForm, setRegisterForm] = useState<RegisterForm>({
    username: '',
    password: '',
    nickname: '',
    avatar: null,
  });

  const [avatarPreview, setAvatarPreview] = useState<string>('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await instance.post<ApiResponse>('/login', loginForm);
      if (response.data.code === 1 && response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        instance.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        navigate('/');
      } else {
        alert(response.data.msg || '登录失败');
      }
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;
      console.error('登录失败:', axiosError);
      alert(axiosError.response?.data?.msg || '登录失败，请检查用户名和密码');
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!registerForm.username || !registerForm.password || !registerForm.nickname) {
      alert('请填写完整信息');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('username', registerForm.username);
      formData.append('password', registerForm.password);
      formData.append('nickname', registerForm.nickname);
      if (registerForm.avatar) {
        formData.append('avatar', registerForm.avatar);
      }

      const response = await instance.post<ApiResponse>('/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.code === 1) {
        alert('注册成功，请登录');
        if (response.data.user) {
          localStorage.setItem('user', JSON.stringify(response.data.user));
        }
        setIsLogin(true);
      } else {
        alert(response.data.msg || '注册失败');
      }
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;
      console.error('注册失败:', axiosError);
      alert(axiosError.response?.data?.msg || '注册失败，请重试');
    }
  };

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files, value } = e.target;
    if (name === 'avatar') {
      setRegisterForm((prev) => ({
        ...prev,
        avatar: files?.[0] || null,
      }));
    } else {
      setRegisterForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setRegisterForm((prev) => ({ ...prev, avatar: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  const clearAvatar = () => {
    setRegisterForm((prev) => ({ ...prev, avatar: null }));
    setAvatarPreview('');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">{isLogin ? '登录' : '注册'}</h2>
        {isLogin ? (
          <form onSubmit={handleLogin}>
            <input
              type="text"
              name="username"
              placeholder="账号"
              className="border border-gray-300 p-2 mb-2 w-full rounded"
              value={loginForm.username}
              onChange={handleLoginChange}
            />
            <input
              type="password"
              name="password"
              placeholder="密码"
              className="border border-gray-300 p-2 mb-4 w-full rounded"
              value={loginForm.password}
              onChange={handleLoginChange}
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600"
              style={{ position: 'relative', left: '40%', width: '20%', height: 33 }}
            >
              登录
            </button>
          </form>
        ) : (
          <form onSubmit={handleRegister}>
            <input
              type="text"
              name="username"
              placeholder="账号"
              className="border border-gray-300 p-2 mb-2 w-full rounded"
              value={registerForm.username}
              onChange={handleRegisterChange}
            />
            <input
              type="password"
              name="password"
              placeholder="密码"
              className="border border-gray-300 p-2 mb-2 w-full rounded"
              value={registerForm.password}
              onChange={handleRegisterChange}
            />
            <input
              type="text"
              name="nickname"
              placeholder="昵称"
              className="border border-gray-300 p-2 mb-2 w-full rounded"
              value={registerForm.nickname}
              onChange={handleRegisterChange}
            />
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">头像</label>
              <div className="flex items-center space-x-4">
                <div
                  className="relative w-8 h-8 rounded-full overflow-hidden border border-gray-300 shadow-sm"
                  style={{
                    width: '200px',
                    height: '200px',
                    position: 'relative',
                    left: '30%',
                    marginBottom: '8px',
                  }}
                >
                  {avatarPreview ? (
                    <img
                      src={avatarPreview}
                      alt="Avatar preview"
                      className="w-full h-full object-cover"
                      style={{ maxWidth: '100%', maxHeight: '100%' }}
                    />
                  ) : (
                    <div
                      className="w-full h-full bg-gray-100 flex items-center justify-center"
                      style={{ width: '200px', height: '200px' }}
                    >
                      <svg
                        className="w-3 h-3 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="flex flex-col space-y-1">
                  <label className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white px-1.5 py-0.5 rounded text-xs">
                    选择头像
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleAvatarChange}
                    />
                  </label>
                  {avatarPreview && (
                    <button
                      type="button"
                      onClick={clearAvatar}
                      className="bg-red-500 hover:bg-red-600 text-white px-1.5 py-0.5 rounded text-xs"
                    >
                      清除
                    </button>
                  )}
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white p-2 rounded w-full hover:bg-green-600"
              style={{ position: 'relative', left: '40%', width: '20%', height: 33 }}
            >
              注册
            </button>
          </form>
        )}
        <p className="mt-4 text-center">
          {isLogin ? '还没有账号？' : '已有账号？'}
          <span className="text-blue-500 cursor-pointer ml-1" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? '注册' : '登录'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;

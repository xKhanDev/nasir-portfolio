import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true, // for cookie-based refresh tokens
});

instance.interceptors.request.use(
  (config) => {
    const user = localStorage.getItem('admin');
    const token = JSON.parse(user)?.accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const response = await axios.get('http://localhost:5000//dashboared/auth/refresh', {
          withCredentials: true,
        });
        const newAccessToken = response.data.accessToken;
        localStorage.setItem('admin', JSON.stringify({ ...JSON.parse(localStorage.getItem('admin')), accessToken: newAccessToken }));
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return instance(originalRequest);
      } catch (error) {
        localStorage.removeItem('admin');
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export default instance;

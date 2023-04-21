import axios from 'axios';
import { studentToken } from '../../types/globalConstant';

const instance = axios.create({
    baseURL: 'https://jiranew.cybersoft.edu.vn/api/',
    timeout: 1000,
    headers: { TokenCybersoft: studentToken }
});

// Thêm một bộ đón chặn request
instance.interceptors.request.use((config) => {
    config.headers.TokenCybersoft = studentToken;
    const token = localStorage.getItem('TOKEN');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default instance;

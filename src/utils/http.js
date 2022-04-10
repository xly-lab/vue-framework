// http.js
import axios from 'axios';
const baseURL = '/';

const http = axios.create({
  baseURL,
});

// 请求拦截
http.interceptors.request.use(
  (config) => {
    // do something
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
// 返回拦截
http.interceptors.response.use(
  (response) => {
    // do something
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);
export default http;

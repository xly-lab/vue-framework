// http.js
import axios from 'axios';

axios.defaults.baseURL = '/';
// 请求拦截
axios.interceptors.request.use(
  (config) => {
    // do something
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
// 返回拦截
axios.interceptors.response.use(
  (response) => {
    // do something
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export function get(url, params) {
  return axios
    .get(url, {
      params,
    })
    .then((res) => {
      // do something
      return res.data;
    })
    .catch((e) => {
      console.log(e);
    });
}

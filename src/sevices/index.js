import http from '../utils/http';

const allApi = {
  getZhuanLan() {
    return http.get('/api/zhihuadmin', {});
  },
};

export default allApi;

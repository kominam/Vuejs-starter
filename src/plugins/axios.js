import axios from 'axios';
import * as apiEndpoint from '../../config/api';

export default {
  install(Vue) {
    window.axios = axios.create({
      baseURL: apiEndpoint.BASE_URL,
      timeout: 5000,
    });

    Object.defineProperty(Vue.prototype, '$http', { value: window.axios });
  },
};

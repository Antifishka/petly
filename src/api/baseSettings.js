import axios from 'axios';
// import { LOCALHOST_URL } from 'constants/urls';
import { HOST_URL } from 'constants/urls';

export const token = {
  set(token) {
    privateRoutes.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    privateRoutes.defaults.headers.common.Authorization = '';
  },
};

export const commonRoutes = axios.create({
  baseURL: LOCALHOST_URL,
});
// export const commonRoutes = axios.create({
//   baseURL: HOST_URL,
// });
export const privateRoutes = axios.create({
  baseURL: LOCALHOST_URL,
});
// export const privateRoutes = axios.create({
//   baseURL: HOST_URL,
// });

// privateRoutes.interceptors.request.use(config => {
//   const accessToken = localStorage.getItem('accessToken');
//   config.headers.common.authorization = `Bearer ${accessToken}`;
//   return config;
// });

privateRoutes.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status === 401) {
      const refreshToken = localStorage.getItem('refreshToken');

      try {
        const { data } = await privateRoutes.post('api/users/refresh', {
          refreshToken,
        });

        token.set(data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);

        return privateRoutes(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

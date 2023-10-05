import storage from '@/utils/storage';
import { notification } from 'antd';
import axios from 'axios';

const cancelTokenSource = axios.CancelToken.source();

const commonAxios = axios.create({
  baseURL: 'https://nurse-shift.shop/api',
  cancelToken: cancelTokenSource.token,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
commonAxios.interceptors.request.use(function (config): any {
  // eslint-disable-next-line valid-typeof
  if (typeof window === undefined) {
    return;
  }

  config.headers = Object.assign({}, config.headers, {
    'Content-Type': 'application/json',
    'Authorization ': storage.getToken(),
  });

  return config;
});

commonAxios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log(error);
    console.error('error', error?.response);
    const errorCode = String(error?.response?.status ?? '');

    if (errorCode === '401') {
      if (error.config.url !== '/auth/login')
        notification.error({
          key: 'error-notification',
          message: '토큰이 만료되었습니다. 로그인을 다시 해주세요.',
          description: errorCode,
          duration: 3,
        });
    } else if (errorCode === '403') {
      notification.error({
        key: 'error-notification',
        message: '권한이 없습니다.',
        description: errorCode,
        duration: 3,
      });
    } else {
      notification.error({
        key: 'error-notification',
        message: 'API 에러 발생',
        description: errorCode,
        duration: 3,
      });
    }
    return Promise.reject(error);
  }
);

export default commonAxios;

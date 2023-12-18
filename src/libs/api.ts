import axios, { AxiosError, AxiosResponse } from 'axios';
import { BASE_URL } from '@/constants/common';

export const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use(
  (config) => {
    // 요청 바로 직전
    return config;
  },
  (error: AxiosError) => {
    // 요청 에러 처리
    console.log(error.message);
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  function (response: AxiosResponse) {
    // 응답 바로 직전
    return response;
  },

  function (error: AxiosError) {
    // 응답 에러 처리
    console.log(error.message);
    return Promise.reject(error);
  },
);

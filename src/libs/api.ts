import { BASE_URL } from '@/constants/common';
import axios, { AxiosError, AxiosResponse } from 'axios';

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

export const instanceFiles = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
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

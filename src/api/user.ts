import { instance } from '@/libs/api';
import { SignFormValuesType } from '@/types/SignFormValue';
import axios, { AxiosError } from 'axios';

export const handleLogin = async (data: SignFormValuesType) => {
  try {
    const result = await axios.post('/api/login', data);
    //TODO: user 관리
    if (result.status === 201) {
      return true;
    }
  } catch (e: unknown) {
    if (e instanceof AxiosError) {
      alert(e.response?.data.message || e.message);
    }
    return false;
  }
};

export async function postSignup(data: SignFormValuesType) {
  try {
    const response = await instance.post('/users', data);
    if (response.status === 201) {
      alert('가입이 완료되었습니다.');
      return true;
    }
  } catch (e: unknown) {
    if (e instanceof AxiosError) {
      alert(e.response?.data.message || e.message);
    }
    return false;
  }
}

export async function getUsers() {
  const tokenResponse = await axios.post('/api/getToken');
  const token = tokenResponse.data;

  if (token) {
    const response = await instance({
      url: '/users/me',
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  }

  return;
}

import { instance, instanceFiles } from '@/libs/api';
import axios from 'axios';

export async function postProfileImage(body: FormData) {
  const tokenResponse = await axios.post('/api/getToken');
  const token = tokenResponse.data;

  if (token) {
    const response = await instanceFiles({
      method: 'POST',
      url: `/users/me/image`,
      data: body,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  }

  return;
}

export async function putPassword(password: string, newPassword: string) {
  const data = {
    password,
    newPassword,
  };

  const option = {
    endpoint: `/auth/password`,
    method: 'PUT',
    data: data,
  };

  const response = await axios.post('/api/withAuthHandler', option);

  return response.data;
}

export async function putUser(nickname: string, profileImageUrl: string) {
  const tokenResponse = await axios.post('/api/getToken');
  const token = tokenResponse.data;

  const data = {
    nickname,
    profileImageUrl,
  };

  if (token) {
    const response = await instance({
      url: '/users/me',
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    });

    return response.data;
  }

  return;
}

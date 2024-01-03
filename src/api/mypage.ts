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
  const tokenResponse = await axios.post('/api/getToken');
  const token = tokenResponse.data;

  const data = {
    password,
    newPassword,
  };

  if (token) {
    const response = await instance({
      url: '/auth/password',
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

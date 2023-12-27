import { instance } from '@/libs/api';
import { AxiosError } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  try {
    const result = await instance.post('/auth/login', req.body);

    if (result.status === 201) {
      const { accessToken } = result.data;
      res.setHeader('Set-Cookie', `accessToken=${accessToken}; path=/;`);
    }
    return res.status(result.status).json(result.data);
  } catch (e: unknown) {
    if (e instanceof AxiosError) {
      return res.status(e.response?.status || 404).json(e.response?.data);
    }
  }
}

import { instance } from '@/libs/api';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  try {
    const loginResult = await instance.post('/auth/login', req.body);
    const { accessToken, user } = loginResult.data;

    res.setHeader('Set-Cookie', `session=${accessToken}; path=/;`);
    res.status(200).json({ user });
  } catch (e) {
    res.status(400).send(e);
  }
}

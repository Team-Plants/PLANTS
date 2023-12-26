import { instance } from '@/libs/api';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  try {
    const loginResult = await instance.post('/auth/login', req.body);
    const { accessToken, user } = loginResult.data;

    res.setHeader('Set-Cookie', `session=${accessToken}; path=/;`);
    res.status(200).json({ user });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    res.status(404).send({ message: e.response.data.message });
  }
}

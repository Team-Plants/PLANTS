import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.setHeader('Set-Cookie', 'accessToken=; Path=/;');
  return res.status(200).json({ message: '로그아웃되었습니다. ' });
}

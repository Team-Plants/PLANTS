import { NextApiRequest, NextApiResponse } from 'next';

function getToken(req: NextApiRequest) {
  const token = req.cookies.accessToken;
  if (token) return token;
  return null;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const result: string | null = getToken(req);

  if (result) {
    return res.status(200).json(result);
  }

  return res.status(404).json('토큰이 없습니다. ');
}

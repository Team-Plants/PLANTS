import { instance } from '@/libs/api';
import { AxiosResponse } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

async function sendApiRequest(
  req: NextApiRequest,
  option: {
    endpoint: string;
    method: 'GET' | 'POST' | 'DELETE' | 'PUT';
  },
) {
  const token = req.cookies.accessToken;

  if (!token) {
    //TODO: redirect 처리
    //return NextResponse.redirect('http://localhost:3000/login');
  }

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const response: AxiosResponse = await instance({
    method: option.method,
    url: option.endpoint,
    headers,
  });

  return response;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const result: AxiosResponse = await sendApiRequest(req, req.body);

  return res.status(result.status).json(result.data);
}

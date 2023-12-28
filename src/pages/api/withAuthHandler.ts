import { instance } from '@/libs/api';
import { AxiosError, AxiosResponse } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

async function sendApiRequest(
  req: NextApiRequest,
  option: {
    endpoint: string;
    method: 'GET' | 'POST' | 'DELETE' | 'PUT';
    data: object;
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

  try {
    const response: AxiosResponse = await instance({
      method: option.method,
      url: option.endpoint,
      data: option.data,
      headers,
    });

    return response;
  } catch (e: unknown) {
    return e as AxiosError;
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const result: AxiosResponse | AxiosError = await sendApiRequest(
    req,
    req.body,
  );

  if (!(result instanceof AxiosError)) {
    return res.status(result.status).json(result.data);
  }

  console.log(result.response?.status);

  return res.status(result.response?.status || 404).json(result.response?.data);
}

import { instance } from '@/libs/api';
import { AxiosError, AxiosResponse } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export class AuthError extends Error {
  constructor(message: string, statusCode: number) {
    super(message);
    this.name = 'AuthError';
    this.statusCode = statusCode;
    this.isAuthError = true;
  }

  statusCode: number;
  isAuthError: boolean;
}

async function sendApiRequest(
  req: NextApiRequest,
  option: {
    endpoint: string;
    method: 'GET' | 'POST' | 'DELETE' | 'PUT';
    data?: object;
    params?: object;
  },
) {
  const token = req.cookies.accessToken;

  if (!token) {
    throw new AuthError('로그인이 필요합니다.', 404);
  }

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  try {
    const response: AxiosResponse = await instance({
      method: option.method,
      url: option.endpoint,
      data: option.data,
      params: option.params,
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
  try {
    const result: AxiosResponse | AxiosError = await sendApiRequest(
      req,
      req.body,
    );

    if (!(result instanceof AxiosError)) {
      return res.status(result.status).json(result.data);
    }

    return res
      .status(result.response?.status || 404)
      .json(result.response?.data);
  } catch (error) {
    if (error instanceof AuthError) {
      return res.status(error.statusCode).json({
        message: error.message,
        isAuthError: error.isAuthError,
      });
    }
  }
}

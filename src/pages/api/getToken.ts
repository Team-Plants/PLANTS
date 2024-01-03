import { AxiosError } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export class AuthError extends AxiosError {
  constructor(message: string) {
    super(message);
    this.name = 'AuthError';
    this.isAuthError = true;
  }

  isAuthError: boolean;
}

export function getToken(req: NextApiRequest) {
  const token = req.cookies.accessToken;
  if (token) return token;
  throw new AuthError('로그인이 필요합니다.');
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const result: string | AxiosError = getToken(req);
    return res.status(200).json(result);
  } catch (error) {
    if (error instanceof AuthError) {
      return res.status(401).json({
        message: error.message,
        isAuthError: error.isAuthError,
      });
    }
  }
}

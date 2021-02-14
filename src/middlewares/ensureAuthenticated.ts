import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '../config/auth';

interface InterfaceTokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw Error('JWT token is missing 401');
  }

  const [, token] = authHeader.split(' ');

  try {
    const { secret } = authConfig.jwt;
    const decoded = verify(token, secret);

    const { sub } = decoded as InterfaceTokenPayload;

    request.user = {
      id: sub,
    };

    return next();
  } catch (error) {
    throw Error('JWT token is missing 401');
  }
}

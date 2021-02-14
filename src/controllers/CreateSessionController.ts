import { Router, Request, Response } from 'express';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import User from '../models/User';
import authConfig from '../config/auth';

const sessionController = Router();

sessionController.post('/', async (request: Request, response: Response) => {
  const { email, password } = request.body;

  const user = await User.findOne({ email });

  if (!user) {
    return response.status(401).json('Email or passwords incorrect.');
  }

  const passwordMatched = await compare(password, user.password);

  if (!passwordMatched) {
    return response.status(401).json('Email or passwords incorrect.');
  }

  const { secret, expiresIn } = authConfig.jwt;

  const token = sign({}, secret, {
    subject: user.id,
    expiresIn,
  });

  delete user.password;

  return response.json({ user, token });
});

export default sessionController;

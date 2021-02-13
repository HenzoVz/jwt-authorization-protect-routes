import { Router, Request, Response } from 'express';
import { hash } from 'bcryptjs';

import User from '../models/User';

const userRouter = Router();

userRouter.post('/', async (request: Request, response: Response) => {
  const { name, email, password } = request.body;

  try {
    const userExists = await User.findOne({ email: email });

    if (userExists) {
      return response.status(400).json('Email already exists.');
    }

    const hashedPassword = await hash(password, 8);

    const user = new User({
      name,
      email,
      password: hashedPassword
    });

    await user.save();

    delete user.password;

    return response.json(user);

  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default userRouter;

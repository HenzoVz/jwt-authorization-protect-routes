import { Router } from 'express';

import UserController from '../controllers/CreateUserController';

import '../database';

const routers = Router();

routers.use('/signup', UserController);

export default routers;

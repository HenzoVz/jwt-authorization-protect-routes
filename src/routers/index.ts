import * as dotenv from 'dotenv';

import { Router } from 'express';

import userController from '../controllers/CreateUserController';
import sessionController from '../controllers/CreateSessionController';

import '../database';

dotenv.config();

const routers = Router();

routers.use('/signup', userController);
routers.use('/sessions', sessionController);

export default routers;

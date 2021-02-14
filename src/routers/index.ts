import * as dotenv from 'dotenv';
dotenv.config()

import { Router } from 'express';

import userController from '../controllers/CreateUserController';
import sessionController from '../controllers/CreateSessionController';

import '../database';


const routers = Router();

routers.use('/signup', userController);
routers.use('/sessions', sessionController);

export default routers;

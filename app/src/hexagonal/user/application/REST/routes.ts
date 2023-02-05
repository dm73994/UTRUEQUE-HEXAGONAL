import express from 'express';
import { getUser, registerUser } from './controller';
 
export const userRouter: express.Router = express.Router();

userRouter.route('/')
    .get(getUser)
    .post(registerUser);

import express from 'express';
import { UserManager } from '../../domain/UserManager';
import { UserRepositoryDB } from '../../infrastructure/UserRepositoryDB';

const userRepositoryDB = new UserRepositoryDB();
const userManager = new UserManager(userRepositoryDB);

const registerUser = async (req: express.Request, res: express.Response) => {
    try {
        console.log(req.body)
        const data = userManager.registerUser(req.body);
        res.status(200).json({
            status: 200,
            user: data,
            message: "User registered"
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            user: undefined,
            message: error
        })
    }
}

const getUser = async (req: express.Request, res: express.Response) => {
    try {
        const data = userManager.authUser(req.body);
        console.log(data)
        res.status(200).json({
            status: 200,
            user: data,
            message: "User find"
        })
    } catch (error) {
        res.status(401).json({
            status: 401,
            user: undefined,
            message: error
        })
    }
}

export {
    registerUser,
    getUser
}
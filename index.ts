// Import the express in typescript file
import express from 'express';
import mongoose from 'mongoose';
import { userRouter } from './app/src/hexagonal/user/application/REST/routes';
 
// Initialize the express engine
const app: express.Application = express();
app.use(express.json());

// CONECTAR BASE DE DATOS
const url = "mongodb+srv://utrueque:Julian2k19@cluster0.pojhrfw.mongodb.net/UTrueque?retryWrites=true&w=majority";

mongoose.connect(url, {})
.then(() => {
    console.log("DB CONECTADA!!!!");
});

// Take a port 3000 for running server.
//app.use(express.json());
const port: number = 3000;

// Handling '/' Request
app.use('/api/v1/users', userRouter)

// Server setup
app.listen(port, () => {
    console.log(`TypeScript with Express http://localhost:${port}/`);
});


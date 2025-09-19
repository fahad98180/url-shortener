import express from 'express';
// import { userRoutes } from './src/api/v1/user-routs.js';
import {userRoutes }from './src/api/v1/user-routs.js';

import { error404 } from './utils/middleware/404.js';
import { connectToDB } from './utils/db/connection.js';
import cors from 'cors';
import dotenv from 'dotenv';
import { shortRoute } from './src/api/v1/url-short-routes.js';
const app=express();
app.use(cors({}));
dotenv.config();

app.use(express.json());  
app.use('/',userRoutes);
app.use('/',shortRoute)
app.use(error404); 
const promise=connectToDB();
promise.then(result=>{
    console.log('db connection created successfully ! ')


    const server = app.listen(1234, err =>{
    if(err){
        console.log('Server Crash',err);
    }
    else{
        console.log ('server up and running',server.address().port);
    }
 })



}).catch(err=>{
console.log('db connection fail ',err);
})








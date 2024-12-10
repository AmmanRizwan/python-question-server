import dotenv from 'dotenv'
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Router from './src/routes/code.routes.js';
dotenv.config();
const port = process.env.PORT;

// MongodB DataBase
const url = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@userdata.2vpcx.mongodb.net/${process.env.MONGODB_DB}?retryWrites=true&w=majority&appName=UserData`;

mongoose.connect(url)
.then(() => {console.log("DataBase is Connected...")})
.catch((error) => {console.log("Connection Failed..", error)});

// Express
const index = express();

index.use(cors(
  {
    origin: "http://localhost:3000",
    credentials: true,
  }
));

index.use(express.json());
index.use(express.urlencoded({extended:true}));
index.use('/api/userdata', Router);

index.get('/', (req, res) => {
  res.json({message: "Python Practice Server is Running"});
})

index.listen(port, () => console.log("Server is running"));
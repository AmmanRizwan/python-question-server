import dotenv from 'dotenv'
import express from 'express';
import cors from 'cors';
import connectDB from './src/config/code.model.js';
import Router from './src/routes/code.routes.js';
dotenv.config();
const port = process.env.PORT;

// MongodB DataBase
const url = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@userdata.2vpcx.mongodb.net/${process.env.MONGODB_DB}?retryWrites=true&w=majority&appName=UserData`;

// Express
const index = express();

index.use(cors());

index.use(express.json());
index.use(express.urlencoded({extended:true}));
index.use('/api/data', Router);

const startServer = async () => {
  try {
    await connectDB(url);
    index.listen(port, () => {
      console.log(`Server is running on port: http://localhost:${port}`);
    })
  }
  catch(err) {
    console.log("Server and DataBase Connection Failed");
  }
}

startServer();

import dotenv from 'dotenv'
import express from 'express';
import cors from 'cors';
import connectDB from './src/config/db.js';
import cookieParser from 'cookie-parser';
import UserRouter from './src/routes/user.routes.js';
import CodeRouter from './src/routes/code.routes.js';
import { protect } from './src/middleware/auth.middleware.js';
dotenv.config();
const port = process.env.PORT;

// MongodB DataBase
const url = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@userdata.2vpcx.mongodb.net/${process.env.MONGODB_DB}?retryWrites=true&w=majority&appName=UserData`;


// Express
const index = express();

index.use(cookieParser()); 
index.use(cors(
  {
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }
));
index.use(express.json());
index.use(express.urlencoded({extended:true}));
index.use('/api/data', protect, CodeRouter);
index.use('/api/users', UserRouter);

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

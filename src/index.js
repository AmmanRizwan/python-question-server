require('dotenv/config');
require('./config/code.config.js');
const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const Router = require('./routes/code.routes.js');
const port = process.env.PORT;

index = express();

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

module.exports.handler = serverless(index);
require('dotenv/config');
require('./config/code.config.js');
const express = require('express');
const cors = require('cors');
const port = process.env.PORT;
const Router = require('./routes/code.routes.js');

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

index.listen(port, () => console.log(`index is still running on port:${port}\nListening: http://localhost:${port}`));
const mongoose = require('mongoose');

const url = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@userdata.2vpcx.mongodb.net/${process.env.MONGODB_DB}?retryWrites=true&w=majority&appName=UserData`;

mongoose.connect(url)
.then(() => {console.log("DataBase is Connected...")})
.catch((error) => {console.log("Connection Failed..", error)});
import mongoose from 'mongoose';

const connectDB = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("Database is Connected...");
  }
  catch(err) {
    console.log("Error, Cannot Connected to the DataBase...", err);
  }
}

export default connectDB;

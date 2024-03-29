import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connection = {};

const connectDB = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const conn = await mongoose.connect(process.env.MONGO_URI);
    connection.isConnected = conn.connections[0].readyState;
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;

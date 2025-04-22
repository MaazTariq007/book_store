import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectionString = process.env.CONNECTION;

const connectToDb = async () => {
  try {
    const myConnection = await mongoose.connect(connectionString);
    console.log("Connected to the database");
    console.log(myConnection.connection.host); // Changed 'hostname' to 'host'
    console.log(myConnection.connection.name); // Database name
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export default connectToDb;

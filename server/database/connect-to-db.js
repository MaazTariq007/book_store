import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectionString = process.env.CONNECTION;
const connectToDb = () => {
  try {
    const myConnection = mongoose.connect(connectionString);
    console.log("yahan issue hai");
    // console.log(myConnection.connection.host);
    // console.log(myConnection.connection.name);

  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export default connectToDb;

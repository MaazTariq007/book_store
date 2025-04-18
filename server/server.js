import express from "express";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 3001;

const app = express();

app.use("api/v1/books" , );

app.listen(() => {
  console.log(`server is running is on port ${port}`);
});

import express from "express";
import dotenv from "dotenv";
import bookRouter from "./routes/book.js";

dotenv.config();
const port = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use("/api/v1/books", bookRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

import express from "express";
import {
  CreateBookById,
  DeleteBookById,
  getAllBookById,
  getAllBooks,
  UpdateBookById,
} from "../controllers/book-controller.js";

const bookRouter = express.Router();

bookRouter.route("/").get(getAllBooks).post(CreateBookById);
bookRouter
  .route("/:id")
  .get(getAllBookById)
  .put(UpdateBookById)
  .delete(DeleteBookById);

export default bookRouter;

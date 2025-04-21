import connectToDb from "../database/connect-to-db.js";
import Book from "../model/Book.js";

// ================================================
const getAllBooks = async (request, response) => {
  try {
    connectToDb();
    const books = await Book.find();
    response.status(200);
    response.json({
      success: true,
      count: books.length,
      data: books,
    });
  } catch (error) {
    response.status(404);
    throw new Error(error.message);
  }
};
// ================================================
const getAllBookById = async (req, res) => {
  try {
    connectToDb();
    const bookById = await Book.findById(request.params.id);

    if (bookById) {
      response.status(200);
      response.json({
        success: true,
        data: bookById,
      });
    } else {
      response.status(404);
      throw new Error("Book not found");
    }
  } catch (error) {
    response.status(404);
    throw new Error(error.message);
  }
};
// ================================================

const DeleteBookById = async (req, res) => {
  try {
    connectToDb();
    const bookToBeDeletedById = await Book.findById(request.params.id);

    if (bookToBeDeletedById) {
      await Book.findByIdAndDelete(request.params.id);
      response.status(200);
      response.json({
        success: true,
        msg: "Book deleted successfully",
      });
    } else {
      response.status(404);
      throw new Error("Book not found");
    }
  } catch (error) {
    response.status(404);
    throw new Error(error.message);
  }
};

// ================================================

const UpdateBookById = async (req, res) => {
  try {
    connectToDb();

    const bookToBeUpdatedById = await Book.findById(request.params.id);

    if (bookToBeUpdatedById) {
      await Book.findByIdAndUpdate(request.params.id, request.body);
      response.status(200);
      response.json({
        success: true,
        msg: "Book updated successfully",
      });
    } else {
      response.status(404);
      throw new Error("Book not found");
    }
  } catch (error) {
    response.status(404);
    throw new Error(error.message);
  }
};

// ================================================
const CreateBookById = async (req, res) => {
  try {
    const { title, author, price, publishDate } = request.body;

    if (!title || !author || !price || !publishDate) {
      response.status(404);
      throw new Error("All fields are required");
    }

    connectToDb();

    const newlyCreatedBook = await Book.create({
      title,
      author,
      price,
      publishDate,
    });
    responce.status(201);
    responce.json({
      success: true,
      msg: `Book Created Successfully `,
      newlycreatedBook,
    });
  } catch (error) {
    response.status(404);
    throw new Error(error.message);
  }
};

export {
  getAllBookById,
  getAllBooks,
  DeleteBookById,
  UpdateBookById,
  CreateBookById,
};

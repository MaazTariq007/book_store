const getAllBooks = (req, res) => {
  res.status(200).json({ msg: "get all books" });
};

const getAllBookById = (req, res) => {
  res.status(200).json({ msg: "get book by id" });
};

const DeleteBookById = (req, res) => {
  res.status(200).json({ msg: "delete by id" });
};

const UpdateBookById = (req, res) => {
  res.status(200).json({ msg: "update by id" });
};

const CreateBookById = (req, res) => {
  res.status(201).json({ msg: "book created" });
};

export {
  getAllBookById,
  getAllBooks,
  DeleteBookById,
  UpdateBookById,
  CreateBookById,
};

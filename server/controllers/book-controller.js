const getAllBooks = (request, response) => {
  response.status(200);
  response.json({
    msg: "get all books",
  });
};
// ==============================================
const getAllBookById = (request, response) => {
  response.status(200);
  response.json({
    msg: "get book by id",
  });
};
// ==============================================
const DeleteBookById = (request, response) => {
  response.status(200);
  response.json({
    msg: "delete by id",
  });
};
// ==============================================
const UpdateBookById = (request, response) => {
  response.status(200);
  response.json({
    msg: "update by id",
  });
};
// ==============================================
const CreateBookById = (request, response) => {
  response.status(201);
  response.json({
    msg: "update by id",
  });
};

import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    title: { type: String, require: true },
    author: { type: String, require: true },
    price: { type: Number, require: true },
    publishDate: { type: String, require: true },
  },
  {
    timeStamps: true,
  }
);

export default mongoose.model("Book", bookSchema);

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Create = () => {

  const InitFormData = {
    title: "",
    author: "", 
    price: "",
    publishDate: "",
  }

  const [formData, setFormData] = useState(
    InitFormData
  );
  const [loading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true)
      await axios.post("http://localhost:3000/api/v1/books/", formData);
      setFormData(InitFormData);
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }

  }

  return (
    <form
      onSubmit={handleOnSubmit}
      className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">
        Add a Book
      </h2>

      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
          Title
        </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full px-3 py-2 border rounded-lg shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:ring focus:ring-blue-400"
          placeholder="Enter title"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
          Author
        </label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
          className="w-full px-3 py-2 border rounded-lg shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:ring focus:ring-blue-400"
          placeholder="Enter author"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
          Price
        </label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          className="w-full px-3 py-2 border rounded-lg shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:ring focus:ring-blue-400"
          placeholder="Enter price"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
          Publish Date
        </label>
        <input
          type="date"
          name="publishDate"
          value={formData.publishDate}
          onChange={(e) => setFormData({ ...formData, publishDate: e.target.value })}
          className="w-full px-3 py-2 border rounded-lg shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:ring focus:ring-blue-400"
        />
      </div>

      <button
        disabled={loading}
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        {loading ? "loading..." : "submit"}
      </button>
    </form>
  );
};

export default Create;

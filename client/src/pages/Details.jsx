import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `http://localhost:3000/api/v1/books/${id}`
      );
      setData(response.data.data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteData = async () => {
    try {
      setIsLoading(true);
      await axios.delete(`http://localhost:3000/api/v1/books/${id}`);
      navigate("/");
    } catch (error) {
      console.error("Failed to delete data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!data) return <p className="text-center mt-10">No book found.</p>;

  return (
    <div className="h-screen w-screen grid place-items-center">
      <div className="max-w-xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg space-y-6">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
          {data.title}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 font-semibold">
          Author:{" "}
          <span className="text-gray-900 dark:text-white">{data.author}</span>
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 font-semibold">
          Price:{" "}
          <span className="text-green-600 dark:text-green-400">
            ${data.price}
          </span>
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Published:{" "}
          <span className="text-gray-800 dark:text-gray-100">
            {data.publishDate}
          </span>
        </p>

        <div className="grid grid-cols-2 gap-2">
          <button
            className="w-full sm:w-auto py-3 px-5 font-semibold bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-md transition duration-300"
            onClick={deleteData}
          >
            Delete
          </button>
          <button
            className="w-full sm:w-auto py-3 px-5 font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition duration-300"
            onClick={() => navigate(`/edit/${id}`)}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;

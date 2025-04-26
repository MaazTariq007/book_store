import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setIsLoading] = useState(false);

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(`http://localhost:3000/api/v1/books/${id}`);
            setData(response.data.data);
        } catch (error) {
            console.error("Failed to fetch data:", error);
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
        <div className="max-w-xl mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md space-y-4">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{data.title}</h1>
            <p className="text-gray-700 dark:text-gray-300">Author: {data.author}</p>
            <p className="text-gray-700 dark:text-gray-300">Price: ${data.price}</p>
            <p className="text-gray-700 dark:text-gray-300">Published: {data.publishDate}</p>
        </div>
    );
};

export default Details;

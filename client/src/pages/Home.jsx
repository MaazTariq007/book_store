import React, { useEffect, useState } from "react";
import Card from "../components/card";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/books/");
      setData(response.data.data); 
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-[90%] mx-auto my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {data.map((item) => (
        <Card key={item._id} item={item} />
      ))}
    </div>
  );
};

export default Home;

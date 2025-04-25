// GlobalContext.js
import React, { createContext, useState } from 'react';
import axios from "axios";
export const GlobalState = createContext();

const GlobalContext = ({ children }) => {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        price: '',
        publishDate: '',
    });

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:3000/api/v1/books/", formData);

    }


    return (
        <GlobalState.Provider value={{ formData, setFormData, handleOnSubmit }}>
            {children}
        </GlobalState.Provider>
    );
};

export default GlobalContext;

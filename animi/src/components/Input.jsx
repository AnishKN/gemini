import React, { useState } from 'react';
import { AiOutlineEnter } from "react-icons/ai";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Input({ onResponseData }) {
    const [data, setData] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsTyping(true);
        axios.post('http://localhost:5000/ask', { prompt: data })
            .then((response) => {
                onResponseData({ userMessage: data, botResponse: response.data.result });
            })
            .catch((error) => {
                toast.warning(error.response?.data.error || 'An error occurred');
                console.log(error.response?.data.error);
            })
            .finally(() => {
                setData("");
                setIsTyping(false);
            });
    };

    return (
        <div className="input-area p-4 bg-transparent flex justify-center" style={{background: "rgba(255, 255, 255, 0.2)",backdropFilter: "blur(10px)"}}>
            <ToastContainer />
            <form onSubmit={handleSubmit} className="flex items-center px-4 py-2 rounded-full max-w-2xl w-full">
                <input
                    type="text"
                    className="px-8 py-2 bg-gray-100 rounded-l-full text-gray-900 focus:outline-none focus:border-gray-300 w-full h-16"
                    placeholder="Type your message..."
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                />
                <button
                    type="submit"
                    className={`bg-gray-100 text-gray-900 px-8 py-2 rounded-r-full h-16 flex items-center justify-center transition-all ${isTyping ? 'cursor-not-allowed opacity-50' : ''}`}
                    disabled={isTyping}
                >
                    {/* Display spinner when typing */}
                    {isTyping ? (
                        <div className="w-6 h-6 border-4 border-t-4 border-gray-500 border-solid rounded-full animate-spin"></div>
                    ) : (
                        <AiOutlineEnter />
                    )}
                </button>
            </form>
        </div>
    );
}

export default Input;

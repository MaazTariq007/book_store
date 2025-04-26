import React from 'react';

const LoadingCards = () => {
    const skeletons = Array(8).fill(0); // Render 8 loading cards

    return (
        <div className="w-[90%] mx-auto my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {skeletons.map((_, index) => (
                <div
                    key={index}
                    className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 animate-pulse"
                >
                    <div className="h-6 bg-gray-300 rounded dark:bg-gray-700 mb-4 w-3/4"></div>
                    <div className="h-4 bg-gray-300 rounded dark:bg-gray-700 mb-3 w-1/2"></div>
                    <div className="h-4 bg-gray-300 rounded dark:bg-gray-700 mb-5 w-1/4"></div>
                    <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg w-24 h-8"></div>
                </div>
            ))}
        </div>
    );
};

export default LoadingCards;

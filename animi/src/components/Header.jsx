import React from 'react';

function Header() {
    const handleClick = () => {
        window.open("https://github.com/AnishKn/", "_blank");
    };

    return (
        <div className="header border-b border-gray-100 w-full flex justify-between items-center p-4 px-8 bg-white bg-opacity-30 backdrop-blur-md">
            <div className="flex items-center justify-center gap-1">
                <img className='h-8' src="/logo.png" alt="logo" />
                <h2 className="text-2xl font-bold text-gray-700">amini</h2>
            </div>
            <button
                className="bg-black px-6 py-2 rounded-2xl text-white hover:bg-gray-800"
                onClick={handleClick}
            >
                Github Code
            </button>
        </div>
    );
}

export default Header;

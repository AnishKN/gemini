import React, { useState, useEffect } from "react";
import Chat from "./components/Chat";
import Input from "./components/Input";
import Header from "./components/Header";

function App() {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => setHeight(window.innerHeight);

    // Set initial height
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const [chatMessages, setChatMessages] = useState([
    { message: "Hello! How can I help you today?", iconType: "bot" },
  ]);

  const handleUserMessage = ({ userMessage, botResponse }) => {
    // Append the user's message
    setChatMessages((prevMessages) => [
      ...prevMessages,
      { message: userMessage, iconType: "user" },
    ]);

    // Simulate bot response

    setChatMessages((prevMessages) => [
      ...prevMessages,
      { message: botResponse, iconType: "bot" },
    ]);
  };

  return (
    <>
      <div style={{ minHeight: `${height}px` }} className="flex flex-col bg-white">
        <Header />
        <div className="main flex-1 px-2 py-4 overflow-y-auto">
          <div className="sm:w-full md:w-[90%] lg:w-[60%] m-auto">
            {chatMessages.map((chat, index) => (
              <Chat
                key={index} // Ensure each message has a unique key
                iconType={chat.iconType}
                message={chat.message}
              />
            ))}
          </div>
        </div>
        <Input onResponseData={handleUserMessage} />
      </div>
    </>
  );
}

export default App;

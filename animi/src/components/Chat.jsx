import React from 'react';
import { FaInfinity } from "react-icons/fa";
import { LuUserSquare2 } from "react-icons/lu";
import { marked } from 'marked';

function Chat({ iconType, message }) {
  // Convert markdown to HTML
  const renderMessage = (message) => {
    return { __html: marked(message) };
  };

  return (
    <div className="bg-white flex gap-4 items-start p-4 border-b border-gray-50">
      <div className="icon text-gray-200 p-2 text-sm">
        {iconType === "bot" && <FaInfinity size={24} />}
        {iconType === "user" && <LuUserSquare2 size={24} />}
      </div>
      <div className="text-gray-800 w-full">
        {iconType === "bot" ? (
          <div
            className="prose"
            dangerouslySetInnerHTML={renderMessage(message)}
          />
        ) : (
          <p>{message}</p>
        )}
      </div>
    </div>
  );
}

export default Chat;

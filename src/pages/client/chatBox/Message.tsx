import React from 'react';
const Message = ({ message, isCurrentUser }) => {
  return (
    <div className={`mb-2 ${isCurrentUser ? 'text-right' : 'text-left'}`}>
      <div
        className={`inline-block px-3 py-2 rounded-lg ${
          isCurrentUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
        }`}
      >
        <div className="font-semibold text-xs">{message.sender}</div>
        <p className="text-sm">{message.content}</p>
        <div className="text-xs opacity-70 mt-1">
          {new Date(message.timestamp).toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};

export default Message;

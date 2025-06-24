import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import Message from '../../client/chatBox/Message';
import { MessageType } from '@/types/chatbox.type';
import { RootState } from '../../../redux/store';
import { useSelector } from 'react-redux';
const socket = io('http://localhost:8080');
const AdminChat = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [customersOnline, setCustomersOnline] = useState(0);
  const messagesEndRef = useRef(null);
  const user = useSelector((state: RootState) => state.auth.data);
  const [openChat, setOpenChat] = useState(false);
  useEffect(() => {
    // Xác định là admin khi kết nối
    socket.emit('identify', 'admin');
    // Lắng nghe tin nhắn mới
    socket.on('receiveMessage', message => {
      setMessages(prev => [...prev, message]);
    });
    // Load tin nhắn cũ
    fetchMessages();
    return () => {
      socket.off('receiveMessage');
    };
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch(`http://localhost:8080/messages`);
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };
  const handleSendMessage = e => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    const messageData = {
      _idUser: user?._id,
      sender: user?.username,
      content: newMessage,
      senderType: 'admin',
      recipientType: 'customer'
    };
    console.log('messageData', messageData);

    socket.emit('sendMessage', messageData);
    setMessages(prev => [...prev, { ...messageData, timestamp: new Date() }]);
    setNewMessage('');
  };
  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!openChat ? (
        <button
          onClick={() => setOpenChat(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow"
        >
          Chat với hỗ trợ
        </button>
      ) : (
        <div className="fixed bottom-4 right-4 w-80 border rounded-lg shadow-lg bg-white">
          <div className="p-3 bg-blue-600 text-white rounded-t-lg flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Customer Support</h3>
              <p className="text-xs">
                {customersOnline ? 'Admin is online' : 'Waiting for admin...'}
              </p>
            </div>
            <button
              onClick={() => setOpenChat(false)}
              className="text-white bg-blue-600 font-bold text-sm"
            >
              ✕
            </button>
          </div>

          <div className="p-3 h-64 overflow-y-auto">
            {messages.map((msg, i) => (
              <Message
                key={i}
                message={msg}
                isCurrentUser={msg.senderType === 'admin'}
              />
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSendMessage} className="p-4 border-t">
            <div className="flex">
              <input
                type="text"
                value={newMessage}
                onChange={e => setNewMessage(e.target.value)}
                className="flex-1 px-4 py-2 border rounded-l-lg"
                placeholder="Type your message..."
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-r-lg"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminChat;

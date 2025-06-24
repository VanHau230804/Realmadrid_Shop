import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import Message from './Message';
import { MessageType } from '@/types/chatbox.type';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { getMessages } from '../../../services/chatBox.Service';
const socket = io('http://localhost:8080');

const ChatBox = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [adminAvailable, setAdminAvailable] = useState(false);
  const [openChat, setOpenChat] = useState(false);
  const messagesEndRef = useRef(null);

  const auth = useSelector((state: RootState) => state.auth.data); // kiểm tra đăng nhập

  useEffect(() => {
    if (!openChat) return;

    socket.emit('identify', 'user');

    socket.on('receiveMessage', message => {
      setMessages(prev => [...prev, message]);
    });

    socket.on('adminAvailable', available => {
      setAdminAvailable(available);
    });

    fetchMessages();

    return () => {
      socket.off('receiveMessage');
      socket.off('adminAvailable');
    };
  }, [openChat]);

  const fetchMessages = async () => {
    try {
      const response = await getMessages();
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };
  const handleSendMessage = e => {
    e.preventDefault();
    if (!newMessage.trim() || !auth) return;
    const messageData = {
      _idUser: auth._id,
      sender: auth.username,
      content: newMessage,
      senderType: 'customer',
      recipientType: 'admin'
    };
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
        <div className="w-80 border rounded-lg shadow-lg bg-white">
          <div className="p-3 bg-blue-600 text-white rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Chat với hỗ trợ</h3>
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
                isCurrentUser={msg.senderType === 'customer'}
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
                placeholder={auth ? 'Nhập tin nhắn...' : 'Vui lòng đăng nhập'}
                disabled={!auth}
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-r-lg disabled:opacity-50"
                disabled={!auth}
              >
                Gửi
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
export default ChatBox;

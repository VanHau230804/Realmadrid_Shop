import axios from 'axios';
export const getMessages = async () => {
  try {
    const response = await axios.get('http://localhost:8080/messages');
    return response;
  } catch (error) {
    console.error('Error fetching messages:', error);
    throw error;
  }
};
export const sendMessage = async (messageData: {
  sender: any;
  content: string;
  senderType: string;
  recipientType: string;
}) => {
  try {
    const response = await axios.post(
      'http://localhost:8080/messages',
      messageData
    );
    return response;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};

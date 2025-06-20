import axios from 'axios';

export const uploadFile = async (data: FormData) => {
  try {
    const response = await axios.post('http://localhost:8080/upload', data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

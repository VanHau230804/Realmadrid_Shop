import axios from 'axios';

export const getCategory = async () => {
  try {
    const response = await axios.get('http://localhost:8080/categories');
    return response.data;
  } catch (error) {
    return error;
  }
};

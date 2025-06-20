import axios from 'axios';
export const getNews = async () => {
  try {
    const res = await axios.get('http://localhost:8080/news');
    return res.data;
  } catch (error) {
    return error;
  }
};
export const getNewsById = async (id: string) => {
  try {
    const res = await axios.get(`http://localhost:8080/news/${id}`);
    return res.data;
  } catch (error) {
    return error;
  }
};
export const addNews = async (data: FormData) => {
  try {
    const res = await axios.post('http://localhost:8080/news', data);
    return res.data;
  } catch (error) {
    return error;
  }
};
export const updateNews = async (id: string, data: FormData) => {
  try {
    const respone = await axios.put(`http://localhost:8080/news/${id}`, data);
    return respone.data;
  } catch (error) {
    return error;
  }
};
export const deleteNews = async (id: string) => {
  try {
    const res = await axios.delete(`http://localhost:8080/news/${id}`);
    return res.data;
  } catch (error) {
    return error;
  }
};

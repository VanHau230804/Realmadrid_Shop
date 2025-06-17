import axios from 'axios';
export const getKits = async () => {
  try {
    const response = await axios.get('http://localhost:8080/kits');
    return response.data;
  } catch (error) {
    return error;
  }
};
export const getKitByCategotyId = async (categoryId: string) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/kitcategory/${categoryId}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
export const getCategory = async () => {
  try {
    const response = await axios.get('http://localhost:8080/categories');
    return response.data;
  } catch (error) {
    return error;
  }
};
export const getKitById = async (kitId: string) => {
  try {
    const response = await axios.get(`http://localhost:8080/kit/${kitId}`);
    return response.data;
  } catch (error) {
    return error;
  }
};
export const addKit = async (data: FormData) => {
  try {
    const response = await axios.post('http://localhost:8080/kits', data);
    return response.data;
  } catch (error) {
    return error;
  }
};
export const updateKit = async (id: string, data: FormData) => {
  try {
    const respone = await axios.put(`http://localhost:8080/kit/${id}`, data);
    return respone.data;
  } catch (error) {
    return error;
  }
};
export const deleteKitById = async (id: string) => {
  try {
    const response = await axios.delete(`http://localhost:8080/kit/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

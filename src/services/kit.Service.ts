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

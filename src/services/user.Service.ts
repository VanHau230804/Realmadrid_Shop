import axios from 'axios';

export const getUserAll = async () => {
  try {
    const response = await axios.get('http://localhost:8080/accounts');
    return response.data;
  } catch (error) {
    return error;
  }
};
export const getUserById = async (id: string) => {
  try {
    const respone = await axios.get(`http://localhost:8080/user/${id}`);
    return respone.data;
  } catch (error) {
    return error;
  }
};
export const updateUser = async (id: string, data: FormData) => {
  try {
    const respone = await axios.put(`http://localhost:8080/user/${id}`, data, {
      headers: {
        // Không cần set 'Content-Type' thủ công ở đây
        // 'Content-Type': 'multipart/form-data' sẽ được Axios tự set
      }
    });
    return respone.data;
  } catch (error) {
    return error;
  }
};
export const deleteUser = async (id: string) => {
  try {
    const respone = await axios.delete(`http://localhost:8080/account/${id}`);
    return respone.data;
  } catch (error) {
    return error;
  }
};

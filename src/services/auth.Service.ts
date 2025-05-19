// import Http from '../helpers/http';
import { IAccount } from '@/types/user.type';
import axios from 'axios';
export const registerService = async (newAccount: IAccount) => {
  try {
    const response = await axios.post(
      'http://localhost:8080/accounts',
      newAccount
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
export const login = async (data: IAccount) => {
  try {
    const response = await axios.post('http://localhost:8080/login', data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const logoutService = async () => {
  try {
    const response = await axios.post('/auth/logout');
    return response.data;
  } catch (error) {
    return error;
  }
};

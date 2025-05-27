import { Order } from './../types/order.type';
import axios from 'axios';
export const createOrder = async (data: Order) => {
  try {
    const response = await axios.post('http://localhost:8080/orders', data);
    return response.data;
  } catch (error) {
    return error;
  }
};

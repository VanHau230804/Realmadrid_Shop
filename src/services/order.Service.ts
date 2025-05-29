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
export const getOrderByIdUser = async (userId: string) => {
  try {
    const response = await axios.get(`http://localhost:8080/orders/${userId}`);
    return response.data;
  } catch (error) {
    return error;
  }
};
export const getOrderAll = async () => {
  try {
    const response = await axios.get('http://localhost:8080/orders');
    return response.data;
  } catch (error) {
    return error;
  }
};
export const deleteOrderById = async (orderId: string) => {
  try {
    const response = await axios.delete(
      `http://localhost:8080/orders/${orderId}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

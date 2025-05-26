import axios from 'axios';
import { ICartItem } from '../types/cart.type';

export const getCart = async () => {
  try {
    const response = await axios.get('http://localhost:8080/carts');
    return response.data;
  } catch (error) {
    return error;
  }
};
export const getCartByUserId = async (userId: string) => {
  try {
    const response = await axios.get(`http://localhost:8080/cart/${userId}`);
    return response.data;
  } catch (error) {
    return error;
  }
};
export const addCart = async (data: ICartItem) => {
  try {
    const response = await axios.post('http://localhost:8080/carts', data);
    return response.data;
  } catch (error) {
    return error;
  }
};
export const updateCart = async (
  cartId: string, // Sử dụng _id của giỏ hàng
  itemId: string, // _id của item cần cập nhật
  newQuantity: number
) => {
  try {
    const response = await axios.put(
      `http://localhost:8080/cart/${cartId}/items/${itemId}`,
      {
        quantity: newQuantity
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error updating cart item:', error);
    throw error;
  }
};

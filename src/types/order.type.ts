import { OrderStatus } from '../constants/define';
export interface Order {
  _id: string;
  userId: string;
  items: {
    _id: string;
    name: string;
    images: { url: string }[];
    quantity: number;
    categoryID: string;
    price: number;
    size?: { _id: string; label: string };
  }[];
  shippingAddress?: {
    fullName: string;
    phone: number;
    address: string;
  };
  totalAmount: number;
  note?: string;
  status: OrderStatus;
  cancelledReason?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

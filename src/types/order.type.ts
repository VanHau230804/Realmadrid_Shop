import { OrderStatus } from '../constants/define';

export interface Order {
  _id: string;
  user: string;
  items: {
    _id: string;
    name: string;
    images: { url: string }[];
    quantity: number;
    categoryID: string;
    price: number;
    size: { _id: string; label: string };
  };
  shippingInfo: {
    fullName: string;
    phone: number;
    address: string;
    email: string;
  };
  totalPrice: number;
  status: OrderStatus;
  note: string;
  cancelReason?: string;
}

// src/types/order.ts
export interface OrderItem {
  productId: number;
  name: string;
  price: number;
  quantity: number;
  total: number;
}

export interface Order {
  _id: string;
  fullName: string;
  phone: string;
  email: string;
  address: string;
  orderDate: string;
  status: 'pending' | 'processing' | 'shipping' | 'completed' | 'cancelled';
  paymentMethod: string;
  isPaid: boolean;
  items: OrderItem[];
  subtotal: number;
  shippingFee: number;
  totalAmount: number;
  notes?: string;
}

export interface OrderStatsData {
  monthlyRevenue: {
    month: string;
    revenue: number;
  }[];
  statusDistribution: {
    name: string;
    value: number;
  }[];
  topProducts: {
    id: number;
    name: string;
    sku: string;
    image: string;
    soldQuantity: number;
    revenue: number;
    percentage: number;
  }[];
}

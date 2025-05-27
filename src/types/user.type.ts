export interface User {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  role: 'admin' | 'user' | 'editor';
  status: 'active' | 'inactive' | 'suspended';
  createdAt: string;
  lastLogin?: string;
  orderStatus?: {
    totalOrders: number;
    completed: number;
    processing: number;
    cancelled: number;
  };
}

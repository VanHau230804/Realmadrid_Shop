import { ROLE, STATUS } from '../../src/constants/define';
export interface User {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  role: ROLE[];
  isActive: 'active' | 'inactive' | 'disabled';
  createdAt: string;
  lastLogin?: string;
  orderStatus?: {
    totalOrders: number;
    completed: number;
    processing: number;
    cancelled: number;
  };
}

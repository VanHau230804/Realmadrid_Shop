// src/pages/orders/OrderManagementPage.tsx
import { useState } from 'react';
import {
  FaSearch,
  FaFilter,
  FaFileExport,
  FaPlus,
  FaChartLine
} from 'react-icons/fa';
import OrderList from '../order/components/OrderList';
import OrderStats from '../order/components/OrderStats';
import Button from '../../../components/common/Button';
import { generateOrderStats } from '../order/components/ts/fakeData';

const OrderManagementPage = () => {
  const [activeTab, setActiveTab] = useState<'list' | 'status'>('list');
  const [searchTerm, setSearchTerm] = useState('');

  // Generate fake data
  const statsData = generateOrderStats();

  // Filter orders based on search term
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6 mt-20">
        <h1 className="text-2xl font-bold text-blue-800">Quản Lý Đơn Hàng</h1>
        <div className="flex space-x-3">
          <Button
            onClick={() =>
              setActiveTab(activeTab === 'list' ? 'status' : 'list')
            }
            icon={<FaChartLine className="mr-2" />}
            variant="secondary"
          >
            {activeTab === 'list' ? 'Xem Thống Kê' : 'Xem Danh Sách'}
          </Button>
          <Button
            onClick={() => console.log('Tạo đơn hàng mới')}
            icon={<FaPlus className="mr-2" />}
          >
            Tạo Đơn Hàng
          </Button>
        </div>
      </div>
      {/* Search and Filter Bar */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm theo mã đơn, tên khách hàng hoặc SĐT..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex gap-2">
            <Button icon={<FaFilter className="mr-2" />} variant="secondary">
              Bộ lọc
            </Button>
            <Button
              icon={<FaFileExport className="mr-2" />}
              variant="secondary"
            >
              Xuất Excel
            </Button>
          </div>
        </div>
      </div>
      {/* Main Content */}
      {activeTab === 'list' ? <OrderList /> : <OrderStats data={statsData} />}
    </div>
  );
};

export default OrderManagementPage;

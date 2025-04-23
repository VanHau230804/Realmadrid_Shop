import { FiUsers, FiBox, FiShoppingCart } from 'react-icons/fi';
import { Newspaper } from '@mui/icons-material';
const HomeAdmin = () => {
  const orders: Order[] = [
    {
      id: '#ORD-001',
      customer: 'Nguyễn Văn A',
      date: '12/04/2023',
      amount: '1,250,000đ',
      status: 'pending'
    },
    {
      id: '#ORD-002',
      customer: 'Trần Thị B',
      date: '11/04/2023',
      amount: '2,450,000đ',
      status: 'processing'
    },
    {
      id: '#ORD-003',
      customer: 'Lê Văn C',
      date: '10/04/2023',
      amount: '3,750,000đ',
      status: 'completed'
    },
    {
      id: '#ORD-004',
      customer: 'Phạm Thị D',
      date: '09/04/2023',
      amount: '1,850,000đ',
      status: 'completed'
    },
    {
      id: '#ORD-005',
      customer: 'Hoàng Văn E',
      date: '08/04/2023',
      amount: '2,150,000đ',
      status: 'processing'
    }
  ];

  const users: User[] = [
    {
      name: 'Nguyễn Văn A',
      email: 'nguyenvana@example.com',
      joinDate: '12/04/2023'
    },
    {
      name: 'Trần Thị B',
      email: 'tranthib@example.com',
      joinDate: '11/04/2023'
    },
    { name: 'Lê Văn C', email: 'levanc@example.com', joinDate: '10/04/2023' },
    {
      name: 'Phạm Thị D',
      email: 'phamthid@example.com',
      joinDate: '09/04/2023'
    },
    {
      name: 'Hoàng Văn E',
      email: 'hoangvane@example.com',
      joinDate: '08/04/2023'
    }
  ];
  interface Order {
    id: string;
    customer: string;
    date: string;
    amount: string;
    status: 'pending' | 'processing' | 'completed';
  }

  interface User {
    name: string;
    email: string;
    joinDate: string;
  }
  const getStatusClass = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  return (
    <main className="p-6 mt-20">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center">
            <h3 className="text-gray-600 font-medium">Tổng User</h3>
            <div className="p-3 rounded-full bg-blue-100 text-blue-800">
              <FiUsers className="text-xl" />
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-3xl font-bold text-blue-800">1,254</h2>
            <p className="text-gray-500 text-sm">+12% so với tháng trước</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center">
            <h3 className="text-gray-600 font-medium">Tổng Sản phẩm</h3>
            <div className="p-3 rounded-full bg-green-100 text-green-800">
              <FiBox className="text-xl" />
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-3xl font-bold text-blue-800">542</h2>
            <p className="text-gray-500 text-sm">+8% so với tháng trước</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center">
            <h3 className="text-gray-600 font-medium">Tổng Tin tức</h3>
            <div className="p-3 rounded-full bg-yellow-100 text-yellow-800">
              <Newspaper className="text-xl" />
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-3xl font-bold text-blue-800">78</h2>
            <p className="text-gray-500 text-sm">+5% so với tháng trước</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center">
            <h3 className="text-gray-600 font-medium">Tổng Đơn hàng</h3>
            <div className="p-3 rounded-full bg-red-100 text-red-800">
              <FiShoppingCart className="text-xl" />
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-3xl font-bold text-blue-800">1,025</h2>
            <p className="text-gray-500 text-sm">+15% so với tháng trước</p>
          </div>
        </div>
      </div>
      {/* Tables Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-blue-800">
              Đơn hàng mới nhất
            </h3>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Xem tất cả
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Mã đơn
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Khách hàng
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ngày đặt
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tổng tiền
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Trạng thái
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Hành động
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {orders.map(order => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {order.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.customer}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${getStatusClass(
                          order.status
                        )}`}
                      >
                        {order.status === 'pending' && 'Đang chờ'}
                        {order.status === 'processing' && 'Đang xử lý'}
                        {order.status === 'completed' && 'Hoàn thành'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 space-x-2">
                      <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-xs">
                        Chi tiết
                      </button>
                      {order.status !== 'completed' && (
                        <button className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-xs">
                          Hủy
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Users */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-blue-800">
              User mới nhất
            </h3>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Xem tất cả
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tên
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ngày đăng ký
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Hành động
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {user.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.joinDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-xs">
                        Chi tiết
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};
export default HomeAdmin;

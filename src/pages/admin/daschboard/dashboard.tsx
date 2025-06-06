import { FiUsers, FiBox, FiShoppingCart } from 'react-icons/fi';
import { Newspaper } from '@mui/icons-material';
import { getOrderAll } from '../../../services/order.Service';
import { getUserAll } from '../../../services/user.Service';
import { useState, useEffect } from 'react';
import { formatDateTime } from '../../../helpers/convertDatetime';
import { formatDate } from '../../../helpers/convertDatetime';
import { Link } from 'react-router-dom';
const HomeAdmin = () => {
  const [orderItem, setOrder] = useState([]);
  const [userItem, setUser] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    const dataOrders = async () => {
      try {
        const respone = await getOrderAll();
        const responeUser = await getUserAll();
        setUser(responeUser);
        setOrder(respone);
      } catch (error) {
        setError('Không thể tải danh sách gói khám. Vui lòng thử lại sau.');
        return error;
      }
    };
    dataOrders();
  }, []);
  if (error) {
    return <div>{'Không thể lấy dữ liệu'}</div>;
  }
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'shipping':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  return (
    <main className="p-6 mt-20">
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
                    Thời gian đặt
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
                {orderItem.map((order, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      M-ORD {index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.shippingInfo.fullName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDateTime(order.updatedAt)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.totalPrice}$
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${getStatusBadge(
                          order.status
                        )}`}
                      >
                        {order.status === 'pending' && 'Đang chờ'}
                        {order.status === 'shipping' && 'Đang giao'}
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
            <Link
              to={'/admin/users'}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Xem tất cả
            </Link>
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
                {userItem.map((user, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {user.fullName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(user.createdAt)}
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

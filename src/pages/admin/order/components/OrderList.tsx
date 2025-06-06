// src/components/orders/OrderList.tsx
import { FaEye, FaEdit, FaTrash, FaTruck, FaCheck } from 'react-icons/fa';
// import { Order } from '../components/ts/order';
import Badge from '../../../../components/common/Badge';
import Pagination from '../../../../components/common/Pagination';
import ConfirmModal from '../../../../components/common/ConfirmModal';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getOrderAll,
  deleteOrderById
} from '../../../../services/order.Service';
import { toast } from 'react-toastify';
import { Order } from '../../../../types/order.type';
const OrderList = () => {
  const [order, setOrder] = useState<Order>([]);
  console.log(order);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [getId, setOrderId] = useState([]);
  const navigate = useNavigate();
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge color="green">Hoàn thành</Badge>;
      case 'shipping':
        return <Badge color="yellow">Đang giao</Badge>;
      case 'cancelled':
        return <Badge color="red">Đã hủy</Badge>;
      default:
        return <Badge color="gray">Chờ xác nhận</Badge>;
    }
  };
  const getPaymentBadge = (order: { status: string }) => {
    if (order?.status === 'completed') {
      return <Badge color="green">Đã thanh toán</Badge>;
    } else {
      return <Badge color="yellow">Chưa thanh toán</Badge>;
    }
  };
  useEffect(() => {
    const dataOrder = async () => {
      try {
        const res = await getOrderAll();
        setOrder(res);
      } catch (error) {
        return error;
      }
    };
    dataOrder();
  }, []);
  const handleDeleteOrder = async (id: string) => {
    await deleteOrderById(id);
    setOrder(order => order.filter(order => order._id !== id));
    toast.success('Xóa thành công ');
  };
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Mã đơn hàng
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
                Thanh toán
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Thao tác
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {order.map((order, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                  M-ORD{index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {order.shippingInfo.fullName}
                  </div>
                  <div className="text-sm text-gray-500">
                    {order.shippingInfo.phone}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(order.createdAt).toLocaleDateString('vi-VN')}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {order.totalPrice.toLocaleString('vi-VN')}₫
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getStatusBadge(order.status)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getPaymentBadge({ status: order.status })}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                  <button className="text-blue-600 hover:text-blue-900 p-1">
                    <FaEye title="Xem chi tiết" />
                  </button>
                  <button
                    className="text-yellow-600 hover:text-yellow-900 p-1"
                    onClick={() => navigate(`/admin/orders/edit/${order._id}`)}
                  >
                    <FaEdit title="Chỉnh sửa" />
                  </button>
                  {order.status === 'shipping' && (
                    <button className="text-green-600 hover:text-green-900 p-1">
                      <FaTruck title="Đang giao" />
                    </button>
                  )}
                  {order.status === 'completed' && (
                    <button className="text-green-600 hover:text-green-900 p-1">
                      <FaCheck title="Hoàn thành đơn hàng" />
                    </button>
                  )}
                  <button
                    className="text-red-600 hover:text-red-900 p-1"
                    disabled={
                      order.status !== 'completed' &&
                      order.status !== 'cancelled'
                    }
                    onClick={() => {
                      setOrderId(order._id);
                      setShowDeleteModal(true);
                    }}
                  >
                    <FaTrash title="Xóa đơn hàng" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ConfirmModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={() => {
          handleDeleteOrder(getId);
          setShowDeleteModal(false);
        }}
        title="Xác nhận xóa người dùng"
        message="Bạn có chắc chắn muốn xóa người dùng này? Hành động này không thể hoàn tác."
        confirmText="Xóa"
        cancelText="Hủy"
      />
      {/* Pagination */}
      {/* <div className="px-6 py-4 border-t border-gray-200">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div> */}
    </div>
  );
};

export default OrderList;

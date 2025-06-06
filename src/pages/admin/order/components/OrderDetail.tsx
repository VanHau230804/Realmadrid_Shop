import Badge from '../../../../components/common/Badge';
import Pagination from '../../../../components/common/Pagination';
import { getOrderById, updateOrder } from '../../../../services/order.Service';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  FaArrowLeft,
  FaEdit,
  FaSave,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';
import Input from '../../../../components/input/Input';
import Button from '../../../../components/common/Button';
import Select from '../../../../components/select';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Order } from '../../../../types/order.type';
import { toast } from 'react-toastify';
const schema = yup.object().shape({
  status: yup.string().nullable().required('Vui lòng chọn trạng thái')
});
const EditOrder = () => {
  const {
    handleSubmit,
    formState: { isValid },
    control,
    reset,
    setValue,
    watch,
    register
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });
  const [order, setOrder] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const status = watch('status');

  const statusOptions = [
    { value: 'pending', label: 'Chờ xác nhận' },
    { value: 'shipping', label: 'Đang giao hàng' },
    { value: 'completed', label: 'Đã giao hàng' },
    { value: 'cancelled', label: 'Đã hủy' }
  ];
  useEffect(() => {
    if (status === 'cancelled') {
      alert('Nhập lý do huỷ đơn hàng');
    }
  }, [status]);
  useEffect(() => {
    if (!id) return;
    const dataOrder = async () => {
      try {
        const res = await getOrderById(id);
        if (res) {
          setOrder(res);
          setValue('status', res.status);
        }
      } catch (error) {
        return error;
      }
    };
    dataOrder();
  }, [id, setValue]);
  const handleSave: SubmitHandler<Order> = async data => {
    if (!isValid) return;
    setLoading(true);
    try {
      const formData = {
        ...order,
        status: data.status || order.status
      };
      console.log('Sending data:', formData);

      const res = await updateOrder(id, formData);
      setOrder(res);
      console.log('Order updated:', res);
      navigate('/admin/orders');
      setEditing(false);
      reset();
    } catch (err) {
      console.log('Cập nhật không thành công', err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center mb-6 mt-20">
        <Button
          onClick={() => navigate('/admin/orders')}
          variant="secondary"
          icon={<FaArrowLeft className="mr-2 " />}
          className="mr-4 "
        >
          Quay lại
        </Button>
        <h1 className="text-2xl font-bold text-blue-800">
          Chi tiết đơn hàng của {order?.shippingInfo?.fullName}
        </h1>
      </div>

      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6">
          <p>{error}</p>
        </div>
      )}

      <div className="bg-white shadow rounded-lg overflow-hidden mb-6">
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Thông tin khách hàng
              </h2>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-gray-500">Họ và tên</p>
                  <p className="text-gray-900">
                    {order?.shippingInfo?.fullName}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 flex items-center">
                    <FaPhone className="mr-2 text-gray-400" /> Số điện thoại
                  </p>
                  <p className="text-gray-900">{order?.shippingInfo?.phone}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 flex items-center">
                    <FaMapMarkerAlt className="mr-2 text-gray-400" /> Địa chỉ
                  </p>
                  <p className="text-gray-900">
                    {order?.shippingInfo?.address}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Thông tin đơn hàng
              </h2>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Ngày đặt hàng
                  </p>
                  <p className="text-gray-900">
                    {new Date(order?.createdAt).toLocaleString('vi-VN')}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Trạng thái
                  </p>
                  <Select
                    name="status"
                    control={control}
                    options={statusOptions}
                  />
                  {status === 'cancelled' && (
                    <Input
                      {...register('cancelReason')}
                      placeholder="Nhập lý do huỷ đơn hàng"
                      className="input-class"
                    />
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Tổng tiền</p>
                  <p className="text-xl font-bold text-blue-800">
                    {order?.totalPrice}₫
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Sản phẩm đã đặt
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Sản phẩm
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Size
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Đơn giá
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Số lượng
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Thành tiền
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {order?.items?.map((item, index) => (
                  <tr key={`${order?._id}-${index}`}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-16 w-16">
                          <img
                            className="h-16 w-16 rounded"
                            src={item.images?.[0]?.url}
                            alt={item.name}
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {item.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            SKU: {item._id}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.size?.[0]?.label}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.price}₫
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.quantity}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {/* chỉ hiển thị tổng giá ở hàng đầu tiên */}
                      {index === 0 ? `${order?.totalPrice}₫` : ''}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-500">Ghi chú</h3>
            <p className="mt-1 text-sm text-gray-900">{order.note}</p>
          </div>
        </div>

        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-end space-x-3">
          <>
            <Button
              onClick={() => navigate('/admin/orders')}
              variant="secondary"
            >
              Hủy
            </Button>
            <Button
              onClick={handleSubmit(handleSave)}
              icon={<FaSave className="mr-2" />}
            >
              Lưu thay đổi
            </Button>
          </>
        </div>
      </div>
    </div>
  );
};

export default EditOrder;

// src/s/users/EditUser.tsx
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft, FaSave } from 'react-icons/fa';
import Button from '../../../components/common/Button';
import Input from '../../../components/input/Input';
import Select from '../../../components/select';
import { getUserById, updateUser } from '../../../services/user.Service';
import { SubmitHandler, useForm } from 'react-hook-form';
import { User } from '../../../types/user.type';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
const schema = yup.object().shape({
  fullName: yup.string().trim().nullable(),
  email: yup.string().nullable(),
  phone: yup.string().trim().nullable(),
  role: yup.string().nullable().required('Vui lòng chọn role'),
  isActive: yup.string().nullable().required('Vui lòng chọn trạng thái'),
  address: yup.string().trim().nullable()
});
const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const {
    handleSubmit,
    formState: { isValid },
    control,
    reset,
    setValue
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!id) return;
    const fetchUser = async () => {
      try {
        setLoading(true);
        const user = await getUserById(id);
        if (user[0]) {
          setUser(user);
          setValue('fullName', user[0].fullName);
          setValue('email', user[0].email);
          setValue('phone', user[0].phone);
          setValue('address', user[0].address);
          setValue('role', user[0].role[0]);
          setValue('isActive', user[0].isActive);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, [id, setValue]);

  const roleOptions = [
    { value: 'admin', label: 'Admin' },
    { value: 'user', label: 'User' }
  ];

  const statusOptions = [
    { value: 'active', label: 'Hoạt động' },
    { value: 'inactive', label: 'Không hoạt động' },
    { value: 'disabled', label: 'Tạm khóa' }
  ];
  const handleUpdate: SubmitHandler<User> = async data => {
    if (!isValid) return;
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('fullName', data.fullName || user?.fullName || '');
      formData.append('email', data.email || user?.email || '');
      formData.append('phone', data.phone || user?.phone || '');
      formData.append('address', data.address || user?.address || '');
      formData.append('role', data.role || user?.role[0] || '');
      formData.append('isActive', data.isActive || user?.isActive || '');
      const res = await updateUser(String(id), formData);
      if (res.errors) {
        console.error('Cập nhật người dùng thất bại');
      } else {
        toast.success('Cập nhật người dùng thành công', {
          position: 'top-right'
        });
        navigate('/admin/users');
        reset();
      }
    } catch (error) {
      console.error('Lỗi xảy ra trong quá trình cập nhật', error);
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center mb-6 mt-20">
        <Button onClick={() => navigate('/admin/users')} className="mr-4">
          <FaArrowLeft className="mr-2" />
          Quay lại
        </Button>
        <h1 className="text-2xl font-bold text-blue-800">
          Chỉnh Sửa Người Dùng
        </h1>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <form
          onSubmit={handleSubmit(handleUpdate)}
          encType="multipart/form-data"
          className="p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              name="fullName"
              type="text"
              control={control}
              placeholder="fullname"
            />
            <Input
              type="email"
              name="email"
              control={control}
              placeholder="Email"
            />

            <Input
              name="phone"
              type="text"
              placeholder="phonenumber"
              control={control}
            />

            <Input
              name="address"
              placeholder="address"
              control={control}
              type="text"
            />

            <Select
              placeholder="Vai trò"
              name="role"
              options={roleOptions}
              control={control}
            />
            <Select
              placeholder="Trạng thái"
              name="isActive"
              options={statusOptions}
              control={control}
            />
          </div>

          <div className="mt-8 flex justify-end space-x-3">
            <Button type="button" onClick={() => navigate('/admin/users')}>
              Hủy
            </Button>
            <Button
              type="submit"
              loading={loading}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              icon={<FaSave className="mr-2" />}
            >
              Lưu thay đổi
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;

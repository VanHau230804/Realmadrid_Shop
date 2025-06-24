import { useState, useEffect } from 'react';
import {
  FaEdit,
  FaTrash,
  FaEye,
  FaPlus,
  FaSort,
  FaSearch
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/common/Button';
import Badge from '../../../components/common/Badge';
import Pagination from '../../../components/common/Pagination';
import ConfirmModal from '../../../components/common/ConfirmModal';
import USER from '../../../types/user.type';
import { formatDate } from '../../../helpers/convertDatetime';
import { getUserAll, deleteUser } from '../../../services/user.Service';
import { toast } from 'react-toastify';
import SearchBar from '../../../components/SearchBar/searchbar';
const UserList = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<USER[]>();
  const [userId, setUserId] = useState();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [current, setCurrent] = useState(1);
  const itemsPerPage = 3;
  const totals = Math.ceil((user?.length || 0) / itemsPerPage);
  const indexOfLastItem = current * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = user?.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    const dataUsers = async () => {
      try {
        const respone = await getUserAll();
        setUser(respone);
      } catch (error) {
        return error;
      }
    };
    dataUsers();
  }, []);
  const handleDelete = async (id: string) => {
    await deleteUser(id);
    setUser(users => users.filter(user => user._id !== id));
    toast.success('Xóa gói người dùng thành công!');
  };
  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin':
        return 'blue';
      case 'editor':
        return 'purple';
      default:
        return 'gray';
    }
  };
  const getisActiveColor = (isActive: string) => {
    switch (isActive) {
      case 'active':
        return 'green';
      case 'inactive':
        return 'yellow';
      case 'disabled':
        return 'red';
      default:
        return 'gray';
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
  };
  // const filterUsers = user?.filter(
  //   user => user.fullName || user.email || user.role[0] || user.isActive
  // );
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-white rounded-lg shadow p-4 mb-6 mt-16">
        <div className="flex flex-col md:flex-row gap-4">
          <h1 className="text-2xl font-bold text-blue-800">
            Quản Lý Người Dùng
          </h1>
          <div className="relative flex-1">
            <FaSearch className="absolute left-[400px] top-1/2 transform -translate-y-1/2 text-gray-400" />
            <SearchBar value={searchTerm} onChange={handleChange} />
          </div>
          <div className="flex gap-2">
            <select className="bUser rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Tất cả vai trò</option>
              <option value="admin">Admin</option>
              <option value="editor">Editor</option>
              <option value="user">User</option>
            </select>

            <select className="bUser rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Tất cả trạng thái</option>
              <option value="active">active</option>
              <option value="inactive">inactive</option>
              <option value="disabled">disabled</option>
            </select>
            <Button
              onClick={() => navigate('/users/new')}
              icon={<FaPlus className="mr-2" />}
            >
              Thêm Người Dùng
            </Button>
          </div>
        </div>
      </div>

      {/* User Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  // onClick={() => handleSort('fullName')}
                >
                  <div className="flex items-center">
                    Tên
                    <FaSort className="ml-1 text-gray-400" />
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  // onClick={() => handleSort('role')}
                >
                  <div className="flex items-center">
                    Vai trò
                    <FaSort className="ml-1 text-gray-400" />
                  </div>
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  // onClick={() => handleSort('isActive')}
                >
                  <div className="flex items-center">
                    Trạng thái
                    <FaSort className="ml-1 text-gray-400" />
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Đơn hàng
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  // onClick={() => handleSort('createdAt')}
                >
                  <div className="flex items-center">
                    Ngày tạo
                    <FaSort className="ml-1 text-gray-400" />
                  </div>
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Hành động
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentItems?.map(user => (
                <tr key={user?._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold">
                        {user?.fullName?.charAt(0) || 'null'}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {user?.fullName || 'null'}
                        </div>
                        <div className="text-sm text-gray-500">
                          {user?.phone || 'null'}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user?.email || 'null'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge color={getRoleColor(user?.role[0])}>
                      {user?.role[0] === 'admin' && 'Admin'}
                      {user?.role[0] === 'editor' && 'Editor'}
                      {user?.role[0] === 'user' && 'User'}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge color={getisActiveColor(user.isActive)}>
                      {user?.isActive === 'active' && 'Hoạt động'}
                      {user?.isActive === 'inactive' && 'Không hoạt động'}
                      {user?.isActive === 'disabled' && 'Tạm khóa'}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {/* Tổng: {user?.UserStats.total} */}
                    </div>
                    <div className="text-xs text-gray-500">
                      {/* Hoàn thành: {user.UserStats.completed} */}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(user?.createdAt)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                    <button
                      onClick={() => navigate(`/users/${user?._id}`)}
                      className="text-blue-600 hover:text-blue-900 p-1"
                      title="Xem chi tiết"
                    >
                      <FaEye />
                    </button>
                    <button
                      onClick={() => navigate(`/admin/users/edit/${user?._id}`)}
                      className="text-yellow-600 hover:text-yellow-900 p-1"
                      title="Chỉnh sửa"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => {
                        setUserId(user?._id);
                        setShowDeleteModal(true);
                      }}
                      className="text-red-600 hover:text-red-900 p-1"
                      title="Xóa"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {currentItems?.length > 0 && (
          <div className="px-6 py-4 bUser-t bUser-gray-200">
            <Pagination
              currentPage={current}
              totalPages={totals}
              onPageChange={setCurrent}
            />
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      <ConfirmModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={() => {
          handleDelete(userId);
          setShowDeleteModal(false);
        }}
        title="Xác nhận xóa người dùng"
        message="Bạn có chắc chắn muốn xóa người dùng này? Hành động này không thể hoàn tác."
        confirmText="Xóa"
        cancelText="Hủy"
      />
    </div>
  );
};

export default UserList;

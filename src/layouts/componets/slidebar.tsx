import { FiUsers, FiBox, FiShoppingCart, FiLogOut } from 'react-icons/fi';
import { Dashboard, Settings, Newspaper, Forum } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { logoutAuth } from '../../redux/auth/authSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
const MenuDashboard = [
  {
    id: 1,
    name: 'Dashboard',
    path: '/admin',
    icon: Dashboard
  },
  {
    id: 2,
    name: 'Quản lý người dùng',
    path: '/admin/users',
    icon: FiUsers
  },
  {
    id: 3,
    name: 'Quản lý đơn hàng',
    path: '/admin/orders',
    icon: FiShoppingCart
  },
  {
    id: 4,
    name: 'Quản lý sản phẩm',
    path: '/admin/products',
    icon: FiBox
  },
  {
    id: 5,
    name: 'Quản lý danh mục',
    path: '/admin/categories',
    icon: Forum
  },
  {
    id: 6,
    name: 'Quản lý tin tức',
    path: '/admin/news',
    icon: Newspaper
  },
  {
    id: 7,
    name: 'Cài đặt',
    path: '/admin/install',
    icon: Settings
  }
];

const SlideBar = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logoutAuth());
    navigate('/');
  };

  return (
    <div className="w-64 bg-blue-800 text-white transition-all duration-300">
      <div className="p-5 bg-blue-700 text-center">
        <h3 className="text-xl font-semibold">Admin Dashboard</h3>
      </div>
      <nav className="mt-5">
        <ul>
          {MenuDashboard.length > 0 &&
            MenuDashboard.map((nav, index) => (
              <li
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`px-5 py-3  border-white ${
                  selectedIndex === index
                    ? 'bg-blue-700'
                    : 'text-gray-100 hover:bg-blue-600'
                }`}
              >
                <Link
                  to={nav.path}
                  className={`flex items-center ${
                    location.pathname === nav.path
                  } `}
                >
                  <nav.icon className="mr-3" />
                  <span>{nav.name}</span>
                </Link>
              </li>
            ))}
        </ul>
        <button
          onClick={handleLogout}
          className=" hover:bg-blue-600 bg-blue-800 px-5 py-3 w-full text-left flex items-center hover:text-gray-400"
        >
          <FiLogOut className="mr-3" />
          Đăng xuất
        </button>
      </nav>
    </div>
  );
};
export default SlideBar;

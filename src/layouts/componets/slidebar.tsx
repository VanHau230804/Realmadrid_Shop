import { FiUsers, FiBox, FiShoppingCart } from 'react-icons/fi';
import { Dashboard, Settings, Newspaper } from '@mui/icons-material';
const SlideBar = () => {
  return (
    <div className="w-64 bg-blue-800 text-white transition-all duration-300">
      <div className="p-5 bg-blue-700 text-center">
        <h3 className="text-xl font-semibold">Admin Dashboard</h3>
      </div>
      <nav className="mt-5">
        <ul>
          <li className="px-5 py-3 bg-blue-700 border-l-4 border-white">
            <a href="/admin" className="flex items-center">
              <Dashboard className="mr-3" />
              <span>Dashboard</span>
            </a>
          </li>
          <li className="px-5 py-3 hover:bg-blue-700 transition-colors duration-200">
            <a href="/admin/users" className="flex items-center">
              <FiUsers className="mr-3" />
              <span>Quản lý User</span>
            </a>
          </li>
          <li className="px-5 py-3 hover:bg-blue-700 transition-colors duration-200">
            <a href="#" className="flex items-center">
              <FiBox className="mr-3" />
              <span>Quản lý Sản phẩm</span>
            </a>
          </li>
          <li className="px-5 py-3 hover:bg-blue-700 transition-colors duration-200">
            <a href="#" className="flex items-center">
              <Newspaper className="mr-3" />
              <span>Quản lý Tin tức</span>
            </a>
          </li>
          <li className="px-5 py-3 hover:bg-blue-700 transition-colors duration-200">
            <a href="#" className="flex items-center">
              <FiShoppingCart className="mr-3" />
              <span>Quản lý Đơn hàng</span>
            </a>
          </li>
          <li className="px-5 py-3 hover:bg-blue-700 transition-colors duration-200">
            <a href="#" className="flex items-center">
              <Settings className="mr-3" />
              <span>Cài đặt</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default SlideBar;

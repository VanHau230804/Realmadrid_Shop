import { Outlet, Navigate } from 'react-router-dom';
import Topbar from './componets/topbar';
import SlideBar from './componets/slidebar';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';
import AdminChat from '../pages/admin/chatbox/chatBox';

const AdminLayout = () => {
  const auth = useSelector((state: RootState) => state.auth.data);
  if (!auth) {
    return <Navigate to="/" replace />;
  }
  if (!auth.role?.includes('admin')) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-red-500">
          Bạn không có quyền truy cập trang quản trị!
        </h1>
      </div>
    );
  }
  return (
    <main className="flex h-screen bg-gray-50">
      <SlideBar />
      <div className="flex-1 overflow-auto">
        <Topbar />
        <Outlet />
      </div>
      <div className="fixed bottom-0 right-0 p-4">
        <AdminChat />
      </div>
    </main>
  );
};

export default AdminLayout;

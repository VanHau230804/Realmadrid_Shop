import { Outlet } from 'react-router-dom';
import Topbar from './componets/topbar';
import SlideBar from './componets/slidebar';
const AdiminLayout = () => {
  return (
    <main className="flex h-screen bg-gray-50">
      <SlideBar />
      <div className="flex-1 overflow-auto ">
        <Topbar />
        <Outlet />
      </div>
    </main>
  );
};
export default AdiminLayout;

import Header from './componets/header';
import { Outlet } from 'react-router-dom';
import Footer from './componets/footer';
import Navbar from './componets/topbar';
const MainLayout = () => {
  return (
    <main className="overflow-x-hidden min-h-dvh">
      <Header />
      <Navbar />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default MainLayout;

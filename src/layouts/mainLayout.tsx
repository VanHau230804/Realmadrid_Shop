import Header from './componets/header';
import { Outlet } from 'react-router-dom';
import Footer from './componets/footer';
import ChatBox from '../pages/client/chatBox/chatbox';
const MainLayout = () => {
  return (
    <main className="overflow-x-hidden min-h-dvh">
      <Header />
      <div className="">
        <Outlet />
      </div>
      <Footer />
      <ChatBox />
    </main>
  );
};

export default MainLayout;

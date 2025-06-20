import { JSX, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import MainLayout from '../layouts/mainLayout';
import NotFoundPage from '../pages/client/404/NotFoundPage';
import PageToTopUtils from '../helpers/PageToTopUtils';
import HomePage from '../pages/client/home/HomePage';
import KitPage from '../pages/client/Kits/KitPage';
import HomePlayer from '../pages/client/shopbyplayer/PlayerPage';
import KitDetail from '../pages/client/Kits/component/KitDetail';
import LoginPage from '../pages/client/auth/LoginPage';
import RegisterPage from '../pages/client/auth/RegisterPage';
import ShoppingCart from '../pages/client/shoppingcart/ShoppingCart';
import News from '../pages/client/news/News';
// admin
import AdminLayout from '../layouts/adminLayout';
import HomeAdmin from '../pages/admin/daschboard/dashboard';
import userList from '../pages/admin/users/userList';
import EditUser from '../pages/admin/users/userEdit';
import OrderManagementPage from '../pages/admin/order/orderManagement';
import EditOrder from '../pages/admin/order/components/OrderDetail';
import ProductManagement from '../pages/admin/product/ProductManagement';
import EditProduct from '../pages/admin/product/components/EditProduct';
import AddProduct from '../pages/admin/product/components/AddProduct';
import NewsManagement from '../pages/admin/news/NewsManagement';
import AddNews from '../pages/admin/news/AddNews';
import EditNews from '../pages/admin/news/EditNews';
export interface IRouter {
  path: string;
  element: () => JSX.Element;
  title: string;
}

// Các route chính của client
const clientRouter: IRouter[] = [
  { path: '/', element: HomePage, title: 'HomePage' },
  { path: '/kits', element: KitPage, title: 'KitPage' },
  { path: '/kit/:id', element: () => <KitDetail />, title: 'KitDetail' },
  { path: '/players', element: HomePlayer, title: 'PlayerPage' },
  { path: '/news', element: News, title: 'NewsPage' },
  { path: '/shoppingcart', element: ShoppingCart, title: 'ShoppingCart' }
];
// Các route cho admin
const adminRouter: IRouter[] = [
  { path: '/admin', element: HomeAdmin, title: 'HomeAdmin' },
  { path: '/admin/users', element: userList, title: 'UserList' },
  { path: '/admin/users/edit/:id', element: EditUser, title: 'EditUser' },
  {
    path: '/admin/orders',
    element: OrderManagementPage,
    title: 'OrderManagement'
  },
  { path: '/admin/orders/edit/:id', element: EditOrder, title: 'EditOrder' },
  {
    path: '/admin/products/',
    element: ProductManagement,
    title: 'ProductManagement'
  },
  { path: '/admin/kit/edit/:id', element: EditProduct, title: 'EditProduct' },
  {
    path: '/admin/addproduct',
    element: () => <AddProduct />,
    title: 'AddProduct'
  },
  {
    path: '/admin/news',
    element: NewsManagement,
    title: 'NewsManagement'
  },
  {
    path: '/admin/addnews',
    element: AddNews,
    title: 'AddNews'
  },
  {
    path: '/admin/news/:id',
    element: EditNews,
    title: 'EditNews'
  }
];
// Các route cho auth
const authRouter: IRouter[] = [
  {
    path: '/login',
    element: () => <LoginPage onClose={() => {}} switchToRegister={() => {}} />,
    title: 'Đăng nhập tài khoản'
  },
  {
    path: '/register',
    element: () => <RegisterPage onClose={() => {}} switchToLogin={() => {}} />,
    title: 'Đăng ký tài khoản'
  }
];

// Gộp tất cả router để dùng cho title
const allRoutes = [...clientRouter, ...authRouter];

export default function AppRouter() {
  const location = useLocation();
  // Cập nhật title khi thay đổi đường dẫn
  useEffect(() => {
    const route = allRoutes.find(route => {
      const routePath = route.path.replace(/:\w+/g, '');
      return location.pathname.startsWith(routePath);
    });
    if (route && route.title) {
      document.title = route.title;
    } else {
      document.title = 'Trang không tồn tại';
    }
  }, [location]);

  return (
    <>
      <PageToTopUtils />
      <Routes>
        <Route element={<MainLayout />}>
          {clientRouter.map(route => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
        </Route>

        {/* Các route auth */}
        {authRouter.map(route => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        ))}

        {/* Các route admin */}
        <Route element={<AdminLayout />}>
          {adminRouter.map(route => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
        </Route>

        {/* Trang lỗi 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

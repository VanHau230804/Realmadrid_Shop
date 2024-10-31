import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import MainLayout from '../layouts/mainLayout';
import NotFoundPage from '../pages/client/404/NotFoundPage';
import PageToTopUtils from '../helpers/PageToTopUtils';
import HomePage from '../pages/client/home/HomePage';
import KitPage from '../pages/client/Kits/KitPage';
export interface IRouter {
  path: string;
  element: () => JSX.Element;
  title: string;
}

const clientRouter: IRouter[] = [
  {
    path: '/',
    element: HomePage,
    title: 'HomePage',
  },
  {
    path: '/kits',
    element: KitPage,
    title: 'KitPage',
  },
];

export default function AppRouter() {
  const location = useLocation();

  // hàm xử lý hiển thị document title
  useEffect(() => {
    const route = clientRouter.find(route => {
      const routePath = route.path.replace(/:\w+/g, '');
      return location.pathname.startsWith(routePath);
    });
    if (route && route.title) {
      document.title = route.title;
    }
  }, [location]);

  return (
    <>
      <PageToTopUtils />
      <Routes>
        <Route element={<MainLayout />}>
          {clientRouter.length > 0 &&
            clientRouter.map(route => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.element />}
              />
            ))}
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
}

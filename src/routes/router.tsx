import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import NotFoundPage from "../pages/client/404/NotFoundPage";
import PageToTopUtils from "../helpers/PageToTopUtils";
import HomePage from "../pages/client/home/HomePage";
import KitPage from "../pages/client/Kits/KitPage";
import HomePlayer from "../pages/client/shopbyplayer/PlayerPage";
import KitDetail from "../pages/client/Kits/component/KitDetail";
import LoginPage from "../pages/client/auth/LoginPage";
import RegisterPage from "../pages/client/auth/RegisterPage";
import ShoppingCart from "../pages/client/shoppingcart/ShoppingCart";
import News from "../pages/client/news/News";
export interface IRouter {
  path: string;
  element: () => JSX.Element;
  title: string;
}

const clientRouter: IRouter[] = [
  {
    path: "/",
    element: HomePage,
    title: "HomePage",
  },
  {
    path: "/kits",
    element: KitPage,
    title: "KitPage",
  },
  {
    path: "/kitdetail",
    element: KitDetail,
    title: "KitDetail",
  },
  {
    path: "/players",
    element: HomePlayer,
    title: "PlayerPage",
  },
  {
    path: "/news",
    element: News,
    title: "NewsPage",
  },
  {
    path: "/shoppingcart",
    element: ShoppingCart,
    title: "ShoppingCart",
  },
];
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const authRouter: IRouter[] = [
  {
    path: "/login",
    element: <LoginPage />,
    title: "Đăng nhập tài khoản",
  },
  {
    path: "/register",
    element: <RegisterPage />,
    title: "Đăng ký tài khoản",
  },
];

export default function AppRouter() {
  const location = useLocation();

  // hàm xử lý hiển thị document title
  useEffect(() => {
    const route = clientRouter.find((route) => {
      const routePath = route.path.replace(/:\w+/g, "");
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
            clientRouter.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.element />}
              />
            ))}
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
      </Routes>
    </>
  );
}

import React, { useState } from 'react';
import { FiUser, FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import LoginPage from '../../pages/client/auth/LoginPage';
import RegisterPage from '../../pages/client/auth/RegisterPage';
import InputSearch from '../../components/input/Search';
const Header = () => {
  const [modalType, setModalType] = useState<'login' | 'register' | null>(null);

  return (
    <>
      <header className="relative w-full block z-50">
        <div className="bg-header fixed flex justify-center w-full items-center text-sm leading-[1.3] border-b border-white px-2 lg:px-8 py-8 md:py-6 h-10 group hover:bg-white/[0.05] cursor-pointer font-semibold">
          <span className="h3 text-white font-semibold text-base">
            Sign up to become a Madridista and get 5% off your first purchase
          </span>
        </div>
        <div className="container-page"></div>
      </header>

      <section className="w-full bg-white pt-9 pb-5 relative block">
        <div className="container-page px-6 py-10 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F7nqb12anqb19%2F1Ydqcs7iaU2MIVTMMJodQQ%2F4527c3f91108020dc4cfbade03553780%2Flogo-oficial-store.png&w=128&q=75"
              alt="Logo"
              className="w-auto h-auto max-w-[150px]"
            />
          </Link>

          {/* Search */}
          <InputSearch />

          {/* Icons & Language */}
          <div className="flex items-center space-x-4 text-gray-700 relative">
            <div className="flex items-center space-x-1">
              <span>EN</span>
              <span className="text-gray-400">|</span>
              <span>USD</span>
            </div>
            <FiUser
              className="text-gray-700 w-5 h-5 cursor-pointer"
              onClick={() =>
                setModalType(modalType === 'login' ? null : 'login')
              }
            />
            <Link to="/shoppingcart">
              <FiShoppingCart className="text-gray-700 w-5 h-5 cursor-pointer" />
            </Link>

            {/* Login / Register Modal */}
            {modalType === 'login' && (
              <LoginPage
                onClose={() => setModalType(null)}
                switchToRegister={() => setModalType('register')}
              />
            )}
            {modalType === 'register' && (
              <RegisterPage
                onClose={() => setModalType(null)}
                switchToLogin={() => setModalType('login')}
              />
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="nav container-page mt-[-15px]">
          <ul className="flex justify-center items-center gap-8 text-gray-600 font-medium">
            <Link to="/kits" className="relative group">
              <span>Shop Kits</span>
            </Link>
            <Link to="#" className="relative group">
              <span>Accessories</span>
            </Link>
            <Link to="/players" className="relative group">
              <span>Achievements</span>
            </Link>
            <Link to="/news" className="relative group">
              <span>News</span>
            </Link>
            <Link to="#" className="relative group">
              <span>Contact</span>
            </Link>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Header;

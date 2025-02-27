import React, { useState } from "react";
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import LoginPage from "../../pages/client/auth/LoginPage";
import RegisterPage from "../../pages/client/auth/RegisterPage";

const Navbar: React.FC = () => {
  const [modalType, setModalType] = useState<"login" | "register" | null>(null);

  return (
    <section className="w-full bg-white pt-9 pb-5 relative block">
      <div className="container-page px-6 py-10 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src="https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F7nqb12anqb19%2F1Ydqcs7iaU2MIVTMMJodQQ%2F4527c3f91108020dc4cfbade03553780%2Flogo-oficial-store.png&w=128&q=75"
            alt="Logo"
            className="w-auto h-auto max-w-[150px]"
          />
        </Link>
        <div className="flex items-center bg-gray-100 rounded-xl px-4 py-2 w-2/5 h-[50px]">
          <FiSearch className="text-gray-500 mr-2 w-[30px] h-[35px]" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent w-full focus:outline-none"
          />
        </div>
        <div className="flex items-center space-x-4 text-gray-700 relative">
          <div className="flex items-center space-x-1">
            <span>EN</span>
            <span className="text-gray-400">|</span>
            <span>USD</span>
          </div>
          <FiUser
            className="text-gray-700 w-5 h-5 cursor-pointer"
            onClick={() => setModalType(modalType === "login" ? null : "login")}
          />
          <Link to="/shoppingcart">
            <FiShoppingCart className="text-gray-700 w-5 h-5 cursor-pointer" />
          </Link>
          {modalType === "login" && (
            <LoginPage
              onClose={() => setModalType(null)}
              switchToRegister={() => setModalType("register")}
            />
          )}
          {modalType === "register" && (
            <RegisterPage
              onClose={() => setModalType(null)}
              switchToLogin={() => setModalType("login")}
            />
          )}
        </div>
      </div>
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
            <span> News </span>
          </Link>
          <Link to="#" className="relative group">
            <span>Contact</span>
          </Link>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;

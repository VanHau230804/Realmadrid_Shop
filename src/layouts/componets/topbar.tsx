import React from 'react';
import { FiSearch, FiUser, FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
const Navbar: React.FC = () => {
  return (
    <section className=" w-full bg-white py-9 relative block">
      <div className=" container-page px-6 py-10 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src="https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F7nqb12anqb19%2F1Ydqcs7iaU2MIVTMMJodQQ%2F4527c3f91108020dc4cfbade03553780%2Flogo-oficial-store.png&w=128&q=75"
            alt="Logo"
            className="w-full auto"
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
        <div className="flex items-center space-x-4 text-gray-700">
          <div className="flex items-center space-x-1">
            <span>EN</span>
            <span className="text-gray-400">|</span>
            <span>USD</span>
          </div>
          <FiUser className="text-gray-700 w-5 h-5 cursor-pointer" />
          <FiShoppingCart className="text-gray-700 w-5 h-5 cursor-pointer" />
        </div>
      </div>
      <div className="nav container-page">
        <ul className="flex justify-center items-center gap-8 text-gray-600 font-medium">
          <Link to="/kits" className="relative group">
            <span>Kits</span>
          </Link>
          <Link to="" className="relative group">
            <span>Shop By Player</span>
          </Link>
          <Link to="" className="relative group">
            <span>Training</span>
          </Link>
          <Link to="" className="relative group">
            <span>Fashion</span>
          </Link>
          <Link to="" className="relative group">
            <span>Accessories</span>
          </Link>
          <Link to="" className="relative group">
            <span>Gift Guide</span>
          </Link>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;

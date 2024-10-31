// components/Header.tsx
import React from 'react';

const Header = () => {
  return (
    <header className=" relative w-full block z-50">
      <div className=" bg-header fixed flex justify-center w-full items-center text-sm leading-[1.3] border-b border-white px-2 lg:px-8 py-8 md:py-6 h-10 group hover:bg-white/[0.05] cursor-pointer font-semibold">
        <span className="h3 text-white font-semibold text-base ">
          Sign up to become a Madridista and get 5% off your first purchase
        </span>
      </div>
      <div className="container-page  "></div>
    </header>
  );
};

export default Header;

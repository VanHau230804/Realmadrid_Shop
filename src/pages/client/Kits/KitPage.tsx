import React from 'react';
import BannerKit from './component/Banner';
import KitHome from './component/KitHome';
import KitAway from './component/KitAway';
const KitPage = () => {
  return (
    <div className="kitpage">
      <BannerKit />
      <KitHome />
      <KitAway />
    </div>
  );
};

export default KitPage;

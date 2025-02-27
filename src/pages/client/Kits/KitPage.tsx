import React from "react";
import BannerKit from "./component/Banner";
import Kits from "./component/Kits";
const KitPage = () => {
  return (
    <div className="kitpage">
      <BannerKit />
      <Kits />
    </div>
  );
};

export default KitPage;

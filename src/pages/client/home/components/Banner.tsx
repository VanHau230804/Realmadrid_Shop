import React from 'react';
const Banner = () => {
  return (
    <section className="banner">
      <div className="section__banner">
        <div className="banner__list">
          <video
            className="w-full h-auto"
            id="banner-video"
            autoPlay
            muted
            loop
            playsInline
            data-keepplaying
          >
            <source
              src="https://www.realmadrid.com/sites/area-vip/videos/new-spot-area-vip-2024.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  );
};
export default Banner;

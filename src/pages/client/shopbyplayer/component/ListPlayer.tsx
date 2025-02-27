import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "../../../../components/icons/NextIcon";
import PrevArrow from "../../../../components/icons/BackIcon";
interface Player {
  id: number;
  image: string;
  number: number;
  name: string;
}

const players: Player[] = [
  {
    id: 1,
    image:
      "https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F7nqb12anqb19%2F5Inf2WIuoqbn1TmgVcq63K%2Faf289ccc33c724497079cbde209d51c5%2Fmilitao-_desktop.jpg&w=384&q=75",
    number: 3,
    name: "Militão",
  },
  {
    id: 2,
    image:
      "https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F7nqb12anqb19%2F3xMgAy66I1WR5lCCbY4x63%2Fc04388c4a4906156ea4949b4df77febe%2Fcarvajal_-_desktop.jpg&w=640&q=75",
    number: 4,
    name: "Alaba",
  },
  {
    id: 3,
    image:
      "https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F7nqb12anqb19%2F5Inf2WIuoqbn1TmgVcq63K%2Faf289ccc33c724497079cbde209d51c5%2Fmilitao-_desktop.jpg&w=384&q=75",
    number: 5,
    name: "Bellingham",
  },
  {
    id: 4,
    image:
      "https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F7nqb12anqb19%2F3xMgAy66I1WR5lCCbY4x63%2Fc04388c4a4906156ea4949b4df77febe%2Fcarvajal_-_desktop.jpg&w=640&q=75",
    number: 7,
    name: "Vinícius Jr",
  },
];

const ListPlayer: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="player py-8 relative">
      <div className="text-slate-600 text-center text-4xl md:text-7xl font-semibold mb-8">
        <span>Players for 2024/2025</span>
      </div>
      <Slider {...settings}>
        {players.map((player) => (
          <div key={player.id} className="p-4">
            <div
              className="rounded-lg shadow-lg flex flex-col items-center justify-end overflow-hidden"
              style={{
                backgroundImage: `url(${player.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "30rem",
              }}
            >
              <div className="bg-white bg-opacity-70 rounded-lg p-3 w-[60%] text-center mt-4">
                <span className="text-lg font-bold">
                  #{player.number} {player.name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ListPlayer;

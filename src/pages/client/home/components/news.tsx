import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
const awardsData = [
  {
    imgSrc:
      'https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--5a8be821-8ab5-4966-aacf-bb24e637c8b8/ND_BALON_DE_ORO_25_v3_1.app.webp?preferwebp=true&width=350',
    description:
      "Bellingham, Carvajal, Kroos, Mbappé, Rüdiger, Valverde, and Vini Jr. nominated for 2024 Ballon d'Or",
  },
  {
    imgSrc:
      'https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--5a8be821-8ab5-4966-aacf-bb24e637c8b8/ND_BALON_DE_ORO_25_v3_1.app.webp?preferwebp=true&width=350',
    description:
      "Real Madrid nominated for 2024 Ballon d'Or Men's Club of the Year award",
  },
  {
    imgSrc:
      'https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--5a8be821-8ab5-4966-aacf-bb24e637c8b8/ND_BALON_DE_ORO_25_v3_1.app.webp?preferwebp=true&width=350',
    description: "Ancelotti nominated for Best Coach at Ballon d'Or Awards",
  },
  {
    imgSrc:
      'https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--5a8be821-8ab5-4966-aacf-bb24e637c8b8/ND_BALON_DE_ORO_25_v3_1.app.webp?preferwebp=true&width=350',
    description: 'Lunin, candidate for 2024 Yashin Trophy',
  },
  {
    imgSrc:
      'https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--5a8be821-8ab5-4966-aacf-bb24e637c8b8/ND_BALON_DE_ORO_25_v3_1.app.webp?preferwebp=true&width=350',
    description: "Ancelotti nominated for Best Coach at Ballon d'Or Awards",
  },
  {
    imgSrc:
      'https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--5a8be821-8ab5-4966-aacf-bb24e637c8b8/ND_BALON_DE_ORO_25_v3_1.app.webp?preferwebp=true&width=350',
    description: 'Lunin, candidate for 2024 Yashin Trophy',
  },
];

const News = () => {
  return (
    <section className="container-page">
      <div className="flex justify-between text-slate-600 items-center">
        <h2 className=' text-[45px] py-8 font-normal"'>
          <span>NEWS</span>
        </h2>
        <Link to={''} className="text-[17px] py-8 ">
          Show more <ArrowForwardIcon className="text-slate-600 " />
        </Link>
      </div>
      <div className=" grid grid-cols-4 gap-6 p-6">
        {awardsData.map((award, index) => (
          <Link
            to={''}
            key={index}
            className="flex flex-col items-center space-y-2 rounded-lg hover:text-blue-700 overflow-hidden "
          >
            <img
              src={award.imgSrc}
              alt={`Award ${index + 1}`}
              className="w-full h-auto  hover:scale-110 duration-1000 "
            />
            <p className=" text-xl font-medium">{award.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};
export default News;

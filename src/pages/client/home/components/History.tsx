// import { Link } from 'react-router-dom';
const stats = [
  {
    icon: 'https://publish-p47754-e237306.adobeaemcloud.com/content/dam/common/statics/public-content/competition/football/SIGLOXX.app.svg?$Desktop$&wid=40&hei=40',
    number: 1,
    label: 'The Best Club of the 20th Century FIFA Trophy',
  },
  {
    icon: 'https://publish-p47754-e237306.adobeaemcloud.com/content/dam/common/statics/public-content/competition/football/34pl8szyvrbwcmfkuocjm3r6t-icon.app.svg?$Desktop$&wid=40&hei=40',
    number: 36,
    label: 'National Leagues',
  },
  {
    icon: 'https://publish-p47754-e237306.adobeaemcloud.com/content/dam/common/statics/public-content/competition/football/4oogyu6o156iphvdvphwpck10-icon.app.svg?$Desktop$&wid=40&hei=40',
    number: 15,
    label: 'European Cups',
  },
  {
    icon: 'https://publish-p47754-e237306.adobeaemcloud.com/content/dam/common/statics/public-content/competition/football/apdwh753fupxheygs8seahh7x-icon.app.svg?$Desktop$&wid=40&hei=40',
    number: 20,
    label: 'Spanish Cups',
  },
  {
    icon: 'https://publish-p47754-e237306.adobeaemcloud.com/content/dam/common/statics/public-content/competition/football/cmvff99i4w10udooqckzt8c2x-icon.app.svg?$Desktop$&wid=40&hei=40',
    number: 8,
    label: 'FIFA Club World Cups',
  },
  {
    icon: 'https://publish-p47754-e237306.adobeaemcloud.com/content/dam/common/statics/public-content/competition/football/sd8z02fe455z2fjvlxvxh0zo-icon.app.svg?$Desktop$&wid=40&hei=40',
    number: 13,
    label: 'Spanish Super Cups',
  },
  {
    icon: 'https://publish-p47754-e237306.adobeaemcloud.com/content/dam/common/statics/public-content/competition/football/a0f4gtru0oyxmpvty4thc5qkc_icon.app.svg?$Desktop$&wid=40&hei=40',
    number: 6,
    label: 'European Super Cups',
  },
  {
    icon: 'https://publish-p47754-e237306.adobeaemcloud.com/content/dam/common/statics/public-content/competition/football/COPA%20DE%20LA%20UEFA.app.svg?$Desktop$&wid=40&hei=40',
    number: 2,
    label: 'UEFA Cups',
  },
];

const HistoryPage = () => {
  return (
    <section className="container-page mx-auto py-20">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-2/5 pr-0 lg:pr-8">
          <div className="information__content h-full max-w-[556px] ">
            <h2 className="text-4xl legendary font-bold mb-10">
              A legendary track record
            </h2>
            <div className="max-w-4xl mx-auto py-7">
              <div className="grid grid-cols-2">
                {stats.map((stat, index) => (
                  <div key={index} className="flex  space-x-4">
                    <img
                      src={stat.icon}
                      alt={stat.label}
                      className="transform object-cover w-28 h-auto transition-all duration-500 hover:scale-75 mb-4 rounded-lg "
                    />
                    <div>
                      <h2 className="text-4xl font-bold text">{stat.number}</h2>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                      <div className="bg-blue-500 h-1 w-16 mt-1"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[60%] pl-0  mt-6 lg:mt-0 ">
          <div className="brighten__img">
            <img
              className="w-full rounded-xl "
              src="https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--8b61ca70-43f7-4be6-9c51-99888d45a26f/ND_SALA_JUNTAS_HE02463Thumb.app.webp?preferwebp=true&width=700"
              alt="brighten-up-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryPage;

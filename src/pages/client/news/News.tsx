import React from "react";

const articles = [
  {
    title: "Welcome to California",
    category: "Travels",
    date: "13.01.2022",
    author: "Anna Maria Doe",
    description:
      "Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat vulputate. Ut vulputate est non quam dignissim elementum.",
    image:
      "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--29c49a0c-390c-4a76-9311-300452827a41/ND_LIGA_J25_RM_GIRONA_ALEGRIA_VINICIUS_MODRIC_02_DB35394.app.webp?preferwebp=true&width=400",
  },
  {
    title: "Exhibition in Paris",
    category: "Art",
    date: "12.01.2022",
    author: "Hailey Frank",
    description:
      "Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet diam orci, nec ornare metus semper sed.",
    image:
      "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--c70a4ccb-cc16-4c3b-b8f1-9888a4c652c8/ND_LIGA_J25_RM_GIRONA_ALABA_DB35941.app.webp?preferwebp=true&width=400",
  },
  {
    title: "Mbappé hat-trick sends Madrid into Champions League last 16",
    category: "Business",
    date: "10.01.2022",
    author: "Joe Svan",
    description:
      "Curabitur tristique, mi a mollis sagittis, metus felis mattis arcu, non vehicula nisl dui quis diam.",
    image:
      "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--29c49a0c-390c-4a76-9311-300452827a41/ND_LIGA_J25_RM_GIRONA_ALEGRIA_VINICIUS_MODRIC_02_DB35394.app.webp?preferwebp=true&width=400",
  },
];

const LatestArticles = () => {
  return (
    <div className=" text-white py-10 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-8">Latest articles</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-full mx-auto">
        {articles.map((article, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row bg-gray-800 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={article.image}
              alt={article.title}
              className="md:w-1/2 w-full object-cover h-60 md:h-auto hover:opacity-80 transition duration-300"
            />
            <div className="p-6">
              <p className="text-sm text-gray-400 mb-1">{article.category}</p>
              <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
              <p className="text-sm text-gray-500 mb-4">
                Published {article.date} by {article.author}
              </p>
              <p className="text-gray-300">{article.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestArticles;

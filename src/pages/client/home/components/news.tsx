import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import { getNews } from '../../../../services/news.Service';
import { useEffect, useState } from 'react';

const News = () => {
  const [news, setNews] = useState([]);
  const selectNew = news.slice(0, 6);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const resNews = await getNews();
        setNews(resNews);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };
    fetchNews();
  }, []);
  return (
    <section className="container-page">
      <div className="flex justify-between text-slate-600 items-center">
        <h2 className=' text-[45px] py-8 font-normal"'>
          <span>NEWS</span>
        </h2>
        <Link to={'/news'} className="text-[17px] py-8 ">
          Show more <ArrowForwardIcon className="text-slate-600 " />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {selectNew.map(news => (
          <div
            key={news.id}
            className="border border-blue-100 rounded-lg overflow-hidden hover:shadow-lg transition duration-200"
          >
            <div className="h-48 bg-blue-100 overflow-hidden">
              <img
                src={`${news.images?.[0]?.url}`}
                alt={news.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-blue-800">
                  {news.name}
                </h3>
                <span className="text-xs text-blue-500 bg-blue-50 px-2 py-1 rounded">
                  {news.date}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                {news.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default News;

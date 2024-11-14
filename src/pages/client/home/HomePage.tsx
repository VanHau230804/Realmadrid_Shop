import Banner from './components/Banner';
import Shopkit from './components/ShopKits';
import News from './components/news';
import HistoryPage from './components/History';

const HomePage = () => {
  return (
    <div className="homepage">
      <Banner />
      <Shopkit />
      <HistoryPage />
      <News />
    </div>
  );
};

export default HomePage;

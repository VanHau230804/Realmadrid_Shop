import { getNews } from '../../../../services/news.Service';
import { getKits } from '../../../../services/kit.Service';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Shopkit = () => {
  const [products, setProducts] = useState([]);

  const topFour = products.slice(0, 4);
  console.log('Products:', products);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getKits();
        setProducts(response);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <section className="relative">
      <h1 className=" text-slate-600 text-center text-7xl py-8 font-semibold ">
        <Link to={'/kits'} className="hover:text-slate-600">
          SHOP KITS
        </Link>
      </h1>
      <div className="flex flex-wrap justify-center gap-4 bg-gray-600 h-auto py-14  ">
        {topFour.length > 0 &&
          topFour.map(product => (
            <Link
              to={`/kit/${product?._id}`}
              className="bg-white shadow-lg rounded-lg p-4 max-w-xs group overflow-hidden relative"
              key={product?._id}
            >
              <div className="transition-all aspect-square duration-500 transform group-hover:scale-75 relative">
                <img
                  src={product?.images[0]?.url}
                  alt={product?.name}
                  className="transform object-cover w-full h-auto transition-all duration-300 group-hover:scale-95 md:group-hover:w-80%]"
                />
                <div className=" gap-1 group-hover:flex absolute ">
                  {product?.size.map(size => (
                    <button
                      key={size._id}
                      className="hidden border group-hover:block rounded-full px-3 py-1 text-sm"
                    >
                      {size.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid content-end relative">
                <div className="text-gray-950 px-[4px] lg:px-[10px] py-[5px] h-full flex flex-col justify-end gap-3 w-full">
                  <div className="flex flex-wrap justify-start h-[50px] w-[90%]">
                    <span className="inline-flex items-center text-start font-bold text-gray-950 line-clamp-2 leading-6 tracking-tighter sm:text-lg group-hover:underline">
                      {product?.name}
                    </span>
                  </div>
                  <div className="items-center h-[65px] border-t border-gray-200 text-gray-950 font-bold w-full inline-flex pt-3">
                    <span className="flex flex-wrap items-center w-fit gap-2">
                      <span className="text-base tracking-normal">
                        {product?.price}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default Shopkit;

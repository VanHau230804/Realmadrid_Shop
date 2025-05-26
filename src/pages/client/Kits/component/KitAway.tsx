import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IKit, Category } from '../../../../types/kit.type';
import { getKitByCategotyId } from '../../../../services/kit.Service';
import { getCategory } from '../../../../services/kit.Service';

const KitAway = () => {
  const [kits, setKit] = useState<IKit[]>([]);
  const [categoryName, setCategoryName] = useState<Category | null>(null);
  console.log('Kit', kits);
  useEffect(() => {
    const fetchKits = async () => {
      const response = await getKitByCategotyId('680e38abc61eb57b22fd7329');
      const categoryResponse = await getCategory();
      const categoryName = categoryResponse.find(
        (category: Category) => category._id === '680e38abc61eb57b22fd7329'
      );
      setKit(response);
      setCategoryName(categoryName || null);
    };
    fetchKits();
  }, []);
  return (
    <section className="">
      <div className="md:flex gap-6 lg:p-16 px-4 py-8">
        <div className="md:w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {kits.length > 0 &&
            kits.map(kit => (
              <Link
                key={kit._id}
                to={`/kit/${kit._id}`}
                className="bg-white shadow-lg rounded-lg p-4 max-w-xs group overflow-hidden relative px-5 py-10"
              >
                <div className="transition-all aspect-square duration-500 transform group-hover:scale-75 relative">
                  <img
                    src={kit.images[0]?.url}
                    alt={kit.name}
                    className="transform object-cover w-full h-auto transition-all duration-300 group-hover:scale-95 md:group-hover:w-80%]"
                  />
                  <div className=" gap-1 group-hover:flex absolute ">
                    {kit.size.map(size => (
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
                        {kit.name}
                      </span>
                    </div>
                    <div className="items-center h-[65px] border-t border-gray-200 text-gray-950 font-bold w-full inline-flex pt-3">
                      <span className="flex flex-wrap items-center w-fit gap-2">
                        <span className="text-base tracking-normal">
                          ${kit.price}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
        <div className="md:w-[40%] rounded-md relative">
          <a href="/jerseys-kits/third">
            <img
              alt="Third Kits 24/25-desktop"
              loading="lazy"
              width="640"
              height="500"
              decoding="async"
              className="w-[93%] object-cover rounded-lg h-full md:aspect-[16/11] aspect-[5/7]"
              src="https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F7nqb12anqb19%2F1He0wag83iVro3wOlla1ZR%2F6fb6cb8e8768817154029160a580360d%2Fhome_desktop.jpg&w=640&q=75"
            />
            <div className="absolute bottom-0 p-6 sm:p-8 ">
              <span className="flex p-5 bg-white rounded-lg justify-between items-center">
                <h2 className="block font-primary text-black font-medium  text-sm ">
                  {categoryName?.name}
                </h2>
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
export default KitAway;

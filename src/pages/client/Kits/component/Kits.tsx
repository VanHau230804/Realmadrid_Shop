import { Link } from 'react-router-dom';
interface Product {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  sizes: string[];
}

// Mảng các sản phẩm
const products: Product[] = [
  {
    id: '1',
    name: 'Womens Home Shirt 24/25 White',
    price: '$125.00',
    imageUrl:
      'https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FRMCFYZ0063_01.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=384&q=50', // Thay bằng URL thực tế
    sizes: ['2XS', 'XS', 'S', 'M', 'L', 'XL', '2XL']
  },
  {
    id: '2',
    name: 'Infant Home Kit 24/25 White',
    price: '$90.00',
    imageUrl:
      'https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FRMCFYZ0067-01.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=384&q=50',
    sizes: ['2XS', 'XS', 'S', 'M', 'L', 'XL', '2XL']
  },
  {
    id: ' 3',
    name: 'Baby Home Kit 24/25 White',
    price: '$75.00',
    imageUrl:
      'https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FRMCFMZ0201-1.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=384&q=50',
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  }
];
const Kits = () => {
  return (
    <section className="">
      <div className="md:flex  space-y-4 lg:p-16 px-4 py-8">
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
                  Third Kits 24/25
                </h2>
              </span>
            </div>
          </a>
        </div>
        <div className="md:w-[80%] grid grid-cols-3 md:gap-2 gap-3">
          {products.length > 0 &&
            products.map(product => (
              <Link
                to="#"
                className="bg-white shadow-lg rounded-lg p-4 max-w-xs group overflow-hidden relative px-5 py-10"
                key={product.id}
              >
                <div className="transition-all aspect-square duration-500 transform group-hover:scale-75 relative">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="transform object-cover w-full h-auto transition-all duration-300 group-hover:scale-95 md:group-hover:w-80%]"
                  />
                  <div className=" gap-1 group-hover:flex absolute ">
                    {product.sizes.map(size => (
                      <button
                        key={size}
                        className="hidden border group-hover:block rounded-full px-3 py-1 text-sm"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="grid content-end relative">
                  <div className="text-gray-950 px-[4px] lg:px-[10px] py-[5px] h-full flex flex-col justify-end gap-3 w-full">
                    <div className="flex flex-wrap justify-start h-[50px] w-[90%]">
                      <span className="inline-flex items-center text-start font-bold text-gray-950 line-clamp-2 leading-6 tracking-tighter sm:text-lg group-hover:underline">
                        {product.name}
                      </span>
                    </div>
                    <div className="items-center h-[65px] border-t border-gray-200 text-gray-950 font-bold w-full inline-flex pt-3">
                      <span className="flex flex-wrap items-center w-fit gap-2">
                        <span className="text-base tracking-normal">
                          {product.price}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};
export default Kits;

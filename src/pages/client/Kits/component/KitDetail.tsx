import React from "react";
import { Link } from "react-router-dom";
interface Product {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  sizes: string[];
}

const products: Product[] = [
  {
    id: "1",
    name: "Womens Home Shirt 24/25 White",
    price: "$125.00",
    imageUrl:
      "https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FRMCFYZ0063_01.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=384&q=50", // Thay bằng URL thực tế
    sizes: ["2XS", "XS", "S", "M", "L", "XL", "2XL"],
  },
  {
    id: "2",
    name: "Infant Home Kit 24/25 White",
    price: "$90.00",
    imageUrl:
      "https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FRMCFYZ0067-01.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=384&q=50",
    sizes: ["2XS", "XS", "S", "M", "L", "XL", "2XL"],
  },
  {
    id: " 3",
    name: "Baby Home Kit 24/25 White",
    price: "$75.00",
    imageUrl:
      "https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FRMCFMZ0201-1.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=384&q=50",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: " 4",
    name: "Mens Home Authentic Shorts 24/25 White",
    price: "$70.00",
    imageUrl:
      "https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2Frmcfmz0196-01.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=384&q=50",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
];
const relatedImages = [
  "https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FRMCFIO0020_0.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=384&q=50",
  "https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2Frmcfmz0196-01.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=1200&q=75",
  "https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FRMCFYZ0061_01.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=384&q=50",
];
const KitsDetail: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <main className="container-page">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <img
              src="https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2Frmcfmz0196-01.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=1200&q=75"
              alt="Product"
              className="w-full rounded-md shadow-md"
            />
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-600">
              Shop Kits &gt; Home Shirt 24/25 White
            </p>
            <h2 className="text-3xl font-bold mt-2">Home Shirt 24/25 White</h2>
            <p className="text-xl font-semibold text-blue-700 mt-4">$175.00</p>
            <div className="mt-6">
              <h3 className="font-medium">Size:</h3>
              <div className="flex gap-2 mt-2">
                {["XS", "S", "M", "L"].map((size) => (
                  <button
                    key={size}
                    className="border px-4 py-2 rounded-md text-sm hover:bg-gray-100"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <h3 className="font-medium">Badge:</h3>
              <select className="mt-2 border rounded-md w-full p-2">
                <option value="none">None</option>
                <option value="ucl">Champions League Patch +$20</option>
                <option value="laliga">La Liga Patch +$15</option>
              </select>
              <p className="text-sm text-gray-600 mt-2">
                Personalized items will require an additional 3-4 business days.
              </p>
            </div>
            <button className="mt-6 w-full bg-blue-700 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-800">
              Add to Cart
            </button>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {relatedImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Related Product ${index + 1}`}
                  className="w-full h-44 object-cover rounded-md border border-black"
                />
              ))}
            </div>
          </div>
        </div>
        <section className="mt-12">
          <h3 className="text-4xl font-bold text-center">
            You might be interested in
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {products.length > 0 &&
              products.map((product) => (
                <Link
                  to="#"
                  className="bg-white shadow-lg rounded-lg p-4 max-w-xs group overflow-hidden relative"
                  key={product.id}
                >
                  <div className="transition-all aspect-square duration-500 transform group-hover:scale-75 relative">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="transform object-cover w-full h-auto transition-all duration-300 group-hover:scale-95 md:group-hover:w-80%]"
                    />
                    <div className=" gap-1 group-hover:flex absolute ">
                      {product.sizes.map((size) => (
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
        </section>
      </main>
    </div>
  );
};

export default KitsDetail;

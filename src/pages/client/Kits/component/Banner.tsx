const BannerKit = () => {
  return (
    <section className="bannerkit">
      <div className="relative w-full h-auto">
        <div className="absolute top-0 left-0 w-full h-full bg-cover z-0 bg-kit"></div>
        <div className="relative flex flex-col md:flex-row items-center justify-between p-10 md:p-16">
          <div className="md:w-1/2 flex justify-center items-center">
            <img
              src="https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F7nqb12anqb19%2F7sOEqpuuQvnQDZVw2KeszT%2F8a46a3a8918339c2ecdd3d46bbafa3dc%2Fallkits-desktop.jpg&w=750&q=75"
              alt="Real Madrid Kits"
              className="rounded-xl shadow-lg"
            />
          </div>
          <div className="text-section bg-white bg-opacity-80 rounded-lg p-8 md:w-2/4 absolute top-1/2 left-[70%] transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              Kits Real Madrid 2024/2025
            </h1>
            <p className="mt-4 text-lg text-gray-800">
              Apresentamos os equipamentos oficiais utilizados pelos jogadores
              do Real Madrid no Santiago Bernabéu e em todo o mundo. Para homem,
              mulher e jovem, personalize a sua camisola com o seu nome ou o
              nome do seu jogador preferido.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerKit;

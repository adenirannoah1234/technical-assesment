import { ArrowRightIcon } from './Icons';

const ShopWithCredpalSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="space-y-3 sm:space-y-4">
            <h3
              className="text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wider bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(to right, #1F23FF, #0080FF)',
              }}
            >
              SHOP WITH CREDPAL
            </h3>

            <h2 className="text-2xl sm:text-3xl md:text-[38px] lg:text-[42px] font-extrabold text-black leading-tight">
              Shopping, simplified
            </h2>

            <h4 className="text-sm sm:text-base md:text-lg font-light text-[#000000] leading-relaxed">
              One app to find, shop, and pay your way — CredPal connects you to
              the best brands, flexible payments, and real-time tracking of your
              favourite products, all in one place.
            </h4>

            <button className="bg-black h-[40px] sm:h-[45px] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full cursor-pointer font-semibold text-sm sm:text-base md:text-lg hover:bg-gray-800 transition-colors flex items-center space-x-2 group shadow-lg hover:shadow-xl">
              <span>Learn More</span>
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-xl">
              <div className="bg-[#F5F5F5] rounded-2xl pt-6 sm:pt-8 md:pt-12 px-4 sm:px-8 md:px-12 pb-0 overflow-hidden">
                <div className="relative h-56 sm:h-64 md:h-80 flex flex-col items-center justify-between">
                  <div className="flex items-center justify-center flex-1">
                    <img
                      src="/comapny.png"
                      alt="CredPal Shopping App"
                      className="w-full max-w-[200px] sm:max-w-xs md:max-w-sm object-contain drop-shadow-xl"
                    />
                  </div>

                  <div className="w-full flex items-end justify-center">
                    <img
                      src="/watch.png"
                      alt="CredPal Watch"
                      className="w-24 sm:w-32 md:w-40 lg:w-48 h-auto drop-shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopWithCredpalSection;

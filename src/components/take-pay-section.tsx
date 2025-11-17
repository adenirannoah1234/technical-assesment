import { ArrowRightIcon } from './Icons';

const TakePaySection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="relative flex items-center justify-center order-2 md:order-1">
            <div className="relative w-full max-w-xl">
              <div className="bg-[#F5F5F5] rounded-2xl p-6 sm:p-8 md:p-12">
                <div className="relative h-56 sm:h-64 md:h-80 flex items-center justify-center">
                  <div
                    className="relative z-20"
                    style={{
                      transform: 'rotate(10deg)',
                    }}
                  >
                    <img
                      src="/credit-ca.png"
                      alt="CredPal Card"
                      className="w-48 sm:w-56 md:w-64 lg:w-72 drop-shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4 order-1 md:order-2">
            <h3
              className="text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wider bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(to right, #1F23FF, #0080FF)',
              }}
            >
              CREPAL CARD
            </h3>

            <h2 className="text-2xl sm:text-3xl md:text-[38px] lg:text-[42px] font-extrabold text-black leading-tight">
              Take Pay in 4 anywhere
            </h2>

            <h4 className="text-sm sm:text-base md:text-lg font-light text-[#000000] leading-relaxed">
              Spread purchases from your favourite brands with Credpal. You can
              pay in 4 with your Credpal card anywhere mastercard is accepted.
            </h4>

            <button className="bg-black h-[40px] sm:h-[45px] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full cursor-pointer font-semibold text-sm sm:text-base md:text-lg hover:bg-gray-800 transition-colors flex items-center space-x-2 group shadow-lg hover:shadow-xl">
              <span>Learn More</span>
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TakePaySection;

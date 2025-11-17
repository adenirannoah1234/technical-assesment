import { ArrowRightIcon } from './Icons';

const GrowFasterSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#000000] leading-tight">
              Grow faster with
              <br />
              CredPal
            </h2>

            <p className="text-sm sm:text-base md:text-lg font-light text-[#000000] ">
              With CredPal, you turn interest into action. Offer flexible credit
              at checkout, increase sales and attract customers who spend more,
              all without taking on risk.
            </p>

            <button className="bg-black h-[40px] sm:h-[45px] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full cursor-pointer font-semibold text-sm sm:text-base md:text-lg hover:bg-gray-800 transition-colors flex items-center space-x-2 group shadow-lg hover:shadow-xl">
              <span>CredPal for Business</span>
              <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative w-full">
              <img
                src="/pos.png"
                alt="CredPal Business POS"
                className="w-full h-auto rounded-2xl md:rounded-r-2xl md:rounded-l-none object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowFasterSection;

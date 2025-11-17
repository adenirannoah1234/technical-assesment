import { ArrowRightIcon } from './Icons';

const Hero = () => {
  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{
        background:
          'linear-gradient(to right, #E8FCFF, #FCF8F0, #E6EBFE, #D9E8FF)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center min-h-[70vh] sm:min-h-[80vh]">
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.5rem] font-bold text-[#080857] max-w-[400px] leading-[1.1] tracking-tight">
              Payment at your Pace.
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#121212] leading-relaxed max-w-lg">
              Shop confidently and pay in 4 interest-free installments, in 30
              days, or over time — no hidden fees, no jargon. Just smarter
              payments.
            </p>

            <button className="bg-[#274FED] text-white px-6 sm:px-8 py-3 sm:py-4 font-semibold text-sm sm:text-base md:text-lg hover:bg-[#113EEE] transition-all duration-200 flex items-center space-x-2 group shadow-lg hover:shadow-xl rounded-full cursor-pointer h-[40px] sm:h-[45px]">
              <span>Get Started</span>
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="relative flex justify-center items-center py-4 sm:py-8">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md flex items-center">
              <div
                className="absolute z-20 -rotate-[12deg]"
                style={{
                  left: '-30px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                }}
              >
                <div style={{ transform: 'rotate(12deg)' }}>
                  <img
                    src="/Credit Card.png"
                    alt="CredPal Credit Card"
                    className="w-40 sm:w-48 md:w-56 lg:w-64 drop-shadow-2xl block"
                  />
                </div>
              </div>

              <img
                src="/phone.png"
                alt="CredPal Mobile App"
                className="relative z-10 w-full max-h-[400px] sm:max-h-[500px] md:max-h-[600px] object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

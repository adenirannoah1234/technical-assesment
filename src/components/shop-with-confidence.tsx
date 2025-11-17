const ShopWithConfidence = () => {
  const features = [
    {
      icon: '/Bag.svg',
      title: 'Pay Later',
      description:
        'Shop now and split your purchases into 4 interest-free payments.',
    },
    {
      icon: '/ArrowUpRight.svg',
      title: '0% Interest',
      description:
        'Shop now and split your purchases into 4 interest-free payments.',
    },
    {
      icon: '/CreditCard.svg',
      title: 'Build Credit',
      description: 'Seamless financial empowerment for your everyday lifestyle',
    },
  ];

  return (
    <section className="py-10 md:py-20 bg-[#F7F8FA]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black  mb-16 md:mb-20">
          Shop with confidence
        </h2>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col space-y-4">
              <div className="mb-2">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-12 h-12 md:w-14 md:h-14"
                />
              </div>

              <h3 className="text-xl md:text-2xl font-extrabold text-[#000000]">
                {feature.title}
              </h3>

              <p className="text-base md:text-lg font-light text-[#000000] leading-relaxed max-w-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopWithConfidence;

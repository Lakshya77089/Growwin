import officeImg from "/officeimage.svg"; // update path if needed

const Section2 = () => {
  return (
    <section className="relative w-full py-20 bg-[#F2F2F2] md:mt-0 -mt-50 [@media(min-width:768px)_and_(max-width:1023px)]:-mt-72 md:z-0 z-[20]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-[var(--font-poppins)]  font-medium text-[#2D2D2D]">
            Let&apos;s start
          </h2>
          <h2 className="text-4xl md:text-6xl font-[var(--font-poppins)]  font-medium text-[#2D2D2D]">
            with <span className="text-[#51367e]">Growwin Capital</span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Text */}
          <div className="text-gray-600 text-lg leading-relaxed font-[var(--font-poppins)]  font-medium space-y-4 order-2 lg:order-1">
            <p className="font-poppins-semibold text-justify">
              <span className="font-bold">Growwin Capital</span> provides a
              secure, transparent, and professionally managed Fixed Return
              Investment Plan aimed at delivering stable and predictable monthly
              income to investors. Our investment approach focuses on
              consistency, safety, and long-term financial growth. Funds
              entrusted to us are carefully allocated across diversified asset
              classes including forex, equities, cryptocurrency, and real estate
              to balance risk and optimize returns. Every investment is handled
              by an experienced team of financial professionals who apply
              advanced strategies, in-depth market analysis, and disciplined
              risk management practices. Growwin Capital is designed to support
              both new and experienced investors by offering reliable returns,
              clear reporting, and complete transparency at every step. Our goal
              is to make investing simple, dependable, and accessible while
              helping investors build a strong and sustainable monthly income
              stream with confidence and peace of mind.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative w-full h-[380px] md:h-full overflow-hidden rounded-[28px] order-1 lg:order-2">
            <img
              src={officeImg}
              alt="Office workspace"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;

import officeImg from "/officeimage.svg"; // update path if needed

const Section2 = () => {
  return (
    <section className="w-full py-20 bg-[#F2F2F2]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-[var(--font-poppins)]  font-medium text-[#2D2D2D]">
            Let&apos;s start
          </h2>
          <h2 className="text-4xl md:text-6xl font-[var(--font-poppins)]  font-medium text-[#2D2D2D]">
            with <span className="text-[#5b3fa3]">Growwin Capital</span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left Text */}
          <div className="text-gray-600 text-lg leading-relaxed font-[var(--font-poppins)]  font-medium space-y-4">
            <p className="font-poppins-semibold text-justify">
              <span className="font-bold">Our company</span> stands at the forefront of the investment industry,
              offering a unique blend of multi-level marketing and forex trading
              to deliver unmatched returns.
              We provide three investment plans—Basic, Classic, and
              Platinum—each designed to offer high returns tailored to the
              investor&apos;s needs.
              Users can invest in our platform with confidence, knowing that
              their funds are managed by a team of seasoned traders and
              financial analysts who leverage advanced trading strategies
              and market insights.
              We reinvest the money entrusted to us into the forex market,
              known for its potential for high returns, ensuring that our
              clients receive substantial and consistent earnings.
              Our company is dedicated to making investing accessible,
              profitable, and secure for everyone, fostering a community
              of investors who grow and thrive together.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative w-full h-[380px] md:h-full overflow-hidden rounded-[28px]">
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

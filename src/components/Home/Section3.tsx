import TopFeatureCards from "../cards/TopFeatureCards";

const Section2 = () => {
  return (
    <section className="w-full py-20 bg-[#F2F2F2]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center space-y-2">
          
          {/* Line 1 */}
          <h2 className="text-4xl md:text-6xl font-[var(--font-poppins)]  font-medium text-[#2D2D2D]">
            Trade &amp; Invest from Any
          </h2>

          {/* Line 2 */}
          <h2 className="text-4xl md:text-6xl font-[var(--font-poppins)]  font-medium text-[#2D2D2D]">
            <span className="text-[#5b3fa3]">Growwin</span> Platform!
          </h2>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-500 font-[var(--font-poppins)]  font-regular">
            Your all-in one AI-powered trading experience designed for accuracy,
            speed, and better decision
          </p>

        </div>
        <TopFeatureCards/>
      </div>
    </section>
  );
};

export default Section2;

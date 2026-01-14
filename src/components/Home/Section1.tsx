import heroBg from "/image.svg";

const Section1: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-white">
      {/* Background Image (IMG behaving like background) */}
      <img
        src={heroBg}
        alt="Growwin background"
        className="
          absolute inset-0
          w-full h-full
          object-center
          z-0
          object-cover
          pointer-events-none
          opacity-80
        "
      />

      {/* Content Wrapper */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-4xl md:text-7xl font-jost-semibold text-white-offset tracking-wide ">
            GROWWIN CAPITAL
          </h1>

          <p className="mt-1 text-lg md:text-2xl font-jost-regular text-[#5E4B8B]">
            Smart Investing for a Smarter Future
          </p>

          <div className="mt-6 flex items-center justify-center gap-4 text-sm md:text-lg text-[#6A5C9C]">
            <span className="font-jost-regular" >Simple</span>
            <span>|</span>
            <span className="font-jost-regular">Stable Returns</span>
            <span>|</span>
            <span className="font-jost-regular">Safe</span>
          </div>

          <button
            className="
              mt-3
              px-8 py-2
              rounded-lg
              bg-[#4B2C82]
              text-white
              font-poppins-regular
              transition-all
              hover:bg-[#5A3A99]
              border-1
              border-white
              active:scale-95
            "
          >
            Download Apk
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section1;

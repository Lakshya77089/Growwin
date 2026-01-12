import heroBg from "../../../public/image.svg";

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
          pointer-events-none
          opacity-80
        "
      />

      {/* Content Wrapper */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-[#4B2C82] tracking-wide">
            GROWWIN CAPITAL
          </h1>

          <p className="mt-4 text-lg md:text-xl text-[#5E4B8B]">
            Smart Investing for a Smarter Future
          </p>

          <div className="mt-6 flex items-center justify-center gap-4 text-sm md:text-base text-[#6A5C9C]">
            <span>Simple</span>
            <span>|</span>
            <span>Stable Returns</span>
            <span>|</span>
            <span>Safe</span>
          </div>

          <button
            className="
              mt-8
              px-6 py-3
              rounded-lg
              bg-[#4B2C82]
              text-white
              font-medium
              transition-all
              hover:bg-[#5A3A99]
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

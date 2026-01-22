import heroBg from "/image4.svg";
const handleDownload = () => {
  window.location.href =
    "https://apk.growwincapital.com/growwin.apk";
};

const Section1: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen lg:mt-20 [@media(min-width:390px)_and_(max-width:430px)]:-mt-30 -mt-30  overflow-hidden bg-[#F2F2F2]">
      {/* Background Image (IMG behaving like background) */}
      <img
        src={heroBg}
        alt="Growwin background"
        className="
          absolute inset-0
          w-full h-full
          object-center
          z-0
          lg:object-cover
          lg:scale-100
          scale-150
          pointer-events-none

        "
      />

      {/* Content Wrapper */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-4xl lg:text-7xl font-[var(--font-jost)]  font-semibold text-white-offset tracking-wide ">
            GROWWIN CAPITAL
          </h1>

          <p className="mt-1 text-lg lg:text-2xl font-[var(--font-jost)]  font-regular text-[#5E4B8B]">
            Smart Investing for a Smarter Future
          </p>

          <div className="mt-6 flex items-center font-[var(--font-jost)]  font-regular justify-center gap-4 text-sm lg:text-lg text-[#6A5C9C]">
            <span className="font-jost-regular">Simple</span>
            <span>|</span>
            <span className="font-jost-regular">Stable Returns</span>
            <span>|</span>
            <span className="font-jost-regular">Safe</span>
          </div>

          <button
            onClick={handleDownload}
            className="
              lg:mt-3
              mt-10
              px-8 py-2
              rounded-lg
              bg-[#4B2C82]
              text-white
              font-[var(--font-poppins)]  font-regular
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

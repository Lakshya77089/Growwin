import teamImg from "/team.svg"; // use your actual image path

const Section6 = () => {
  return (
    <section className="w-full py-15 bg-[#F2F2F2]">
      <div className="max-w-7xl mx-auto px-6">
        {/* ===== Heading ===== */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-[var(--font-poppins)]  font-medium text-[#2D2D2D]">
            Meet Our <span className="text-[#5b3fa3]">Team</span>
          </h2>
        </div>

        {/* ===== Content ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* IMAGE */}
          <div className="flex justify-center">
            <img
              src={teamImg}
              alt="Growwin Capital Team"
              className="w-full max-w-[520px]"
            />
          </div>

          {/* TEXT */}
          <div className="text-[#3d3d3d] font-[var(--font-poppins)]  font-regular text-[15px] leading-[1.9] max-w-[560px]">
            <p className="text-justify">
              At Growwin Capital, our strength lies in a highly experienced and
              passionate team of financial professionals. Our fund managers
              bring 15+ years of hands-on experience across equity, forex,
              commodities, and cryptocurrency markets. We follow a
              research-based, data-driven, and diversified investment approach
              designed to deliver stable and consistent returns.
        

    
              Our risk management team continuously tracks global markets to
              ensure controlled exposure and capital safety. Supported by
              advanced tools, technical analysis, and AI-powered insights, our
              analysts capture opportunities across international markets.
        

     
              With a strong focus on transparency, ethics, and personalized
              strategies, our team manages every portfolio with discipline and
              long-term vision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;

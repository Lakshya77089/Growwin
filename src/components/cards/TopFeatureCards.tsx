import appMockup from "/moblie.svg";

const TopFeatureCards = () => {
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* ===== TOP ROW ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 mb-10">
          {/* LEFT BIG CARD */}
          <div className="relative bg-[#e6e6e6] rounded-[36px] p-10 shadow-[0_15px_40px_rgba(0,0,0,0.08)] overflow-hidden">
            {/* Phone mockup */}
            <div className="absolute left-4 top-[70px] w-[200px]">
              <img
                src={appMockup}
                alt="Mobile App"
                className="rounded-xl shadow-md"
              />
            </div>

            {/* Content */}
            <div className="ml-[220px]">
              <h3 className="text-2xl font-[var(--font-poppins)]  font-medium text-[#2D2D2D] mb-3">
                Mobile Application
              </h3>

              <p className="text-gray-600 font-[var(--font-poppins)]  font-regular text-base leading-relaxed max-w-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                auctor leo ac dolor laoreet, quis consectetur metus venenatis.
              </p>

              <div className="mt-6 text-sm text-gray-500 font-[var(--font-poppins)]  font-regular">Coming Soon...</div>

              <div className="mt-3 flex gap-3">
                <div className="w-9 h-9 rounded-full bg-[#3DDC84] flex items-center justify-center">
                  <span className="text-white text-sm">A</span>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#555] flex items-center justify-center">
                  <span className="text-white text-sm"></span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SMALL CARD */}
          <div className="rounded-[36px] p-10 bg-gradient-to-br from-[#ede8f6] to-[#f7f7f7] shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
            <h3 className="text-2xl font-[var(--font-poppins)]  font-medium text-[#2D2D2D] mb-4">
              User friendly
            </h3>

            <p className="text-gray-600 font-[var(--font-poppins)]  font-regular text-base leading-relaxed max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              auctor leo ac dolor laoreet, quis consectetur metus venenatis.
            </p>
          </div>
        </div>

        {/* ===== BOTTOM ROW ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-[40%_57%] gap-10">
          {/* BOTTOM LEFT – 30% */}
          <div className="rounded-[36px] p-10 bg-gradient-to-br from-[#ede8f6] to-[#f7f7f7] shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
            <h3 className="text-2xl font-[var(--font-poppins)]  font-medium text-[#2D2D2D] mb-4">
              One Touch/Tap Trading
            </h3>

            <p className="text-gray-600 font-[var(--font-poppins)]  font-regular text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              auctor leo ac dolor laoreet, quis consectetur metus venenatis.
            </p>
          </div>

          {/* BOTTOM RIGHT – 70% */}
          <div className="rounded-[36px] p-10 bg-[#e6e6e6] shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
            <h3 className="text-2xl font-[var(--font-poppins)]  font-medium text-[#2D2D2D] mb-4">
              User friendly
            </h3>

            <p className="text-gray-600 font-[var(--font-poppins)]  font-regular text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              auctor leo ac dolor laoreet, quis consectetur metus venenatis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopFeatureCards;

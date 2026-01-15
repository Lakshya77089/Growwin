import appMockup from "/moblie.svg";
import android from "/android.png";
import ios from "/ios.png";

const TopFeatureCards = () => {
  return (
    <section className="w-full py-16">
      <div className="max-w-8xl mx-auto px-6">
        {/* ===== TOP ROW ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 mb-10">
          {/* LEFT BIG CARD */}

          <div className="relative bg-[#e6e6e6] rounded-[45px] p-10 shadow-[0_15px_40px_rgba(0,0,0,0.08)] overflow-hidden border-2 border-[#e2e3e2]">
            {/* Phone mockup */}
            <div className="absolute left-4 top-[30px] w-[300px]">
              <img src={appMockup} alt="Mobile App" className="rounded-xl " />
            </div>

            {/* Content */}
            <div className="ml-[250px]">
              <h3 className="text-2xl font-[var(--font-poppins)]  font-medium text-[#2D2D2D] mb-3">
                Mobile Application
              </h3>

              <p className="text-gray-600 font-[var(--font-poppins)]  font-regular text-base leading-relaxed max-w-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                auctor leo ac dolor laoreet, quis consectetur metus venenatis.
              </p>

              <div className="mt-6 text-sm text-gray-500 font-[var(--font-poppins)]  font-regular">
                Coming Soon...
              </div>

              <div className="mt-3 flex gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center">
                  {/* <span className="text-white text-sm">A</span> */}
                  <img src={android} />
                </div>
                <div className="w-9 h-9 rounded-full flex items-center justify-center">
                  <img src={ios} />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SMALL CARD */}
          <div
            className="
    relative
    rounded-[36px]
    p-10
    bg-[#e6e6e6]
    shadow-[0_20px_50px_rgba(0,0,0,0.08)]
    overflow-hidden
  "
          >
            {/* PURPLE CIRCLE GLOW */}
            <div
              className="
      pointer-events-none
      absolute
      -bottom-45
      -left-30
      w-[380px]
      h-[380px]
      rounded-full
      bg-[#4b2e83]/25
      blur-[80px]
    "
            />
            {/* CONTENT */}
            <h3 className="relative z-10 text-2xl font-[var(--font-poppins)] font-medium text-[#2D2D2D] mb-3">
              User friendly
            </h3>

            <p className="relative z-10 text-[#6b6b6b] font-[var(--font-poppins)] text-base leading-relaxed max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              auctor leo ac dolor laoreet, quis consectetur metus venenatis.
            </p>
          </div>
        </div>

        {/* ===== BOTTOM ROW ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-[40%_57%] gap-10">
          {/* BOTTOM LEFT – 30% */}
          <div className="relative rounded-[36px] p-10 bg-[#f3f1f8] shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden">
            {/* SOFT PURPLE GLOW */}
            <div className="absolute -bottom-24 -left-24 w-[300px] h-[300px] rounded-full bg-[#4b2e83]/20 blur-[90px]" />

            {/* CONTENT */}
            <h3 className="relative z-10 text-2xl font-[var(--font-poppins)] font-medium text-[#2D2D2D] mb-4">
              One Touch/Tap Trading
            </h3>

            <p className="relative z-10 text-gray-600 font-[var(--font-poppins)] text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              auctor leo ac dolor laoreet, quis consectetur metus venenatis.
            </p>
          </div>

          {/* BOTTOM RIGHT – 70% */}
          <div className="rounded-[36px] border-2 border-[#e2e3e2] p-10 bg-[#e6e6e6] shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
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

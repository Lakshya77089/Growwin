import appMockup from "/moblie.svg";
// import android from "/android.png";
// import ios from "/ios.png";

const TopFeatureCards = () => {
  return (
    <section className="w-full py-16">
      <div className="max-w-8xl mx-auto px-6">
        {/* ===== TOP ROW ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 mb-10">
          {/* LEFT BIG CARD */}

          <div
            className="
  relative bg-[#e6e6e6]
  rounded-3xl md:rounded-[45px]
  p-10 
  shadow-[0_15px_40px_rgba(0,0,0,0.08)]
  overflow-hidden
  border-2 border-[#e2e3e2]
  flex
"
          >
            {/* Phone mockup */}
            <div
              className="
              hidden md:block
    relative
    w-full
    h-[160px]          /* control visible height on mobile */
    mb-6

    flex items-center justify-center   /* 👈 mobile vertical centering */

    md:absolute md:left-6 md:top-[60%]
    md:-translate-y-1/2
    md:w-[260px] md:h-[340px]
    md:mb-0

    overflow-hidden
  "
            >
              <img
                src={appMockup}
                alt="Mobile App"
                className="
      w-full
      h-full
      object-cover
      object-top       /* 👈 shows top part like reference */
      rounded-2xl
    "
              />
            </div>

            {/* Content */}
            <div className="md:ml-[270px] text-center md:text-left">
              <h3 className="text-2xl text-left  font-[var(--font-poppins)] font-medium text-[#2D2D2D] mb-3">
                Mobile Application
              </h3>

              <p className="text-gray-600 font-[var(--font-poppins)] font-regular  text-left text-base leading-relaxed max-w-xl mx-auto md:mx-0">
                The Growwin Capital App is a smart and secure platform designed
                to manage your investments effortlessly. Track your
                self-investment returns, team income, and rewards in real
                time—anytime, anywhere, directly from your mobile.
              </p>
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
              Secure & Transparent
            </h3>

            <p className="relative z-10 text-[#6b6b6b] font-[var(--font-poppins)] text-base leading-relaxed max-w-md">
              Your investments are managed through a secure and transparent
              system. Every transaction, income update, and reward detail is
              clearly visible, helping you invest with confidence.
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
              Effortless Actions
            </h3>

            <p className="relative z-10 text-gray-600 font-[var(--font-poppins)] text-base leading-relaxed">
              Manage investments, transactions, and support effortlessly with
              just a few taps—designed to save time and maximize efficiency.
            </p>
          </div>

          {/* BOTTOM RIGHT – 70% */}
          <div className="rounded-[36px] border-2 border-[#e2e3e2] p-10 bg-[#e6e6e6] shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
            <h3 className="text-2xl font-[var(--font-poppins)]  font-medium text-[#2D2D2D] mb-4">
              Support & Assistance
            </h3>

            <p className="text-gray-600 font-[var(--font-poppins)]  font-regular text-base leading-relaxed">
              Raise support tickets, chat with our team, and get timely
              assistance directly inside the app—ensuring uninterrupted growth
              and complete peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopFeatureCards;

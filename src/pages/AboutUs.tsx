import ContactUs from "../components/common/ContactUs";
import Footer from "../components/common/Footer";

const AboutUs = () => {
  return (
    <>
      <section className="relative w-full py-28 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-[2%] left-[3%] w-[450px] h-[700px] bg-[#941bb9]/20 rounded-full blur-[160px]" />
        <div className="absolute top-[20%] left-[35%] w-[450px] h-[450px] bg-[#941bb9]/20 rounded-full blur-[160px]" />
        {/* <div className="absolute top-[60%] left-[50%] w-[450px] h-[450px] bg-[#941bb9]/20 rounded-full blur-[160px]" /> */}

        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-bold text-[#51367e] mb-6 font-[var(--font-jost)]  font-semibold">
              ABOUT US
            </h2>
            <p className="text-[#2D2D2D] font-[var(--font-poppins)]  font-regular max-w-5xl mx-auto text-sm md:text-base leading-relaxed">
              Growwin Capital offers a secure and transparent Fix Return
              Investment Plan designed to provide investors fixed monthly
              returns. Your investments are professionally managed by experts
              across diversified asset classes like forex, stocks, crypto, and
              real estate, ensuring consistent growth and minimized risk.
              Whether you are a new or experienced investor, Growwin Capital
              helps you build a stable monthly income with safety, reliability,
              and complete transparency.
            </p>
          </div>
        </div>
        <div className="max-w-7xl  text-center mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h3 className="text-4xl md:text-left md:text-5xl font-[var(--font-jost)] font-semibold text-[#51367e] mb-6">
              Mission
            </h3>

            <p className="text-[#2D2D2D]  text-justify font-[var(--font-poppins)] text-sm md:text-base leading-relaxed mb-4">
              Our mission is to deliver secure, predictable, and professionally
              managed investment solutions that provide stable monthly income to
              our clients.
            </p>

            <p className="text-[#2D2D2D] text-left font-[var(--font-poppins)] text-sm md:text-base leading-relaxed mb-4">
              We focus on disciplined risk management, global diversification
              across forex, stocks, crypto, and real estate, and complete
              transparency.
            </p>

            <p className="text-[#2D2D2D]  text-left font-[var(--font-poppins)] text-sm md:text-base leading-relaxed">
              Growwin Capital is committed to helping investors grow steadily,
              make informed financial decisions, and move toward financial
              freedom through trustworthy and ethical investment practices.
            </p>
          </div>

          {/* Right Images */}
          <div className="grid grid-cols-2 gap-6">
            {/* Large Image */}
            <div className="row-span-2 mt-20 rounded-3xl overflow-hidden">
              <img
                src="/mission-1.svg"
                alt="Investment discussion"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top Right Image */}
            <div className="rounded-3xl overflow-hidden">
              <img
                src="/mission-2.svg"
                alt="Work setup"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Right Image */}
            <div className="rounded-3xl overflow-hidden">
              <img
                src="/mission-3.svg"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="max-w-7xl mt-30 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* LEFT: Images */}
          <div className="hidden lg:grid grid grid-cols-2 gap-6">
            {/* Tall Left Image */}
            <div>
              <div className="row-span-3 mb-5 rounded-3xl overflow-hidden">
                <img
                  src="/vision-1.svg"
                  alt="Vision notebook"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Top Right Image */}
              <div className="rounded-3xl overflow-hidden">
                <img
                  src="/vision-2.svg"
                  alt="Building"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Middle Right Image */}
            <div>
              <div className="rounded-3xl mb-5 overflow-hidden">
                <img
                  src="/vision-3.svg"
                  alt="Target focus"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Right Image */}
              <div className="rounded-3xl overflow-hidden">
                <img
                  src="/vision-4.svg"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT: Text */}
          <div>
            <h3 className="text-4xl md:text-5xl font-[var(--font-jost)] font-semibold text-[#51367e] mb-6">
              Vision
            </h3>

            <p className="text-[#2D2D2D] font-[var(--font-poppins)] text-sm md:text-base leading-relaxed mb-4">
              To become a trusted global leader in fixed-return and diversified
              investment management, empowering individuals to achieve financial
              stability and long-term wealth creation with confidence.
            </p>

            <p className="text-[#2D2D2D] font-[var(--font-poppins)] text-sm md:text-base leading-relaxed">
              Growwin Capital aims to make professional investing simple, safe,
              and accessible by offering transparent systems, advanced market
              strategies, and consistent monthly earnings for every investor.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 md:hidden">
            {/* Left Column */}
            <div>
              <div className="mb-5 rounded-3xl overflow-hidden">
                <img
                  src="/vision-1.svg"
                  alt="Vision notebook"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="rounded-3xl overflow-hidden">
                <img
                  src="/vision-2.svg"
                  alt="Building"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column */}
            <div>
              <div className="rounded-3xl mb-5 overflow-hidden">
                <img
                  src="/vision-3.svg"
                  alt="Target focus"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="rounded-3xl overflow-hidden">
                <img
                  src="/vision-4.svg"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative mt-20">
          {/* Header */}
          <div className="text-center ">
            <h3 className="text-4xl md:text-5xl font-[var(--font-jost)] font-medium text-[#51367e]">
              Journey
            </h3>
            <p className="text-[#51367e] mt-2 font-[var(--font-jost)] font-regular text-sm">
              Apr 2023 – Dec 2025
            </p>
          </div>

          {/* Timeline Container */}
          {/* Desktop */}
          <div className="hidden lg:block relative h-[1200px] min-w-[1024px] overflow-hidden">
            {/* SVG Dotted Path */}
            <svg
              viewBox="0 0 1100 900"
              className="absolute inset-0 w-full h-full z-0 pointer-events-none"
              fill="none"
            >
              <path
                d="
    M 120 80
    H 800
    C 880 80, 880 380, 800 380
    H 200
    C 120 380, 120 680, 200 680
    H 800
    C 880 680, 880 930, 800 940
    H 200
   
  "
                stroke="#51367e"
                strokeWidth="2"
                strokeDasharray="6 9"
              />
            </svg>

            {/* Journey Nodes */}
            <JourneyNode
              x="11%"
              y="8%"
              date="Apr 2023 – Sep 2023"
              users="500"
              investment="$1.0 Million"
            />

            <JourneyNode
              x="80%"
              y="22%"
              date="Oct 2023 – Mar 2024"
              users="1,200"
              investment="$2.5 Million"
            />

            <JourneyNode
              x="34%"
              y="40%"
              date="Apr 2024 – Sep 2024"
              users="3,000"
              investment="$5 Million"
            />

            <JourneyNode
              x="34%"
              y="65%"
              date="Oct 2024 – Mar 2025"
              users="10,000"
              investment="$8.6 Million"
            />

            <JourneyNode
              x="80%"
              y="78%"
              date="Apr 2025 – Sep 2025"
              users="18,000"
              investment="$12.0 Million"
            />

            <JourneyNode
              x="11%"
              y="83%"
              date="Oct 2025 – Dec 2025"
              users="25,000"
              investment="$15.0 Million"
            />
          </div>
          <MobileTimeline/>
        </div>
      </section>

      <ContactUs />
      <Footer />
    </>
  );
};

export default AboutUs;
const JourneyNode = ({
  x,
  y,
  date,
  users,
  investment,
}: {
  x: string; // "12%"
  y: string; // "8%"
  date: string;
  users: string;
  investment: string;
}) => {
  return (
    <div
      className="absolute flex flex-col items-center z-10 
                 -translate-x-1/2"
      style={{ left: x, top: y }}
    >
      <div className="bg-[#F2F2F2] rounded-xl p-2 mb-2">
        <img src="/calender.svg" alt="Calendar" className="w-24 h-24" />
      </div>

      <div className="bg-[#51367e] text-white text-xs rounded-md font-medium px-3 py-2 mb-2">
        {date}
      </div>

      <p className="text-xs text-[#2D2D2D] font-medium">Total Users: {users}</p>
      <p className="text-xs text-[#2D2D2D] font-medium">
        Investments: {investment}
      </p>
    </div>
  );
};
const MobileTimelineItem = ({
  date,
  users,
  investment,
  showArrow = true,
}: {
  date: string;
  users: string;
  investment: string;
  showArrow?: boolean;
}) => {
  return (
    <div className="relative flex flex-col items-center text-center">
      {/* Calendar Icon */}
      <div className="bg-[#F2F2F2] flex flex-col items-center text-center">
      <div className=" rounded-2xl p-4 -mb-2">
        <img
          src="/calender.svg"
          alt="Calendar"
          className="w-25 h-25"
        />
      </div>

      {/* Date */}
      <div className="bg-[#51367e] text-white text-sm rounded-lg px-4 py-2 mb-2">
        {date}
      </div>

      {/* Info */}
      <p className="text-sm text-[#2D2D2D] font-medium">
        Total Users: {users}
      </p>
      <p className="text-sm text-[#2D2D2D] font-medium mb-4">
        Investments: {investment}
      </p>
      </div>
      {/* Arrow */}
      {showArrow && (
        <div className="relative flex flex-col items-center mb-4">
          <span className="h-10 border-dashed border-[#51367e]" />
          <div className="w-7 h-7 rounded-full bg-[#51367e] flex items-center justify-center text-white rotate-180">
            ^
          </div>
        </div>
      )}
    </div>
  );
};
const MobileTimeline = () => {
  return (
    <div className="lg:hidden px-4 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h3 className="text-3xl font-medium text-[#51367e]">
          Journey
        </h3>
        <p className="text-sm text-[#51367e]">
          Apr 2023 – Dec 2025
        </p>
      </div>

      {/* Vertical Line */}
      <div className="relative flex flex-col items-center">
        <div className="absolute top-0 bottom-0 border-l-2 border-dashed border-[#51367e]" />

        <MobileTimelineItem
          date="Apr 2023 – Sep 2023"
          users="500"
          investment="$1.0 Million"
        />

        <MobileTimelineItem
          date="Oct 2023 – Mar 2024"
          users="1,200"
          investment="$2.5 Million"
        />

        <MobileTimelineItem
          date="Apr 2024 – Sep 2024"
          users="3,000"
          investment="$5 Million"
        />

        <MobileTimelineItem
          date="Oct 2024 – Mar 2025"
          users="10,000"
          investment="$8.6 Million"
        />

        <MobileTimelineItem
          date="Apr 2025 – Sep 2025"
          users="18,000"
          investment="$12.0 Million"
        />

        <MobileTimelineItem
          date="Oct 2025 – Dec 2025"
          users="25,000"
          investment="$15.0 Million"
          showArrow={false}
        />
      </div>
    </div>
  );
};

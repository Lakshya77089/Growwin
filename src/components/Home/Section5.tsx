const features = [
  {
    title: "Fixed Monthly Returns",
    desc: "Earn consistent monthly income without stress.",
  },
  {
    title: "Professional Fund Management",
    desc: "Our expert team uses advanced research and global strategies.",
  },
  {
    title: "Global Diversification",
    desc: "Your funds are invested across multiple asset classes to reduce risk.",
  },
  {
    title: "Smart Risk Management",
    desc: "We follow disciplined risk management strategies to protect capital and manage market volatility effectively.",
  },
  {
    title: "Transparent & Secure System",
    desc: "Live tracking, clear reporting, and complete transparency.",
  },

  {
    title: "24/7 Customer Support",
    desc: "Round-the-clock assistance for withdrawals, queries, and updates.",
  },
];

const Section5 = () => {
  return (
    <section className="w-full py-32 bg-[#F2F2F2]">
      <div className="max-w-7xl mx-auto px-6">
        {/* ===== Heading ===== */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-[var(--font-poppins)]  font-medium text-[#2D2D2D]">
            Why Choose <span className="text-[#51367e]">Growwin Capital?</span>
          </h2>
        </div>

        {/* ===== Cards ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="
    group
    relative
    overflow-hidden
    rounded-[28px]
    px-14 py-12
    text-center
    bg-[#f1f1f1]
    border border-white/60

    shadow-[0_20px_60px_rgba(0,0,0,0.06)]
    transition-all duration-300
    hover:shadow-[0_25px_80px_rgba(91,63,163,0.25)]
  "
            >
              {/* HOVER BACKGROUND LAYER */}
              <div
                className="
      absolute inset-0
      bg-[radial-gradient(120%_120%_at_0%_0%,#51367e_0%,#4b347a_70%)]
      opacity-0
      transition-opacity duration-300
      group-hover:opacity-100
      z-0
    "
              />

              {/* CONTENT */}
              <div className="relative z-10">
                <h4
                  className="
        text-[20px]
        font-[var(--font-poppins)]  font-semibold
        text-[#2D2D2D]
        mb-4
        transition-colors duration-300
        group-hover:text-white
      "
                >
                  {item.title}
                </h4>

                <p
                  className="
        text-[15px]
        leading-relaxed
        text-gray-600
        max-w-[420px]
        font-[var(--font-poppins)]  font-regular
        mx-auto
        transition-colors duration-300
        group-hover:text-white/90
      "
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section5;

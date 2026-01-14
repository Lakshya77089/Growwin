const carouselData = [
  {
    id: "01",
    title: "Forex Trading",
    desc: "Forex trading means trading global currencies such as USD, EUR, GBP, and INR. It is one of the largest and most liquid markets in the world. Growwin Capital uses technical analysis, market news, and disciplined trading plans to participate in the forex market. Our aim is to capture opportunities while managing risk carefully.",
    image: "/forex.svg",
  },
  {
    id: "02",
    title: "Cryptocurrency Trading",
    desc: "Cryptocurrency trading involves buying and selling digital assets. At Growwin Capital, we follow market trends, technical indicators, and risk-managed strategies to navigate this volatile market safely.",
    image: "/cyptocurrency.svg",
  },
  {
    id: "03",
    title: "Equity Investment",
    desc: "We invest in high-quality equities with strong fundamentals and long-term growth potential using a research-backed investment approach.",
    image: "/stocks.svg",
  },
  {
    id: "04",
    title: "Commodities Trading",
    desc: "Commodities trading includes gold, silver, oil, and agricultural products, providing diversification and hedging against inflation.",
    image: "/commodity.svg",
  },
];

import { useRef } from "react";

const Section7 = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full py-32 bg-white overflow-hidden">
      <div className="w-full mx-auto px-6">
        {/* ===== Heading ===== */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-poppins-bold text-[#2D2D2D]">
            Meet Our <span className="text-[#5b3fa3]">Team</span>
          </h2>
        </div>

        {/* ===== Carousel ===== */}
        <div className="
    ml-[calc((100vw-80rem)/2)]
    pl-6
  ">
        <div
          ref={sliderRef}
          className="
    flex gap-16
    overflow-x-auto
    scroll-smooth
    scrollbar-hide
    touch-pan-x
    select-none
    pr-[300px]
  "
        >
          {carouselData.map((item) => (
            <div key={item.id} className="min-w-[520px]">
              {/* IMAGE CARD */}
              <div className="rounded-[36px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.15)]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[300px] object-cover"
                />
              </div>

              {/* TEXT */}
              <div className="mt-8 max-w-[520px]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#5b3fa3] font-semibold text-lg">
                    {item.id}
                  </span>
                  <span className="text-gray-400">—</span>
                  <h4 className="text-lg font-poppins-semibold text-[#2D2D2D]">
                    {item.title}
                  </h4>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;

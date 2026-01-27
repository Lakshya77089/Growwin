import { useRef } from "react";

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
    desc: "Cryptocurrency trading involves buying and selling digital assets like Bitcoin, Ethereum, and other popular cryptocurrencies. At Growwin Capital, we follow market trends, technical analysis, and risk control to trade cryptocurrencies wisely. Since the crypto market is highly volatile, our focus is on safe strategies and informed decisions rather than random speculation.",
    image: "/cyptocurrency.svg",
  },
  {
    id: "03",
    title: "Equity Investment",
    desc: "Stock trading involves buying and selling shares of companies listed on stock exchanges. At Growwin Capital, we analyze company fundamentals, market trends, and price movements before taking trading decisions. We focus on quality stocks and smart entry-exit strategies to help create steady growth over time.",
    image: "/stocks.svg",
  },
  {
    id: "04",
    title: "Commodities Trading",
    desc: "Commodity trading includes trading in assets like gold, silver, crude oil, and agricultural products. These assets often act as a hedge against inflation and market uncertainty. Growwin Capital studies global demand, supply factors, and technical indicators to trade commodities with a balanced and risk-managed approach.",
    image: "/commodity.svg",
  },
];

const Section7 = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  return (
    <section className="-mt-10 md:mt-0 w-full py-20 bg-[#F2F2F2] overflow-hidden">
      <div className="w-full mx-auto px-6">

        {/* ===== Heading ===== */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-poppins-bold text-[#2D2D2D]">
            Our Core<span className="text-[#51367e]"> Trading Segments</span>
          </h2>
        </div>

        {/* ================= MOBILE STACK (NO CAROUSEL) ================= */}
        <div className=" block md:hidden space-y-16">
          {carouselData.map((item) => (
            <div key={item.id} className="group">
              {/* IMAGE */}
              <div className="rounded-3xl overflow-hidden shadow-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[220px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* TEXT */}
              <div className="mt-6 font-[var(--font-poppins)]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#51367e] font-semibold text-lg">
                    {item.id}
                  </span>
                  <span className="text-gray-400">—</span>
                  <h4 className="text-lg font-semibold text-[#2D2D2D]">
                    {item.title}
                  </h4>
                </div>

                <p className="text-sm text-justify text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ================= DESKTOP CAROUSEL ================= */}
        <div className="hidden md:block ml-[calc((100vw-80rem)/2)] pl-6">
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
              <div key={item.id} className="min-w-[520px] group">
                {/* IMAGE CARD */}
                <div className="rounded-[36px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.15)]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* TEXT */}
                <div className="mt-8 max-w-[520px] font-[var(--font-poppins)]">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[#51367e] font-semibold text-lg">
                      {item.id}
                    </span>
                    <span className="text-gray-400">—</span>
                    <h4 className="text-lg font-semibold text-[#2D2D2D]">
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

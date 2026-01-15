type PlanCardProps = {
  title: string;
  price: string;
  popular?: boolean;
};

const PlanCard = ({ title, price, popular = false }: PlanCardProps) => {
  return (
    <div
      className={`
        relative
        rounded-[36px]
        p-10
        shadow-[0_20px_50px_rgba(0,0,0,0.08)]
        bg-gradient-to-br from-[#ede8f6] to-[#f7f7f7]
        ${popular ? "scale-[1.03]" : ""}
      `}
    >
      {/* Ribbon */}
      {popular && (
        <div className="absolute top-6 right-[-36px] rotate-45 bg-[#5b3fa3] text-white text-xs px-10 py-1 font-semibold">
          Most Popular
        </div>
      )}

      {/* Title */}
      <h3 className="text-xlfont-[var(--font-poppins)]  font-semibold text-[#2D2D2D] mb-4 text-center">
        {title}
      </h3>

      {/* Price */}
      <div className="text-center mb-6">
        <p className="text-sm text-gray-500">Starting from</p>
        <p className="text-3xl font-poppins-bold text-[#2D2D2D]">
          ${price}
        </p>
        <p className="text-xs text-gray-500">USDT</p>
      </div>
      <span className=" text-xs font-[var(--font-poppins)]  font-medium ">Feature</span>
      {/* Features */}
      <div className="space-y-2 text-sm text-gray-600 mt-2 font-[var(--font-poppins)]  font-regular mb-8">
        <div className="flex justify-between">
          <span>Capital Back</span>
          <span>: Yes</span>
        </div>
        <div className="flex justify-between">
          <span>Weekly Return</span>
          <span>: 2.75%</span>
        </div>
        <div className="flex justify-between">
          <span>Yearly Return</span>
          <span>: 132%</span>
        </div>
        <div className="flex justify-between">
          <span>Return</span>
          <span>: +10%</span>
        </div>
        <div className="flex justify-between">
          <span>Investment Range</span>
          <span>: 2,001 USDT or more</span>
        </div>
      </div>

      {/* Button */}
      <button className="w-full py-3 rounded-full bg-[#5b3fa3] text-white font-poppins-medium hover:opacity-90 transition">
        Buy Now
      </button>
    </div>
  );
};

export default PlanCard;

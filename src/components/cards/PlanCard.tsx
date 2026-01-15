type PlanCardProps = {
  title: string;
  price: string;
  popular?: boolean;
  variant?: "solid" | "gradient";
};

const PlanCard = ({
  title,
  price,
  popular = false,
  variant = "solid",
}: PlanCardProps) => {
  return (
    <div
      className={`
        relative
        rounded-[36px]
        px-10
        py-12
        bg-[#e2dfe7]
        shadow-[0_25px_60px_rgba(0,0,0,0.10)]
        overflow-hidden
        ${popular ? "scale-[1.04]" : ""}
      `}
    >
      {/* RADIAL GLOW — ONLY FOR GRADIENT VARIANT */}
      {variant === "gradient" && (
        <div
          className="
            absolute
            top-50
            -right-40
            w-[520px]
            h-[520px]
            rounded-full
            bg-[#4b2e83]/30
            blur-[140px]
          "
        />
      )}

      {/* Popular Ribbon */}
      {popular && (
        <div className="absolute top-6 right-[-42px] rotate-45 bg-[#51367e] text-white text-xs px-12 py-1 font-medium z-10">
          Most Popular
        </div>
      )}

      {/* CONTENT */}
      <div className="relative z-10">
        {/* Title */}
        <h3 className="text-2xl font-[var(--font-poppins)] font-semibold text-[#2D2D2D] mb-6 text-center">
          {title}
        </h3>

        {/* Price */}
        <div className="text-center mb-8">
          <p className="text-sm text-gray-500 mb-1">Starting from</p>
          <p className="text-4xl font-[var(--font-poppins)] font-bold text-[#2D2D2D]">
            ${price}
          </p>
          <p className="text-xs text-gray-500 mt-1">USDT</p>
        </div>

        {/* Features */}
        <div className="mb-10">
          <p className="text-sm font-[var(--font-poppins)] font-medium text-[#2D2D2D] mb-4">
            Features
          </p>

          <div className="space-y-3 text-sm text-gray-600 font-[var(--font-poppins)]">
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
        </div>

        {/* Button */}
        <button className="w-full py-4 rounded-full bg-[#51367e] text-white font-[var(--font-poppins)] font-medium hover:opacity-90 transition">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default PlanCard;

type PlanFeature = {
  label: string;
  value: string;
};

type PlanCardProps = {
  title: string;
  price: string;
  features: PlanFeature[];
  popular?: boolean;
  variant?: "solid" | "gradient";
};

const PlanCard = ({
  title,
  price,
  features,
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
          <p className="text-sm text-gray-500 mb-1">Monthly Return</p>
          <p className="text-4xl font-[var(--font-poppins)] font-bold text-[#2D2D2D]">
            {price}
          </p>
          {/* <p className="text-xs text-gray-500 mt-1">USDT</p> */}
        </div>

        {/* Features */}
        <div className="mb-10">
          <p className="text-sm font-[var(--font-poppins)] font-medium text-[#2D2D2D] mb-4">
            Features
          </p>

          <div className="space-y-3 text-sm text-gray-600 font-[var(--font-poppins)]">
            {features.map((feature, index) => (
              <div key={index} className="flex justify-between">
                <span>{feature.label}</span>
                <span>: {feature.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <button
          onClick={() => {
            window.location.href = "https://site.growwincapital.com";
          }}
          className="w-full py-4 rounded-full bg-[#51367e] text-white font-[var(--font-poppins)] font-medium hover:opacity-90 transition"
        >
          Invest Now
        </button>
      </div>
    </div>
  );
};

export default PlanCard;

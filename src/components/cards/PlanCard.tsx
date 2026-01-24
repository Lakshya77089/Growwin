import { useState, useRef } from "react";

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
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`
        relative
        rounded-[36px]
        border-[0.5]
        border-white
        px-10
        py-12
        bg-[#e2dfe7]
        shadow-[0_25px_60px_rgba(0,0,0,0.10)]
        overflow-hidden
        transition-all
        duration-500
        group
        hover:scale-[1.02]
        ${popular ? "scale-[1.04]" : ""}
      `}
    >
      {/* Mouse-Following Radial Gradient Hover Effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
        style={{
          background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(148, 27, 185, 0.2), transparent 70%)`
        }}
      />

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
            pointer-events-none
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
        <h3 className="text-3xl font-[var(--font-poppins)] font-bold text-[#2D2D2D] mb-6 text-center">
          {title}
        </h3>

        {/* Price */}
        <div className="text-center mb-8">
          <p className="text-sm text-gray-500 mb-1">Monthly Return</p>
          <p className="text-4xl font-[var(--font-poppins)] font-bold text-[#2D2D2D]">
            {price}
          </p>
        </div>

        {/* Features */}
        <div className="mb-10">
          <p className="text-sm font-[var(--font-poppins)] font-medium text-[#2D2D2D] mb-4">
            Features
          </p>

          <div className="space-y-3 text-sm text-gray-600 font-[var(--font-poppins)]">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <span className="w-[55%] text-left whitespace-nowrap">
                  {feature.label}
                </span>
                <span className="w-[5%] text-center">:</span>
                <span className="w-[40%] whitespace-nowrap">
                  {feature.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <button
          onClick={() => {
            window.location.href = "https://site.growwincapital.com";
          }}
          className="relative z-20 w-full py-4 rounded-full bg-[#51367e] text-white font-[var(--font-poppins)] font-medium hover:bg-[#432d69] transition shadow-md"
        >
          Invest Now
        </button>
      </div>
    </div>
  );
};

export default PlanCard;

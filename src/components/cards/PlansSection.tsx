import PlanCard from "./PlanCard";

interface PlansSectionProps {
  hideHeader?: boolean;
}
const premiumPlanFeatures = [
  // { label: "Monthly Return", value: "+12%" },
  { label: "Investment Range", value: "500 USDT & Above" },
  { label: "Capital Back", value: "No" },
  // { label: "Bi-Weekly Return", value: "6%" },
  { label: "Maximum Return", value: "240%" },
];
const basicPlanFeatures = [
  // { label: "Monthly Return", value: "+5.5%" },
  { label: "Investment Range", value: "500-2,000 USDT" },
  { label: "Capital Back", value: "Yes" },
  // { label: "Bi-Weekly Return", value: "2.75%" },
  { label: "Maximum Return", value: "66%" },
];
const classicPlanFeatures = [
  // { label: "Monthly Return", value: "+6.5%" },
  { label: "Investment Range", value: "2000-Above USDT" },
  { label: "Capital Back", value: "Yes" },
  // { label: "Bi-Weekly Return", value: "3.25%" },
  { label: "Maximum Return", value: "78%" },
];

const PlansSection = ({ hideHeader = false }: PlansSectionProps) => {
  return (
    <section className="w-full mb-10">
      <div className="max-w-7xl mx-auto px-6 pb-20 ">

        {!hideHeader && (
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-[var(--font-poppins)] font-medium text-[#2D2D2D]">
              Our <span className="text-[#5b3fa3]">Plans</span>
            </h2>

            <p className="mt-4 text-gray-500 max-w-xl mx-auto font-[var(--font-poppins)]">
              Your all-in one AI-powered trading experience designed for accuracy,
              speed, and better decision
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <PlanCard title="Basic" price="+5.5%" features={basicPlanFeatures}/>
          <PlanCard title="Classic" price="+6.5%"  variant="gradient" features={classicPlanFeatures}/>
          <PlanCard title="Platinum" price="+12%" popular features={premiumPlanFeatures}/>
        </div>

      </div>
    </section>
  );
};

export default PlansSection;

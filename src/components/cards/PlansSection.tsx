import PlanCard from "./PlanCard";

const PlansSection = () => {
  return (
    <section className="w-full ">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins-semibold text-[#2D2D2D]">
            Our <span className="text-[#5b3fa3]">Plans</span>
          </h2>

          <p className="mt-4 text-gray-500 max-w-xl mx-auto font-jost-regular">
            Your all-in one AI-powered trading experience designed for accuracy,
            speed, and better decision
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <PlanCard title="Basic Plan" price="2001" />
          <PlanCard title="Classic Plan" price="2001" popular />
          <PlanCard title="Platinum Plan" price="2001" />
        </div>

      </div>
    </section>
  );
};

export default PlansSection;

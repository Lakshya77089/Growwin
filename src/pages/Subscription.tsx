import PlansSection from "../components/cards/PlansSection";
import ContactUs from "../components/common/ContactUs";
import Footer from "../components/common/Footer";

const Subscription = () => {
  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center">
      {/* 🔮 Background Shading */}
      <div className="absolute inset-0 -z-10 bg-[#F2F2F2]">
        <div className="absolute top-[2%] left-[3%] w-[700px] h-[700px] bg-[#941bb9]/30 rounded-full blur-[160px]" />
        <div className="absolute top-[20%] left-[29%] w-[450px] h-[450px] bg-[#941bb9]/20 rounded-full blur-[160px]" />
        {/* <div className="absolute bottom-[-10%] left-[30%] w-[500px] h-[500px] bg-purple-700/40 rounded-full blur-[180px]" /> */}
      </div>
      <div className="max-w-5xl mb-15 text-center mt-30 px-6">
        {/* Title */}
        <h1
          className="
            text-4xl md:text-6xl
            font-[var(--font-jost)]  font-semibold
            tracking-wide
            text-[#5b2d8b]
            font-[var(--font-jost)]  font-semibold
            mb-6
          "
        >
          INVESTMENT PLAN
        </h1>

        {/* Description */}
        <p
          className="
            text-[#2D2D2D]
            text-sm md:text-base
            leading-relaxed
            font-[var(--font-poppins)]  font-regular
            max-w-4xl
            mx-auto
          "
        >
          Growwin Capital offers a secure and transparent Fix Return Investment
          Plan designed to provide investors fixed monthly returns. Your
          investments are professionally managed by experts across diversified
          asset classes like forex, stocks, crypto, and real estate, ensuring
          consistent growth and minimized risk. Whether you are a new or
          experienced investor, Growwin Capital helps you build a stable monthly
          income with safety, reliability, and complete transparency.
        </p>
      </div>
      <PlansSection hideHeader={true} />
      <ContactUs />
      <Footer />
    </section>
  );
};

export default Subscription;

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
          Growwin Capital provides a reliable and transparent Fixed Return
          Investment Plan that delivers steady monthly income to investors. All
          funds are expertly managed by experienced professionals and
          strategically diversified across multiple asset classes, including
          forex, equities, cryptocurrency, and real estate, to promote
          consistent growth while reducing risk. Designed for both new and
          seasoned investors, Growwin Capital focuses on safety, stability, and
          trust. With clear reporting and a disciplined investment approach, we
          help investors create a dependable monthly income stream backed by
          reliability and complete transparency.
        </p>
      </div>
      <PlansSection hideHeader={true} />
      <ContactUs />
      <Footer />
    </section>
  );
};

export default Subscription;

import Navbar from "./components/Navbar";
import Section1 from "./components/Home/Section1";
import Section2 from "./components/Home/Section2";
import Section3 from "./components/Home/Section3";
import PlansSection from "./components/cards/PlansSection";
import Section4 from "./components/Home/Section4";
import Section5 from "./components/Home/Section5";
import Section6 from "./components/Home/Section6";
import Section7 from "./components/Home/Section7";
import ContactUs from "./components/common/ContactUs";
import Footer from "./components/common/Footer";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.1,          // scroll speed (lower = faster)
      easing: (t) => 1 - Math.pow(1 - t, 20), // smooth easing
      smoothWheel: true,
      // smoothTouch: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
      {/* <main className="h-[200vh] bg-gray-50"> */}
        <Section1/>
        <Section2/>
        <Section3/>
        <PlansSection/>
        <Section4/>
        <Section5/>
        <Section6/>
        <Section7/>
        <ContactUs/>
        <Footer/>
    </>
  );
}

export default App;

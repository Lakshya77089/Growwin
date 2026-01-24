import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Section1 from "../components/Home/Section1";
import Section2 from "../components/Home/Section2";
import Section3 from "../components/Home/Section3";
import PlansSection from "../components/cards/PlansSection";
import Section4 from "../components/Home/Section4";
import Section5 from "../components/Home/Section5";
import Section6 from "../components/Home/Section6";
import Section7 from "../components/Home/Section7";
import ContactUs from "../components/common/ContactUs";
import Footer from "../components/common/Footer";

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

function Home() {
  return (
    <div className="relative overflow-hidden bg-[#F2F2F2]">
      {/* Background Glows for Premium feel */}
      <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-[#941bb9]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-[#51367e]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[50%] left-[-5%] w-[600px] h-[600px] bg-[#941bb9]/10 rounded-full blur-[150px] pointer-events-none" />

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={revealVariants}>
        <Section1 />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={revealVariants}>
        <Section2 />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={revealVariants}>
        <Section3 />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={revealVariants}>
        <PlansSection />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={revealVariants}>
        <Section4 />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={revealVariants}>
        <Section5 />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={revealVariants}>
        <Section6 />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={revealVariants}>
        <Section7 />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={revealVariants}>
        <ContactUs />
      </motion.div>

      <Footer />
    </div>
  );
}

export default Home;

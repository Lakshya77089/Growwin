import { useState } from "react";
import ContactUs from "../components/common/ContactUs";
import Footer from "../components/common/Footer";

const faqs = [
  {
    question: "What is Growwin Capital?",
    answer:
      "Yes. ONQL is built for environments where milliseconds matter — from financial trading platforms to IoT networks — ensuring instant query responses without compromising accuracy.",
  },
  {
    question: "What is the primary focus of Growwin Capital?",
    answer:
      "Growwin Capital focuses on delivering secure, transparent, and fixed-return investment solutions backed by expert asset management.",
  },
  {
    question: "What is the minimum investment requirement?",
    answer:
      "The minimum investment amount is designed to be accessible for both new and experienced investors.",
  },
  {
    question: "How does Growwin Capital ensure investment security?",
    answer:
      "The minimum investment amount is designed to be accessible for both new and experienced investors.",
  },
  {
    question: "What are the risks associated with investing in Growwin Capital?",
    answer:
      "The minimum investment amount is designed to be accessible for both new and experienced investors.",
  },
  {
    question: "How does Growwin Capital ensure the security of my investments?",
    answer:
      "The minimum investment amount is designed to be accessible for both new and experienced investors.",
  },
  {
    question: "How does Growwin Capital handle client data privacy?",
    answer:
      "The minimum investment amount is designed to be accessible for both new and experienced investors.",
  },
  {
    question: "Can I reinvest my profits with Growwin Capital?",
    answer:
      "The minimum investment amount is designed to be accessible for both new and experienced investors.",
  },
  {
    question: "How long does it take to withdraw funds?",
    answer:
      "The minimum investment amount is designed to be accessible for both new and experienced investors.",
  },
  {
    question: "Can I withdraw my earnings anytime?",
    answer:
      "The minimum investment amount is designed to be accessible for both new and experienced investors.",
  },
  {
    question: "Does Growwin Capital charge any fees?",
    answer:
      "The minimum investment amount is designed to be accessible for both new and experienced investors.",
  },
  {
    question: "Can I refer friends and family to Growwin Capital?",
    answer:
      "The minimum investment amount is designed to be accessible for both new and experienced investors.",
  },
  {
    question: "How does Growwin Capital handle disputes or complaints?",
    answer:
      "The minimum investment amount is designed to be accessible for both new and experienced investors.",
  },
  {
    question: "How can I contact Growwin Capital for more information?",
    answer:
      "The minimum investment amount is designed to be accessible for both new and experienced investors.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
    <section className="relative w-full py-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[2%] left-[3%] w-[700px] h-[700px] bg-[#941bb9]/30 rounded-full blur-[160px]" />
      <div className="absolute top-[20%] left-[35%] w-[450px] h-[450px] bg-[#941bb9]/20 rounded-full blur-[160px]" />
      <div className="absolute top-[40%] left-[55%] w-[450px] h-[450px] bg-[#941bb9]/20 rounded-full blur-[160px]" />
      <div className="absolute top-[60%] left-[75%] w-[450px] h-[450px] bg-[#941bb9]/20 rounded-full blur-[160px]" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#5b3fa3] mb-4">
            FAQ
          </h2>
          <p className="text-[#2D2D2D] max-w-2xl mx-auto text-sm md:text-base">
            Frequently partiality possession resolution at or appearance
            unaffected he me. Engaged its was evident pleased husband.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`
                  rounded-2xl border border-white/60
                  backdrop-blur-xl transition-all duration-300
                  ${isOpen ? "bg-[#F2F2F2]/20 p-8 shadow-2xl" : "bg-[#F2F2F2]/40 p-5"}
                `}
              >
                {/* Question */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="text-lg font-medium text-gray-800">
                    {faq.question}
                  </span>

                  <span className="text-2xl text-gray-700 transition-transform duration-300">
                    {isOpen ? "×" : "+"}
                  </span>
                </button>

                {/* Smooth Answer */}
                <div
                  className={`
                    overflow-hidden transition-all duration-500 ease-in-out
                    ${isOpen ? "max-h-40 opacity-100 mt-6" : "max-h-0 opacity-0 mt-0"}
                  `}
                >
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    <ContactUs/>
    <Footer/>
    </>
  );
};

export default FAQ;

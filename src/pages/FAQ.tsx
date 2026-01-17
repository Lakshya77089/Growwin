import { useState } from "react";
import ContactUs from "../components/common/ContactUs";
import Footer from "../components/common/Footer";

const faqs = [
  {
    question: "What is Growwin Capital?",
    answer:
      "Growwin Capital is a global asset management firm offering diversified investments in forex, commodities, stocks, crypto, and real estate with ethical and transparent strategies.",
  },
  {
    question: "What is the primary focus of Growwin Capital?",
    answer:
      "Our focus is to deliver high-quality returns through structured asset management, offering fixed monthly returns for both individual and institutional investors.",
  },
  {
    question: "What is the minimum investment requirement?",
    answer: "The minimum investment amount is $500.",
  },
  {
    question: "How does Growwin Capital ensure investment security?",
    answer:
      "We follow a diversified investment model across multiple markets and use strong risk-management strategies to protect client capital.",
  },
  {
    question:
      "What are the risks associated with investing in Growwin Capital?",
    answer:
      "All investments involve risks such as market volatility, but our diversified approach helps reduce and manage these risks effectively.",
  },
  {
    question: "How does Growwin Capital ensure the security of my investments?",
    answer:
      "We use advanced encryption technologies and collaborate with regulated financial institutions to keep client assets safe.",
  },
  {
    question: "How does Growwin Capital handle client data privacy?",
    answer:
      "Client data is encrypted and handled according to data protection regulations. We never share personal information without client consent.",
  },
  {
    question: "Can I reinvest my profits with Growwin Capital?",
    answer:
      "Yes, clients can reinvest their monthly profits to increase long-term returns.",
  },
  {
    question: "How long does it take to withdraw funds?",
    answer:
      "Withdrawals are usually processed within 48 hours, although minor delays may occur during high-traffic periods.",
  },
  {
    question: "Can I withdraw my earnings anytime?",
    answer:
      "Yes, you can place withdrawal requests anytime in accordance with our withdrawal policies.",
  },
  {
    question: "Does Growwin Capital charge any fees?",
    answer:
      "Yes, a 4% withdrawal fee is applied to cover processing and transaction costs.",
  },
  {
    question: "Can I refer friends and family to Growwin Capital?",
    answer:
      "Yes, our referral program offers percentage-based bonuses across multiple levels for referring new investors.",
  },
  {
    question: "How does Growwin Capital handle disputes or complaints?",
    answer:
      "Our support team resolves issues promptly through email, live chat, or ticket-based assistance.",
  },
  {
    question: "How can I contact Growwin Capital for more information?",
    answer:
      "You can reach us through our official website or follow our social media channels for updates and announcements.",
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
            <h2 className="text-4xl md:text-6xl font-[var(--font-jost)]  font-semibold text-[#5b3fa3] mb-4">
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
                  ${
                    isOpen
                      ? "bg-[#F2F2F2]/20 p-8 shadow-2xl"
                      : "bg-[#F2F2F2]/40 p-5"
                  }
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
                    ${
                      isOpen
                        ? "max-h-40 opacity-100 mt-6"
                        : "max-h-0 opacity-0 mt-0"
                    }
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
      <ContactUs />
      <Footer />
    </>
  );
};

export default FAQ;

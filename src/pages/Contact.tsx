import ContactUs from "../components/common/ContactUs";
import Footer from "../components/common/Footer";
// import {  MapPin, MessageCircle, Globe } from "lucide-react";
import Mail from "/email.svg";
import MessageCircle from "/chat.svg";
import MapPin from "/location.svg";
import Globe from "/token.svg";
import Telephone from "/telephone-icon.svg";
import MTelephone from "/moblie-telephone.svg";

const Contact = () => {
  return (
    <>
      <section className="hidden lg:block relative w-full py-28 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-[2%] left-[3%] w-[450px] h-[700px] bg-[#941bb9]/20 rounded-full blur-[160px]" />
        <div className="absolute top-[20%] left-[35%] w-[450px] h-[450px] bg-[#941bb9]/20 rounded-full blur-[160px]" />

        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-[var(--font-jost)]  font-semibold text-[#5b3fa3] mb-6">
              CONTACT US
            </h2>
            <p className="text-[#2D2D2D] max-w-5xl mx-auto text-sm md:text-base leading-relaxed">
              Ready to transform your ideas into tech brilliance? Reach out to
              Growwin Capital—where innovation meets execution. Whether you’re
              dreaming big or iterating boldly, our expert team is just a
              message away. Let’s build intelligent, scalable solutions that
              work beautifully. Your next breakthrough starts with a hello.
              <br />
              <br />
              Got a project in mind? Let’s talk! Growwin’s team is here to turn
              your ideas into brilliant digital solutions.
            </p>
          </div>

          {/* Get In Touch Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left visual space (matches empty design area) */}
            <div className="hidden lg:block" />
            {/* Left Telephone Background */}
            <img
              src={Telephone}
              alt="Telephone background"
              className="
    absolute
    left-[-1%]
    top-[10%]
    w-[700px]

    pointer-events-none
    select-none
    hidden lg:block
  "
            />

            {/* Right content */}
            <div className="relative  rounded-3xl p-10 ">
              <h3 className="text-5xl text-center font-[var(--font-poppins)]  font-regular text-[#5b3fa3] mb-2">
                Get In <span className="font-semibold">Touch</span>
              </h3>
              <p className="text-base text-center font-[var(--font-poppins)]  font-regular text-[#5b3fa3] mb-10">
                Have questions about building smart wealth?
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-12 relative">
                {/* Vertical divider */}
                <div className="absolute left-1/2 top-0 h-full w-px bg-[#51367E80] hidden sm:block" />
                <div className="absolute top-1/2 left-0 w-full h-px bg-[#51367E80] hidden sm:block" />

                {/* Token Raise */}
                <a
                  href="https://site.growwincapital.com/help"
                  className="flex flex-col items-center text-center gap-3 cursor-pointer"
                >
                  <img src={Globe} alt="Ticket Raise" className="w-10 h-10" />

                  <p className="font-[var(--font-poppins)] font-medium text-[#51367E]">
                    Ticket Raise
                  </p>

                  <p className="text-sm text-gray-500">Click to Raise</p>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@growwincapital.com"
                  className="flex flex-col items-center text-center gap-3 cursor-pointer"
                >
                  <img src={Mail} alt="Email" className="w-10 h-10" />

                  <p className="font-[var(--font-poppins)] font-medium text-[#51367E]">
                    Email Address
                  </p>

                  <p className="text-sm text-[#808080] font-[var(--font-poppins)] font-regular">
                    info@growwincapital.com
                  </p>
                </a>

                {/* Live Chat */}
                <a
                  href="https://site.growwincapital.com/help"
                  className="flex flex-col items-center text-center gap-3 cursor-pointer"
                >
                  <img
                    src={MessageCircle}
                    alt="Live Chat"
                    className="w-10 h-10"
                  />

                  <p className="font-[var(--font-poppins)] font-medium text-[#51367E]">
                    Live Chat
                  </p>

                  <p className="text-sm font-[var(--font-poppins)] font-regular text-[#808080]">
                    Open
                  </p>
                </a>

                {/* Office */}
                <div className="flex flex-col items-center text-center gap-3">
                  {/* <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#5b3fa3]/10 text-[#5b3fa3]"> */}
                  <img src={MapPin} alt="Token" className="w-10 h-10" />
                  {/* </div> */}
                  <p className="font-[var(--font-poppins)]  font-medium text-[#51367E]">
                    Our Office
                  </p>
                  <p className="text-sm font-[var(--font-poppins)]  font-regular text-[#808080]">
                    Your full address
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================= MOBILE CONTACT ================= */}
      <section className="block lg:hidden w-full px-5 pt-40 py-20 overflow-hidden bg-[#F2F2F2]">
        {/* <div className="absolute top-[0%] left-[3%] w-[80vw] max-w-[380px] bg-[#941bb9]/20 rounded-full blur-[160px]" /> */}
        <div className="absolute top-[20%]   w-[80vw] max-w-[380px] h-[80vw]  bg-[#941bb9]/20 rounded-full blur-[160px]" />
        <div className="absolute top-[40%]   w-[80vw] max-w-[380px] h-[80vw]  bg-[#941bb9]/20 rounded-full blur-[160px]" />
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-[var(--font-jost)] font-semibold text-[#5b3fa3] mb-4">
            CONTACT US
          </h2>

          <p className="text-sm text-[#2D2D2D] leading-relaxed">
            Ready to transform your ideas into tech brilliance? Reach out to
            Growwin Capital—where innovation meets execution. Whether you’re
            dreaming big or iterating boldly, our expert team is just a message
            away. Let’s build intelligent, scalable solutions that work
            beautifully. Your next breakthrough starts with a hello.
            <br />
            Got a project in mind? Let’s talk! Growwin’s team is here to turn
            your ideas into brilliant digital solutions.
          </p>
        </div>
        <img
          src={MTelephone}
          alt="Telephone background"
          className="
    absolute
    left-[2%]
    top-[40%]
    w-[90vw] max-w-[420px]


    pointer-events-none
    select-none
    
  "
        />
        {/* Get in Touch */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-[var(--font-poppins)] font-semibold text-[#5b3fa3]">
            Get In Touch
          </h3>
          <p className="text-sm text-[#5b3fa3] mt-2">
            Dreaming in code? Let’s make it real.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-2 gap-y-10 gap-x-6 relative">
          {/* Vertical divider */}
          <div className="absolute left-1/2 top-0 h-full w-px bg-[#51367E40]" />
          {/* Horizontal divider */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-[#51367E40]" />

          {/* Ticket Raise */}
          <a
            href="https://site.growwincapital.com/help"
            className="flex flex-col items-center text-center gap-3"
          >
            <img src={Globe} className="w-9 h-9" />
            <p className="text-sm font-medium text-[#51367E]">Token Raise</p>
            <p className="text-xs text-gray-500">Click to Raise</p>
          </a>

          {/* Email */}
          <a
            href="mailto:info@growwincapital.com"
            className="flex flex-col items-center text-center gap-3"
          >
            <img src={Mail} className="w-9 h-9" />
            <p className="text-sm font-medium text-[#51367E]">Email Address</p>
            <p className="text-xs text-gray-500">info@growwincapital.com</p>
          </a>

          {/* Live Chat */}
          <a
            href="https://site.growwincapital.com/help"
            className="flex flex-col items-center text-center gap-3"
          >
            <img src={MessageCircle} className="w-9 h-9" />
            <p className="text-sm font-medium text-[#51367E]">Live Chat</p>
            <p className="text-xs text-gray-500">Open</p>
          </a>

          {/* Office */}
          <div className="flex flex-col items-center text-center gap-3">
            <img src={MapPin} className="w-9 h-9" />
            <p className="text-sm font-medium text-[#51367E]">Our Office</p>
            <p className="text-xs text-gray-500">Your full address</p>
          </div>
        </div>
      </section>

      <ContactUs />
      <Footer />
    </>
  );
};

export default Contact;

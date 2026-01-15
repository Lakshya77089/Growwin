const ContactUs = () => {
  return (
    <section className="w-full py-15 bg-[#F2F2F2] ">
      <div className="max-w-7xl mx-auto px-6">
        {/* ===== Heading ===== */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-[var(--font-poppins)]  font-medium text-[#2D2D2D]">
            Contact <span className="text-[#5b3fa3]">us</span>
          </h2>
        </div>

        {/* ===== Form ===== */}
        <div className="flex flex-col items-center">
          <div className="w-full flex flex-col md:flex-row gap-6 items-center">
            {/* Email */}
            <input
              type="email"
              placeholder="Enter your mail here"
              className="
                w-full md:w-[320px]
                h-[56px]
                px-6
                rounded-full
                border border-gray-300
                bg-white
                outline-none
                text-sm
                focus:border-[#5b3fa3]
              "
            />

            {/* Message */}
            <input
              type="text"
              placeholder="Enter your Message here"
              className="
                flex-1
                h-[56px]
                px-6
                rounded-full
                border border-gray-300
                outline-none
                bg-white
                text-sm
                focus:border-[#5b3fa3]
              "
            />

            {/* Button */}
            <button
              className="
                h-[56px]
                px-8
                rounded-full
                bg-[#5b3fa3]
                text-white
                text-sm
                font-medium
                hover:bg-[#4b347a]
                transition-colors
              "
            >
              Send mail
            </button>
          </div>

          {/* Note */}
          <p className="text-xs text-gray-500 mt-6 text-center max-w-3xl">
            Note : If you have any questions or need further information,
            please don&apos;t hesitate to contact us. We&apos;re here to help!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

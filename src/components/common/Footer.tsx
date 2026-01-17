// import FaMapMarkerAlt from "/footer/FaMapMarkerAlt.svg";
import FaEnvelope from "/footer/FaEnvelope.svg";
import FaPhoneAlt from "/footer/FaPhoneAlt.svg";
// import FaLinkedinIn from "/footer/FaLinkedinIn.svg";
import FaTwitter from "/footer/FaTwitter.svg";
import telegram from "/footer/telegram-32.png";
// import FaFacebookF from "/footer/FaFacebookF.svg";
// import Globe from "/token.svg";
const Footer = () => {
  return (
    <footer className="w-full py-20 bg-[#F2F2F2] ">
      <div className="max-w-7xl mx-auto px-6">
        {/* FOOTER CARD */}
        <div className="bg-gradient-to-br from-[#5b3fa3] to-[#3f2b73] rounded-[36px] px-12 py-14 text-white">
          {/* TOP GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* LEFT */}
            <div className="md:col-span-1">
              <h3 className="text-4xl font-[var(--font-poppins)]  font-semibold mb-4">
                Growwin
              </h3>
              <p className="text-sm text-white leading-relaxed font-[var(--font-poppins)]  font-regular max-w-lg">
                Growwin Capital believes that financial growth begins with the
                right mindset. We empower investors to take confident steps
                toward wealth creation through smart strategies, disciplined
                investing, and long-term vision across global markets.
              </p>

              {/* SOCIALS */}
              <div className="flex gap-4 mt-6">
                {/* <span className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center cursor-pointer hover:bg-white/30"> */}
                <a
                  href="https://t.me/growwincapital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block  transition-all duration-300 hover:bg-white/30"
                >
                  <img src={telegram} alt="X (Twitter)" />
                </a>
                {/* </span> */}
                {/* <span className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center cursor-pointer hover:bg-white/30"> */}
                <a
                  href="https://x.com/growwincapital?s=20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-0.5 rounded-full transition-all duration-300 hover:bg-white/30"
                >
                  <img src={FaTwitter} alt="X (Twitter)" />
                </a>

                {/* </span> */}
                {/* <span className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center cursor-pointer hover:bg-white/30"> */}
                {/* <img
                  src={FaLinkedinIn}
                  alt="LinkedIn"
                  className="cursor-pointer hover:bg-white/30 rounded-full"
                /> */}
                {/* </span> */}
              </div>
            </div>

            {/* MIDDLE */}
            <div className="md:pl-24">
              {/* <h4 className="text-lg font-poppins-semibold mb-4">Quick Links</h4>                                                                                                                                              */}
              <ul className="space-y-4 text-sm text-white/80 font-[var(--font-poppins)]  font-regular">
                <li className="hover:text-white cursor-pointer">Home</li>
                <li className="hover:text-white cursor-pointer">
                  Subscription
                </li>
                <li className="hover:text-white cursor-pointer">FAQ</li>
                <li className="hover:text-white cursor-pointer">Contact us</li>
                <li className="hover:text-white cursor-pointer">About us</li>
              </ul>
            </div>

            {/* RIGHT */}
            <div>
              {/* <h4 className="text-lg font-poppins-semibold mb-4">
                Contact Info
              </h4> */}
              <ul className="space-y-4 text-sm ">
                <a
                  href="https://site.growwincapital.com/help"
                  className="block"
                >
                  <li className="flex items-center gap-3 cursor-pointer">
                    <div className="border-1 rounded-full w-9 h-9 flex items-center justify-center">
                      <img src={FaPhoneAlt} alt="Phone" />
                    </div>

                    <div className="flex flex-col">
                      <span className="font-[var(--font-poppins)] font-medium">
                        Ticket Support
                      </span>
                    </div>
                  </li>
                </a>

                {/* <li className="flex items-center gap-3"> */}
                {/* <img src={FaPhoneAlt} alt="Phone" /> */}

                {/* </li> */}
                <a href="mailto:info@growwincapital.com" className="block">
                  <li className="flex items-center gap-3 cursor-pointer">
                    <div className="border-1 rounded-full w-9 h-9 flex items-center justify-center">
                      <img src={FaEnvelope} alt="Email" />
                    </div>

                    <span className="font-[var(--font-poppins)] font-medium">
                      info@growwincapital.com
                    </span>
                  </li>
                </a>

                {/* <li className="flex items-center gap-3">
                  <div className="border-1 rounded-full w-9 h-9 flex items-center justify-center">
                  <img src={FaMapMarkerAlt} alt="Location" />
                  </div>
                  <span className="font-[var(--font-poppins)]  font-medium">Your Address</span>
                </li> */}
              </ul>
            </div>
          </div>

          {/* DISCLAIMER */}
          <p className="textsm text-white/70 leading-relaxed font-[var(--font-poppins)]  font-regular mt-8">
            Growwin Capital offers investment services in forex, stocks,
            commodities, crypto, and real estate. All investments carry market
            risks, including possible loss of capital. Past performance is not a
            guarantee of future results. Fixed return plans are based on current
            strategies and market conditions, but extreme market movements can
            affect expected returns. By investing, clients accept that their
            funds may face risks from market volatility and economic changes. We
            encourage investors to evaluate their risk capacity before
            investing. Growwin Capital reserves the right to change or modify
            any investment plan, terms, fees, policies at any time based on
            market conditions or operational needs. Clients invest voluntarily,
            and Growwin Capital is not liable for financial losses caused by
            market fluctuations. Please review all policies and terms carefully
            before investing.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import FaMapMarkerAlt from "/footer/FaMapMarkerAlt.svg"
import FaEnvelope from "/footer/FaEnvelope.svg"
import FaPhoneAlt from "/footer/FaPhoneAlt.svg"
import FaLinkedinIn from "/footer/FaLinkedinIn.svg"
import FaTwitter from "/footer/FaTwitter.svg"
import FaFacebookF from "/footer/FaFacebookF.svg"
const Footer = () => {
  return (
    <footer className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* FOOTER CARD */}
        <div className="bg-gradient-to-br from-[#5b3fa3] to-[#3f2b73] rounded-[36px] px-12 py-14 text-white">
          {/* TOP GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* LEFT */}
            <div>
              <h3 className="text-2xl font-poppins-bold mb-4">Growwin</h3>
              <p className="text-sm text-white/80 leading-relaxed max-w-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                mi sapien, mollis vel sagittis in, pretium eget mauris. Integer
                efficitur sem eu massa sagittis sollicitudin.
              </p>

              {/* SOCIALS */}
              <div className="flex gap-4 mt-6">
                <span className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center cursor-pointer hover:bg-white/30">
                  <img src={FaFacebookF} alt="Facebook" className="w-4 h-4" />
                </span>
                <span className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center cursor-pointer hover:bg-white/30">
                  <img src={FaTwitter} alt="Twitter" />
                </span>
                <span className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center cursor-pointer hover:bg-white/30">
                  <img src={FaLinkedinIn} alt="LinkedIn" />
                </span>
              </div>
            </div>

            {/* MIDDLE */}
            <div>
              <h4 className="text-lg font-poppins-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3 text-sm text-white/80">
                <li className="hover:text-white cursor-pointer">Home</li>
                <li className="hover:text-white cursor-pointer">Subscription</li>
                <li className="hover:text-white cursor-pointer">FAQ</li>
                <li className="hover:text-white cursor-pointer">Contact us</li>
                <li className="hover:text-white cursor-pointer">About us</li>
              </ul>
            </div>

            {/* RIGHT */}
            <div>
              <h4 className="text-lg font-poppins-semibold mb-4">
                Contact Info
              </h4>
              <ul className="space-y-4 text-sm text-white/80">
                <li className="flex items-center gap-3">
                  <img src={FaPhoneAlt} alt="Phone" />
                  +91 XXXXXXXXXX
                </li>
                <li className="flex items-center gap-3">
                <img src={FaPhoneAlt} alt="Phone" />
                  +91 XXXXXXXXXX
                </li>
                <li className="flex items-center gap-3">
             <img src={FaEnvelope} alt="Email" />
                  yourmail@gmail.com
                </li>
                <li className="flex items-center gap-3">
       <img src={FaMapMarkerAlt} alt="Location" />
                  Your Address
                </li>
              </ul>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="h-px bg-white/20 my-10" />

          {/* DISCLAIMER */}
          <p className="text-xs text-white/70 leading-relaxed">
            Growwin Capital offers investment services in forex, stocks,
            commodities, crypto, and real estate. All investments carry market
            risks, including possible loss of capital. Past performance is not
            a guarantee of future results. Fixed return plans are based on
            current strategies and market conditions, but extreme market
            movements can affect expected returns. By investing, clients
            accept that their funds may face risks from market volatility and
            economic changes. We encourage investors to evaluate their risk
            capacity before investing. Growwin Capital reserves the right to
            change or modify any investment plan, terms, fees, policies at any
            time based on market conditions or operational needs. Clients
            invest voluntarily, and Growwin Capital is not liable for financial
            losses caused by market fluctuations. Please review all policies
            and terms carefully before investing.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

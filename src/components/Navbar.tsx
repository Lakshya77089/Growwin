const Navbar = () => {
  return (
    <div className="fixed top-0 left-3 right-3 w-full z-50">
      <div className="flex mx-10 items-center justify-between px-14 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2 text-growwin font-semibold text-[20px]">
          <img src="/growwin-logo.svg" alt="Growwin" className="w-9 h-9" />
          <span className="font-[var(--font-poppins)]  font-semibold text-2xl ">Growwin</span>
        </div>

        <div
          className="
    flex items-center gap-[30px]
    px-1.5 py-[6px]
    rounded-full
    border-1
    border-[#F2EDF8]
    bg-[#513382]/10
  "
        >
          {[
            "Home",
            "Subscription",
            "FAQ",
            "Contact us",
            "About us",
            "Blogs",
          ].map((item) => (
            <a
              key={item}
              className="
  px-4 py-1.5
  rounded-full
  text-base
  font-[var(--font-poppins)]  font-medium
  text-gray-700
  cursor-pointer
  transition-all duration-100
  hover:bg-growwin
  hover:text-[#F2EDF8]
  hover:shadow-[0_0_0_6px_#513382]
"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Login Button */}
        <button
          className="
            px-[22px] py-[10px]
            rounded-full
            bg-growwin
            text-[#F2EDF8]
            font-[var(--font-poppins)]  font-medium
          "
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;

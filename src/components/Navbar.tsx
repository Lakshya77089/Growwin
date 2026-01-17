const navItems = [
  { label: "Home", path: "/" },
  { label: "Subscription", path: "/subscription" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact us", path: "/contact" },
  { label: "About us", path: "/about" },
  { label: "Blogs", path: "/blogs" },
];
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-3 right-3 w-full z-50">
      <div className="flex mx-10 items-center justify-between px-14 py-4">

        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-growwin font-semibold text-[20px] cursor-pointer"
        >
          <img src="/growwin-logo.svg" alt="Growwin" className="w-9 h-9" />
          <span className="font-[var(--font-poppins)] font-semibold text-2xl">
            Growwin
          </span>
        </div>

        {/* Nav Items */}
        <div
          className="
            flex items-center gap-[30px]
            px-1.5 py-[6px]
            rounded-full
            border-1
            border-[#F2EDF8]
            bg-[#513382]/10
            backdrop-blur-lg
          "
        >
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) => `
                px-4 py-1.5
                rounded-full
                text-base
                font-[var(--font-poppins)] font-medium
                transition-all duration-150
                ${
                  isActive
                    ? "bg-growwin text-[#F2EDF8] shadow-[0_0_0_6px_#513382]"
                    : "text-gray-700 hover:bg-growwin hover:text-[#F2EDF8]"
                }
              `}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Login */}
        <button
          onClick={() => {
            window.location.href = "https://site.growwincapital.com";
          }}
          className="
            px-[22px] py-[10px]
            rounded-full
            bg-growwin
            text-[#F2EDF8]
            font-[var(--font-poppins)] font-medium
          "
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;

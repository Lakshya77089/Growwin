import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About us", path: "/about" },
  { label: "Subscription", path: "/subscription" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact us", path: "/contact" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#F2F2F2] lg:bg-transparent h-[80px] lg:h-[96px]">
      <div className="mx-4 lg:mx-10">
        <div className="flex items-center justify-between px-6 lg:py-4 py-6">

          {/* Logo */}
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img src="/growwin-logo.svg" alt="Growwin" className="w-9 h-9" />
            <span className="text-2xl font-semibold text-growwin">
              Growwin
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-[30px] px-1.5 py-[6px] rounded-full border border-[#F2EDF8] bg-[#513382]/10 backdrop-blur-lg">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-1.5 rounded-full text-base font-medium transition-all
                  ${
                    isActive
                      ? "bg-growwin text-white shadow-[0_0_0_6px_#513382]"
                      : "text-gray-700 hover:bg-growwin hover:text-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Desktop Login */}
          <button
            onClick={() =>
              (window.location.href = "https://site.growwincapital.com")
            }
            className="hidden lg:block px-6 py-2 rounded-full bg-growwin text-white font-medium"
          >
            Login
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
<div
  className={`
    lg:hidden
    absolute
    top-full
    left-0
    right-0
    z-40

    bg-[#F2F2F2]
    shadow-lg
    font-[var(--font-poppins)]
    rounded-b-2xl
    text-center
    px-6
    py-6
    space-y-4

    transform transition-all duration-300 ease-out
    ${open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"}
  `}
>
  {navItems.map((item) => (
    <NavLink
      key={item.label}
      to={item.path}
      onClick={() => setOpen(false)}
      className="block text-lg font-medium text-gray-700"
    >
      {item.label}
    </NavLink>
  ))}

  <button
    onClick={() =>
      (window.location.href = "https://site.growwincapital.com")
    }
    className="w-full mt-4 py-3 rounded-full bg-growwin text-white font-medium"
  >
    Login
  </button>
</div>

    </div>
  );
};

export default Navbar;

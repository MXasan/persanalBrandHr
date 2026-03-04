import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work With Me", href: "#services" },
  { label: "Posts", href: "#posts" },
  { label: "Newsletter", href: "#newsletter" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    setActiveLink(href);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-xl bg-[#FFD060] flex items-center justify-center">
            <span className="text-[#1C1C1E] text-sm font-extrabold">A</span>
          </div>
          <span
            className=" font-bold text-[1.05rem] text-[#1C1C1E]"
          >
            Nodir Makhkamov
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="font-medium text-[0.9375rem] relative text-[#6B7280] hover:text-[#1C1C1E] transition-colors duration-200 pb-1 group"
            >
              {link.label}
              {/* Yellow underline indicator */}
              <span
                className={`absolute -bottom-0.5 left-0 h-[2.5px] rounded-full bg-[#FFD060] transition-all duration-200 ${activeLink === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
              />
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#services")}
            className="font-bold text-[0.9375rem] px-5 py-2.5 bg-[#FFD060] text-[#1C1C1E] rounded-xl hover:bg-[#f5c832] transition-all duration-200 hover:shadow-md hover:-translate-y-px"
          >
            Work With Me
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#1C1C1E] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#F0F0EE] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`font-medium text-[1rem] text-left py-2 flex items-center gap-2 ${activeLink === link.href ? "text-[#1C1C1E]" : "text-[#6B7280]"}`}
            >
              {activeLink === link.href && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFD060]" />
              )}
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#services")}
            className="font-bold w-full bg-[#FFD060] text-[#1C1C1E] rounded-xl mt-2 px-3"
          >
            Work With Me
          </button>
        </div>
      )}
    </header>
  );
}
import { motion } from "motion/react";
import { Twitter, Linkedin, Instagram, Youtube, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work with me", href: "#services" },
  { label: "Posts", href: "#posts" },
  { label: "Newsletter", href: "#newsletter" },
];

const socials = [
  { icon: <Twitter size={18} />, label: "Twitter", href: "#" },
  { icon: <Linkedin size={18} />, label: "LinkedIn", href: "#" },
  { icon: <Instagram size={18} />, label: "Instagram", href: "#" },
  { icon: <Youtube size={18} />, label: "YouTube", href: "#" },
];

export function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t-4 border-[#FFD060] pt-16 pb-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12 mb-14"
        >
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-[#FFD060] flex items-center justify-center">
                <span className="text-[#1C1C1E] text-base" style={{  fontWeight: 800 }}>A</span>
              </div>
              <span
                className="text-[#1C1C1E]"
                style={{  fontWeight: 700, fontSize: "1.0625rem" }}
              >
                Alex Rivera
              </span>
            </div>
            <p
              className="text-[#9CA3AF] mb-6"
              style={{  fontWeight: 400, fontSize: "0.9375rem", lineHeight: 1.7 }}
            >
              Helping people find great tech careers
              <br />& build meaningful work.
            </p>

            {/* Socials — yellow hover */}
            <div className="flex items-center gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-xl bg-[#F5F5F3] text-[#9CA3AF] hover:bg-[#FFD060] hover:text-[#1C1C1E] flex items-center justify-center transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4
              className="text-[#1C1C1E] mb-5"
              style={{  fontWeight: 700, fontSize: "0.9375rem" }}
            >
              Navigate
            </h4>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-[#9CA3AF] hover:text-[#3B82F6] transition-colors duration-200"
                  style={{  fontWeight: 400, fontSize: "0.9375rem" }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-[#1C1C1E] mb-5"
              style={{  fontWeight: 700, fontSize: "0.9375rem" }}
            >
              Get in touch
            </h4>
            <p
              className="text-[#9CA3AF] mb-4"
              style={{  fontWeight: 400, fontSize: "0.9375rem", lineHeight: 1.7 }}
            >
              Want to collaborate, have me speak, or just say hi?
            </p>
            <a
              href="mailto:hello@alexrivera.co"
              className="inline-flex items-center gap-2 text-[#3B82F6] hover:text-[#2563EB] transition-colors"
              style={{  fontWeight: 600, fontSize: "0.9375rem" }}
            >
              hello@alexrivera.co
              <ArrowUpRight size={14} />
            </a>

            {/* Green availability badge */}
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-[#4ADE80]/15 rounded-xl border border-[#4ADE80]/25">
              <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse" />
              <span
                className="text-[#16a34a]"
                style={{ fontWeight: 600, fontSize: "0.8125rem" }}
              >
                Open to new opportunities
              </span>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#F0F0EE] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-[#C4C4BF]"
            style={{ fontWeight: 400, fontSize: "0.875rem" }}
          >
            © 2026 Alex Rivera. All rights reserved.
          </p>
          <p
            className="text-[#C4C4BF]"
            style={{ fontWeight: 400, fontSize: "0.875rem" }}
          >
            Built with ☕ & intention.
          </p>
        </div>
      </div>
    </footer>
  );
}
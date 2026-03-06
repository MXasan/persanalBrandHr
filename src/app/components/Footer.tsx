import { motion } from "motion/react";
import { Twitter, Linkedin, Youtube, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work with me", href: "#services" },
  { label: "Posts", href: "#posts" },
  { label: "Newsletter", href: "#newsletter" },
];

const socials = [
  { icon: <Twitter size={18} />, label: "Twitter", href: "#" },
  { icon: <Linkedin size={18} />, label: "LinkedIn", href: "#" },
  { icon: <Youtube size={18} />, label: "YouTube", href: "#" },
];

export function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t-4 border-yellow-400 pt-16 pb-10">
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
              <div className="w-9 h-9 rounded-xl bg-yellow-400 flex items-center justify-center">
                <span className="text-neutral-900 text-base font-extrabold">
                  A
                </span>
              </div>
              <span className="text-neutral-900 font-bold text-[1.0625rem]">
                Nodir Makhkamov
              </span>
            </div>

            <p className="text-gray-400 mb-6 text-[0.9375rem] leading-relaxed">
              Helping people find great tech careers
              <br />
              & build meaningful work.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-xl bg-neutral-100 text-gray-400 hover:bg-yellow-400 hover:text-neutral-900 flex items-center justify-center transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-neutral-900 mb-5 font-bold text-[0.9375rem]">
              Navigate
            </h4>

            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-gray-400 hover:text-blue-500 transition-colors duration-200 text-[0.9375rem]"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-neutral-900 mb-5 font-bold text-[0.9375rem]">
              Get in touch
            </h4>

            <p className="text-gray-400 mb-4 text-[0.9375rem] leading-relaxed">
              Want to collaborate, have me speak, or just say hi?
            </p>

            <a
              href="mailto:hello@alexrivera.co"
              className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors font-semibold text-[0.9375rem]"
            >
              hello@alexrivera.co
              <ArrowUpRight size={14} />
            </a>

            {/* Availability badge */}
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-green-400/15 rounded-xl border border-green-400/25">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-600 font-semibold text-sm">
                Open to new opportunities
              </span>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-neutral-400 text-sm">
            © 2026 Nodir Makhkamov. All rights reserved.
          </p>
          <p className="text-neutral-400 text-sm">
            Built with ☕ & intention.
          </p>
        </div>
      </div>
    </footer>
  );
}
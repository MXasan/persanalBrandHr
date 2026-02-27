import { motion } from "motion/react";
import { Briefcase, Search, Mic, Heart, ArrowRight } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: <Search size={22} />,
    topBorder: "#FFD060",
    iconBg: "#FFD06020",
    iconColor: "#D4A017",
    tag: "Job Seekers",
    tagBg: "#FFD06020",
    tagColor: "#9A7100",
    title: "Submit a Job Application",
    description:
      "Looking for your next role in tech? Submit your profile and I'll personally match you with opportunities that align with your skills, values, and goals.",
    cta: "Submit application",
    ctaColor: "#D4A017",
    highlight: false,
  },
  {
    icon: <Briefcase size={22} />,
    topBorder: "#FFD060",
    iconBg: "#FFD060",
    iconColor: "#1C1C1E",
    tag: "Companies",
    tagBg: "#FFD06030",
    tagColor: "#9A7100",
    title: "Hire Through Me",
    description:
      "Need world-class engineers, PMs, or data talent? I work with Series A to enterprise companies to find the right people — fast. No spray-and-pray.",
    cta: "Start hiring",
    ctaColor: "#1C1C1E",
    highlight: true,
  },
  {
    icon: <Mic size={22} />,
    topBorder: "#3B82F6",
    iconBg: "#3B82F610",
    iconColor: "#3B82F6",
    tag: "Events",
    tagBg: "#3B82F610",
    tagColor: "#3B82F6",
    title: "Book Me as a Speaker",
    description:
      "I speak on tech careers, productivity systems, and building intentional work. High-energy, practical, and always tailored to your audience.",
    cta: "Book a talk",
    ctaColor: "#3B82F6",
    highlight: false,
  },
  {
    icon: <Heart size={22} />,
    topBorder: "#4ADE80",
    iconBg: "#4ADE8015",
    iconColor: "#16a34a",
    tag: "Coaching",
    tagBg: "#4ADE8015",
    tagColor: "#16a34a",
    title: "Coaching Inquiry",
    description:
      "1:1 coaching for ambitious professionals who want to accelerate their career, build confidence, and create work that actually feels meaningful.",
    cta: "Explore coaching",
    ctaColor: "#16a34a",
    highlight: false,
  },
];

export function ServicesSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="services" className="bg-[#FAFAF8] py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header — yellow accent */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-[3px] w-10 bg-[#FFD060] rounded-full" />
          <span
            className="text-[#1C1C1E] uppercase tracking-widest"
            style={{  fontWeight: 700, fontSize: "0.8125rem" }}
          >
            Work with me
          </span>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-[#1C1C1E] max-w-lg"
            style={{
              
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            How I can help you
            <br />
            <span className="relative inline-block">
              move forward.
              <span className="absolute bottom-0.5 left-0 right-0 h-[6px] bg-[#FFD060]/60 -z-10 rounded-sm" />
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#9CA3AF] max-w-xs"
            style={{  fontWeight: 400, fontSize: "0.9375rem", lineHeight: 1.65 }}
          >
            Whether you're hiring, job seeking, or leveling up — I've got something for you.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onHoverStart={() => setHoveredIdx(idx)}
              onHoverEnd={() => setHoveredIdx(null)}
              className={`relative rounded-3xl p-6 border flex flex-col cursor-pointer transition-all duration-300 overflow-hidden ${
                service.highlight
                  ? "bg-[#1C1C1E] border-[#1C1C1E] text-white shadow-lg"
                  : "bg-white border-[#F0F0EE] hover:shadow-xl"
              } ${hoveredIdx === idx ? "-translate-y-2" : ""}`}
            >
              {/* Colored top border accent */}
              <div
                className="absolute top-0 left-0 right-0 h-[4px]"
                style={{ backgroundColor: service.topBorder }}
              />

              {/* Tag */}
              <span
                className="inline-block px-2.5 py-1 rounded-lg text-xs mb-5 self-start mt-2"
                style={{
                  
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  background: service.highlight ? "#FFFFFF18" : service.tagBg,
                  color: service.highlight ? "#FFD060" : service.tagColor,
                }}
              >
                {service.tag}
              </span>

              {/* Icon */}
              <div
                className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5"
                style={{
                  background: service.highlight ? "#FFD060" : service.iconBg,
                  color: service.highlight ? "#1C1C1E" : service.iconColor,
                }}
              >
                {service.icon}
              </div>

              {/* Content */}
              <h3
                className={`mb-3 ${service.highlight ? "text-white" : "text-[#1C1C1E]"}`}
                style={{
                  
                  fontWeight: 700,
                  fontSize: "1.0625rem",
                  lineHeight: 1.35,
                }}
              >
                {service.title}
              </h3>
              <p
                className={`mb-6 flex-1 ${service.highlight ? "text-white/60" : "text-[#6B7280]"}`}
                style={{  fontWeight: 400, fontSize: "0.875rem", lineHeight: 1.7 }}
              >
                {service.description}
              </p>

              {/* CTA button */}
              <button
                className={`flex items-center gap-2 group/btn px-4 py-2.5 rounded-xl transition-all duration-200 self-start ${
                  service.highlight
                    ? "bg-[#FFD060] text-[#1C1C1E] hover:bg-[#f5c832]"
                    : "border-2 hover:shadow-sm"
                }`}
                style={{
                  
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  borderColor: service.highlight ? "transparent" : service.topBorder,
                  color: service.highlight ? "#1C1C1E" : service.ctaColor,
                  backgroundColor: service.highlight ? "#FFD060" : `${service.topBorder}12`,
                }}
              >
                {service.cta}
                <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
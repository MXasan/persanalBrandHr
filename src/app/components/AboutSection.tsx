import { motion } from "motion/react";
import { MapPin, Award, TrendingUp, Users } from "lucide-react";

const PROFILE_IMG =
  "https://images.unsplash.com/photo-1760543998147-117ae5649c5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHNtaWxpbmclMjBjb25maWRlbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzIwMTk5ODV8MA&ixlib=rb-4.1.0&q=80&w=1080";

const stats = [
  {
    icon: <Users size={18} className="text-[#3B82F6]" />,
    value: "120+",
    label: "Companies hired for",
    sub: "From Series A to Fortune 500",
    accent: "#3B82F6",
    accentBg: "#3B82F610",
  },
  {
    icon: <Award size={18} className="text-[#D4A017]" />,
    value: "50+",
    label: "Talks given",
    sub: "Conferences & corporate events",
    accent: "#FFD060",
    accentBg: "#FFD06018",
  },
  {
    icon: <TrendingUp size={18} className="text-[#16a34a]" />,
    value: "2,400+",
    label: "Careers transformed",
    sub: "Through coaching & placements",
    accent: "#4ADE80",
    accentBg: "#4ADE8015",
  },
  {
    icon: <MapPin size={18} className="text-[#3B82F6]" />,
    value: "8 yrs",
    label: "In tech talent",
    sub: "Across 3 continents",
    accent: "#3B82F6",
    accentBg: "#3B82F610",
  },
];

// Role pills with brand color rotation
const roles = [
  { label: "Senior Technology Talent Partner", bg: "#FFD060/15", color: "#1C1C1E" },
  { label: "Entrepreneur", bg: "#3B82F6/10", color: "#3B82F6" },
  { label: "Productivity Expert", bg: "#FFD060/15", color: "#1C1C1E" },
  { label: "Growth Coach", bg: "#4ADE80/15", color: "#16a34a" },
  { label: "Speaker", bg: "#3B82F6/10", color: "#3B82F6" },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label — yellow accent bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-16"
        >
          <div className="h-[3px] w-10 bg-[#FFD060] rounded-full" />
          <span
            className="text-[#1C1C1E] uppercase tracking-widest"
            style={{ fontWeight: 700, fontSize: "0.8125rem" }}
          >
            About
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-md">
              <img
                src={PROFILE_IMG}
                alt="Alex Rivera"
                className="w-full h-full object-cover object-top"
              />
              {/* Overlay badge — green for availability */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#4ADE80]/20 flex items-center justify-center shrink-0">
                  <span className="text-white text-lg">🎤</span>
                </div>
                <div>
                  <p
                    className="text-[#1C1C1E]"
                    style={{ fontWeight: 700, fontSize: "0.875rem" }}
                  >
                    Open to speaking
                  </p>
                  <p
                    className="text-[#4ADE80]"
                    style={{fontWeight: 600, fontSize: "0.75rem" }}
                  >
                    Book me for your next event →
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative accents — yellow & blue */}
            <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-[#FFD060]/12 rounded-3xl -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#3B82F6]/10 rounded-2xl -z-10" />
          </motion.div>

          {/* Right: content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2
              className="text-[#1C1C1E] mb-4"
              style={{
                fontWeight: 800,
                fontSize: "clamp(1.875rem, 3vw, 2.75rem)",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}
            >
              Building bridges
              <br />
              between{" "}
              <span className="relative inline-block">
                talent & opportunity.
                <span className="absolute bottom-0.5 left-0 right-0 h-[6px] bg-[#FFD060]/60 -z-10 rounded-sm" />
              </span>
            </h2>

            {/* Role pills — brand color rotation */}
            <div className="flex flex-wrap gap-2 mb-6">
              {roles.map((role) => (
                <span
                  key={role.label}
                  className="px-3 py-1.5 rounded-full"
                  style={{
                    fontWeight: 600,
                    fontSize: "0.8125rem",
                    backgroundColor: role.bg.includes("/")
                      ? `${role.bg.split("/")[0]}${Math.round(parseInt(role.bg.split("/")[1]) * 2.55).toString(16).padStart(2, "0")}`
                      : role.bg,
                    color: role.color,
                    background: role.bg.replace("/15", "26").replace("/10", "1a"),
                  }}
                >
                  {role.label}
                </span>
              ))}
            </div>

            <p
              className="text-[#6B7280] mb-5"
              style={{fontWeight: 400, fontSize: "1.0625rem", lineHeight: 1.75 }}
            >
              I've spent the last 8 years at the intersection of technology and
              human potential — placing exceptional engineers, product managers,
              and data scientists at companies that actually care about their
              people.
            </p>
            <p
              className="text-[#6B7280] mb-10"
              style={{   fontWeight: 400, fontSize: "1.0625rem", lineHeight: 1.75 }}
            >
              Beyond recruiting, I run a coaching practice that helps ambitious
              professionals unlock their next level — whether that's landing a
              dream role, getting promoted, or building something of their own.
              I also speak at conferences about productivity, career growth, and
              building systems that actually work.
            </p>

            {/* Stats grid — each with brand color top border */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="relative bg-[#FAFAF8] rounded-2xl p-4 border border-[#F0F0EE] overflow-hidden hover:shadow-md transition-shadow duration-200"
                >
                  {/* Colored top border */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl" style={{ backgroundColor: stat.accent }} />
                  <div className="flex items-center gap-2 mb-1 mt-1">
                    {stat.icon}
                    <span
                      className="text-[#1C1C1E]"
                      style={{   fontWeight: 800, fontSize: "1.375rem" }}
                    >
                      {stat.value}
                    </span>
                  </div>
                  <p
                    className="text-[#1C1C1E]"
                    style={{   fontWeight: 600, fontSize: "0.875rem" }}
                  >
                    {stat.label}
                  </p>
                  <p
                    className="text-[#9CA3AF]"
                    style={{   fontWeight: 400, fontSize: "0.75rem" }}
                  >
                    {stat.sub}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
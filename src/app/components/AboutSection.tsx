import { motion } from "motion/react";
import { MapPin, Award, TrendingUp, Users } from "lucide-react";
// const PROFILE_IMG =
//   "https://images.unsplash.com/photo-1760543998147-117ae5649c5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHNtaWxpbmclMjBjb25maWRlbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzIwMTk5ODV8MA&ixlib=rb-4.1.0&q=80&w=1080";

const stats = [
  {
    icon: <Users size={18} className="text-blue-500" />,
    value: "10+",
    label: "Companies hired for",
    sub: "From Series A to Fortune 500",
    accent: "#3B82F6",
  },
  {
    icon: <Award size={18} className="text-yellow-500" />,
    value: "5+",
    label: "Talks given",
    sub: "Conferences & corporate events",
    accent: "#FFD060",
  },
  {
    icon: <TrendingUp size={18} className="text-green-600" />,
    value: "150+",
    label: "Careers transformed",
    sub: "Through coaching & placements",
    accent: "#4ADE80",
  },
  {
    icon: <MapPin size={18} className="text-red-500" />,
    value: "2 yrs",
    label: "In tech talent",
    sub: "Across 3 continents",
    accent: "#ff8080",
  },
];

const roles = [
  { label: "Senior Technology Talent Partner", className: "bg-yellow-400/15 text-neutral-900" },
  { label: "Entrepreneur", className: "bg-blue-500/10 text-blue-500" },
  { label: "Productivity Expert", className: "bg-yellow-400/15 text-neutral-900" },
  { label: "Growth Coach", className: "bg-green-400/15 text-green-600" },
  { label: "Speaker", className: "bg-blue-500/10 text-blue-500" },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-16"
        >
          <div className="h-[3px] w-10 bg-yellow-400 rounded-full" />
          <span className="text-neutral-900 uppercase tracking-widest font-bold text-sm">
            About
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-md">
              <img src="/profileImg.jpg" alt="Profile" className="w-full h-full object-cover object-top"/>

              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-400/20 flex items-center justify-center shrink-0">
                  <span className="text-lg">🎤</span>
                </div>
                <div>
                  <p className="font-bold text-sm text-neutral-900">
                    Open to speaking
                  </p>
                  <p className="font-semibold text-xs text-green-600">
                    Book me for your next event →
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-yellow-400/10 rounded-3xl -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-2xl -z-10" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="mb-4 font-extrabold text-[clamp(1.875rem,3vw,2.75rem)] leading-tight tracking-tight text-neutral-900">
              Building bridges
              <br />
              between{" "}
              <span className="relative inline-block">
                talent & opportunity.
                <span className="absolute bottom-1 left-0 right-0 h-[6px] bg-yellow-400/60 -z-10 rounded-sm" />
              </span>
            </h2>

            {/* Roles */}
            <div className="flex flex-wrap gap-2 mb-6">
              {roles.map((role) => (
                <span
                  key={role.label}
                  className={`px-3 py-1.5 rounded-full font-semibold text-sm ${role.className}`}
                >
                  {role.label}
                </span>
              ))}
            </div>

            <p className="text-gray-600 mb-5 text-[1.0625rem] leading-relaxed">
              I've spent the last 2 years at the intersection of technology and
              human potential — placing exceptional engineers, product managers,
              and data scientists at companies that actually care about their
              people.
            </p>

            <p className="text-gray-600 mb-10 text-[1.0625rem] leading-relaxed">
              Beyond recruiting, I run a coaching practice that helps ambitious
              professionals unlock their next level — whether that's landing a
              dream role, getting promoted, or building something of their own.
              I also speak at conferences about productivity, career growth, and
              building systems that actually work.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="relative bg-neutral-50 rounded-2xl p-4 border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                    style={{ backgroundColor: stat.accent }}
                  />

                  <div className="flex items-center gap-2 mb-1 mt-1">
                    {stat.icon}
                    <span className="font-extrabold text-lg text-neutral-900">
                      {stat.value}
                    </span>
                  </div>

                  <p className="font-semibold text-sm text-neutral-900">
                    {stat.label}
                  </p>
                  <p className="text-xs text-gray-400">
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
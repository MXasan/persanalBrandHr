import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface HeroSectionProps {
  onScrollTo: (id: string) => void;
}

export function HeroSection({ onScrollTo }: HeroSectionProps) {
  const stats = [
    { value: "120+", label: "Companies hired for", accent: "#FFD060" },
    { value: "50+", label: "Talks given", accent: "#3B82F6" },
    { value: "2,400+", label: "Careers transformed", accent: "#4ADE80" },
    { value: "8 yrs", label: "Industry experience", accent: "#FFD060" },
  ];

  return (
    <section className="min-h-screen bg-[#FAFAF8] flex items-center relative overflow-hidden pt-20">
      {/* Decorative blobs — yellow & blue */}
      <div className="absolute top-10 right-[-80px] w-[520px] h-[520px] rounded-full bg-[#FFD060]/18 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-[-80px] w-[400px] h-[400px] rounded-full bg-[#3B82F6]/10 blur-3xl pointer-events-none" />
      {/* Small green blob */}
      <div className="absolute top-1/2 left-1/3 w-[200px] h-[200px] rounded-full bg-[#4ADE80]/8 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="max-w-3xl">
          {/* Badge — yellow tint */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFD060]/20 rounded-full mb-8 border border-[#FFD060]/30"
          >
            <Sparkles size={14} className="text-[#D4A017]" />
            <span className="text-[#1C1C1E] font-semibold text-sm">
              Senior Technology Talent Partner & Entrepreneur
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#1C1C1E] mb-6 font-extrabold text-[clamp(2.5rem,5vw,4rem)] leading-[1.15] tracking-[-0.02em]"
          >
            Hi, I'm <span className="text-[#3B82F6]">Nodir Makhkamov.</span>
            <br />
            I help people find
            <br />
            <span className="relative inline-block">
              great tech careers.
              {/* Bold yellow highlight underline */}
              <span className="absolute bottom-0 left-0 right-0 h-[8px] bg-[#FFD060]/70 -z-10 rounded-sm" />
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#6B7280] mb-10 max-w-xl font-normal text-[1.1875rem] leading-[1.7]"
          >
            Helping people find great tech careers & build meaningful work.
            Productivity expert, growth coach, and speaker — passionate about
            unlocking potential.
          </motion.p>

          {/* CTAs — yellow primary, blue outline secondary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => onScrollTo("#services")}
              className="group flex items-center gap-2 px-7 py-4 bg-[#FFD060] text-[#1C1C1E] rounded-2xl hover:bg-[#f5c832] transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 font-bold text-base"
            >
              Work with me
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <button
              onClick={() => onScrollTo("#posts")}
              className="flex items-center gap-2 px-7 py-4 bg-white text-[#3B82F6] border-2 border-[#3B82F6]/30 rounded-2xl hover:border-[#3B82F6] hover:bg-[#3B82F6]/5 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 font-semibold text-base"
            >
              Read my posts
            </button>
          </motion.div>

          {/* Social proof stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 flex flex-wrap items-center gap-8"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-[#1C1C1E] font-extrabold text-2xl">
                  {stat.value}
                </span>
                <span className="text-[#9CA3AF] font-normal text-[0.8125rem]">
                  {stat.label}
                </span>
                <span
                  className="h-[3px] w-8 rounded-full mt-1.5"
                  style={{ backgroundColor: stat.accent }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating card preview — decorative */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2"
      >
        <div className="w-72 bg-white rounded-3xl p-6 shadow-xl border border-[#F0F0EE] rotate-2">
          {/* Yellow top border accent */}
          <div className="absolute top-0 left-6 right-6 h-[3px] bg-[#FFD060] rounded-b-full" />
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#FFD060]/20 flex items-center justify-center">
              <span className="text-lg">🚀</span>
            </div>
            <div>
              <p className="text-[#1C1C1E] font-bold text-sm">
                New Opportunity
              </p>
              <p className="text-[#9CA3AF] font-normal text-xs">
                Just matched
              </p>
            </div>
          </div>
          <p className="text-[#6B7280] mb-4 font-normal text-[0.8125rem] leading-[1.6]">
            Senior Software Engineer @ Series B Startup — Remote-first, $180k+
          </p>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] rounded-full text-xs font-semibold">
              React
            </span>
            <span className="px-3 py-1 bg-[#4ADE80]/15 text-[#16a34a] rounded-full text-xs font-semibold">
              Node.js
            </span>
          </div>
        </div>

        <div className="w-64 bg-white rounded-3xl p-5 shadow-lg border border-[#F0F0EE] mt-4 ml-8 -rotate-[1.5deg]">
          {/* Blue top border accent */}
          <div className="absolute top-0 left-5 right-5 h-[3px] bg-[#3B82F6] rounded-b-full" />
          <div className="flex items-center gap-2 mb-2">
            <span className="text-base">✨</span>
            <p className="text-[#1C1C1E] font-bold text-[0.8125rem]">
              Weekly Insight
            </p>
          </div>
          <p className="text-[#6B7280] font-normal text-[0.8125rem] leading-[1.6]">
            "Your network is your net worth — but your skills are your currency."
          </p>
        </div>
      </motion.div>
    </section>
  );
}
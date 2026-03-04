import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Sparkles, ArrowRight, CheckCircle } from "lucide-react";

const topics = [
  "💼 Career strategy",
  "⚡ Productivity systems",
  "🚀 Entrepreneurship",
  "🌱 Personal growth",
];

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="newsletter" className="bg-[#FAFAF8] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-[#FFD060] rounded-[32px] overflow-hidden"
        >
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-8 w-64 h-64 rounded-full bg-[#4ADE80]/20 blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-[#3B82F6]/10 blur-2xl pointer-events-none" />

          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1C1C1E]/10 rounded-full mb-8 border border-[#1C1C1E]/15">
                  <Sparkles size={14} className="text-[#1C1C1E]" />
                  <span className="text-[#1C1C1E] font-bold text-[0.8125rem]">
                    Weekly newsletter — coming soon
                  </span>
                </div>

                <h2 className="text-[#1C1C1E] mb-5 font-extrabold text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.15] tracking-[-0.02em]">
                  Get weekly insights on
                  <br />
                  careers, productivity
                  <br />& growth.
                </h2>

                <p className="text-[#1C1C1E]/70 mb-8 font-normal text-[1.0625rem] leading-[1.7]">
                  Every week, I share practical insights, behind-the-scenes
                  experiences from the recruiting world, and ideas to help you
                  do your best work.
                </p>

                <div className="flex flex-wrap gap-2">
                  {topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-4 py-2 bg-white/50 text-[#1C1C1E] rounded-xl border border-white/60 backdrop-blur-sm font-semibold text-[0.875rem]"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Side: Form */}
              <div>
                {!submitted ? (
                  <div className="bg-white rounded-3xl p-8 shadow-xl">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-[#FFD060]/25 flex items-center justify-center">
                        <Mail size={18} className="text-[#D4A017]" />
                      </div>
                      <div>
                        <p className="text-[#1C1C1E] font-bold text-base">
                          Join the waitlist
                        </p>
                        <p className="text-[#9CA3AF] font-normal text-[0.8125rem]">
                          Be first when it launches
                        </p>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-[#6B7280] mb-2 font-medium text-sm">
                          Your first name
                        </label>
                        <input
                          type="text"
                          placeholder="First name"
                          className="w-full px-4 py-3.5 bg-[#FAFAF8] border-2 border-[#F0F0EE] rounded-xl text-[#1C1C1E] placeholder-[#C4C4C0] focus:outline-none focus:border-[#FFD060] transition-colors font-normal text-[0.9375rem]"
                        />
                      </div>
                      <div>
                        <label className="block text-[#6B7280] mb-2 font-medium text-sm">
                          Email address
                        </label>
                        <input
                          type="email"
                          placeholder="you@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full px-4 py-3.5 bg-[#FAFAF8] border-2 border-[#F0F0EE] rounded-xl text-[#1C1C1E] placeholder-[#C4C4C0] focus:outline-none focus:border-[#FFD060] transition-colors font-normal text-[0.9375rem]"
                        />
                      </div>
                      <button
                        type="submit"
                        className="group w-full flex items-center justify-center gap-2 py-4 bg-[#1C1C1E] text-white rounded-xl hover:bg-[#333] transition-all duration-200 mt-2 hover:shadow-md font-bold text-base"
                      >
                        Subscribe — It's free
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </form>

                    <p className="text-center text-[#C4C4C0] mt-4 font-normal text-[0.8125rem]">
                      No spam. Unsubscribe anytime. 🌿
                    </p>
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white rounded-3xl p-8 shadow-xl text-center flex flex-col items-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#4ADE80]/20 flex items-center justify-center mb-5">
                      <CheckCircle size={28} className="text-[#16a34a]" />
                    </div>
                    <h3 className="text-[#1C1C1E] mb-2 font-bold text-xl">
                      You're on the list! 🎉
                    </h3>
                    <p className="text-[#6B7280] font-normal text-[0.9375rem] leading-[1.65]">
                      Thank you for signing up. I'll notify you as soon as the
                      newsletter launches. Stay curious!
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
import { useState } from "react";
import { motion } from "motion/react";
import { Clock, ArrowRight, BookOpen } from "lucide-react";
const POSTS = [
  {
    id: 1,
    title: "How to Stand Out in a Tech Interview Without Being a 10x Programmer",
    excerpt: "Most candidates focus on DSA prep, but the real differentiator? How you think, communicate, and collaborate under pressure.",
    image: "https://images.unsplash.com/photo-1768796372362-05c256e61d8c?auto=format&fit=crop&q=70&w=600",
    date: "Feb 18, 2026",
    readTime: "6 min read",
    tag: "career",
    tagLabel: "Career",
  },
  {
    id: 2,
    title: "The Productivity Stack I Actually Use Every Day (Minimal & Effective)",
    excerpt: "After testing dozens of apps and systems, here's what stuck — and why the simpler your setup, the more you actually get done.",
    image: "https://images.unsplash.com/photo-1760604359590-0f0dc7dbbf3c?auto=format&fit=crop&q=70&w=600",
    date: "Feb 10, 2026",
    readTime: "8 min read",
    tag: "productivity",
    tagLabel: "Productivity",
  },
  {
    id: 3,
    title: "From Employee to Entrepreneur: What Nobody Tells You About the Leap",
    excerpt: "The jump from a stable salary to building something of your own is terrifying and exhilarating. Here's what I wish I'd known.",
    image: "https://images.unsplash.com/photo-1758873271835-0ab4b611e659?auto=format&fit=crop&q=70&w=600",
    date: "Jan 28, 2026",
    readTime: "10 min read",
    tag: "entrepreneurship",
    tagLabel: "Entrepreneurship",
  },
  {
    id: 4,
    title: "The Morning Routine That's Quietly Changed My Life",
    excerpt: "Not a 5am wake-up call or an ice bath. Just a few anchoring habits that compound over time.",
    image: "https://images.unsplash.com/photo-1589221475596-7133b597dc21?auto=format&fit=crop&q=70&w=600",
    date: "Jan 15, 2026",
    readTime: "5 min read",
    tag: "growth",
    tagLabel: "Growth",
  },
];
const TAGS = [
  { id: "all", label: "All Posts" },
  { id: "career", label: "Career" },
  { id: "productivity", label: "Productivity" },
  { id: "entrepreneurship", label: "Entrepreneurship" },
  { id: "growth", label: "Growth" },
];

const tagColors: Record<string, { bg: string; text: string; border: string }> = {
  career: { bg: "#3B82F614", text: "#2563EB", border: "#3B82F630" },
  productivity: { bg: "#FFD06020", text: "#9A7100", border: "#FFD06040" },
  entrepreneurship: { bg: "#FFD06015", text: "#9A7100", border: "#FFD06030" },
  growth: { bg: "#4ADE8018", text: "#16a34a", border: "#4ADE8035" },
};

const filterColors: Record<string, string> = {
  career: "#3B82F6",
  productivity: "#FFD060",
  entrepreneurship: "#FFD060",
  growth: "#4ADE80",
};

export function PostsSection() {
  const [activeTag, setActiveTag] = useState("all");

  const filtered =
    activeTag === "all" ? POSTS : POSTS.filter((p) => p.tag === activeTag);

  return (
    <section id="posts" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-[3px] w-10 bg-[#FFD060] rounded-full" />
          <span className="text-[#1C1C1E] uppercase tracking-widest font-bold text-[0.8125rem]">
            Posts & content
          </span>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-[#1C1C1E] font-extrabold text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.2] tracking-[-0.02em]"
          >
            Ideas worth thinking about.
          </motion.h2>

          {/* Tag filters */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap gap-2"
          >
            {TAGS.map((tag) => {
              const isActive = activeTag === tag.id;
              const accentColor = tag.id === "all" ? "#FFD060" : filterColors[tag.id] || "#FFD060";
              return (
                <button
                  key={tag.id}
                  onClick={() => setActiveTag(tag.id)}
                  className={`px-4 py-1.5 rounded-full border-2 transition-all duration-200 text-sm ${isActive ? "font-bold" : "font-medium"
                    }`}
                  style={{
                    backgroundColor: isActive ? accentColor : "white",
                    borderColor: isActive ? accentColor : "#E8E8E6",
                    color: isActive ? (accentColor === "#FFD060" ? "#1C1C1E" : "white") : "#6B7280",
                  }}
                >
                  {tag.label}
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post, idx) => {
            const tc = tagColors[post.tag] || tagColors.career;
            return (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.07 }}
                className="group bg-white rounded-3xl overflow-hidden border-2 border-[#F0F0EE] hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col border-t-[3px]"
                style={{
                  borderTopColor: tc.border.replace(/30|35|40/, "60"),
                }}
              >
                {/* Cover */}
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span
                    className="absolute top-4 left-4 px-3 py-1 rounded-full font-bold text-[0.75rem] bg-white/90 backdrop-blur-sm"
                    style={{
                      color: tc.text,
                      border: `1.5px solid ${tc.border}`,
                    }}
                  >
                    {post.tagLabel}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[#9CA3AF] font-normal text-[0.8125rem]">
                      {post.date}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-[#D1D5DB]" />
                    <span className="flex items-center gap-1 text-[#9CA3AF] font-normal text-[0.8125rem]">
                      <Clock size={11} />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-[#1C1C1E] mb-3 group-hover:text-[#3B82F6] transition-colors duration-200 flex-1 font-bold text-[1.0625rem] leading-[1.45]">
                    {post.title}
                  </h3>

                  <p className="text-[#9CA3AF] mb-5 font-normal text-sm leading-[1.65]">
                    {post.excerpt}
                  </p>

                  <button className="flex items-center gap-2 text-[#3B82F6] group/btn hover:text-[#2563EB] transition-colors font-semibold text-sm">
                    <BookOpen size={14} />
                    Read post
                    <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 bg-[#FFD060] text-[#1C1C1E] rounded-2xl hover:bg-[#f5c832] transition-all duration-200 hover:shadow-lg hover:-translate-y-px font-bold text-[0.9375rem]">
            View all posts
          </button>
        </motion.div>
      </div>
    </section>
  );
}
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { PostsSection } from "./components/PostsSection";
import { NewsletterSection } from "./components/NewsletterSection";
import { Footer } from "./components/Footer";

const handleScrollTo = (id: string) => {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function App() {
  return (
    <div
      className="min-h-screen bg-[#FAFAF8]"
    >
      <Navbar />
      <main>
        <HeroSection onScrollTo={handleScrollTo} />
        <AboutSection />
        <ServicesSection />
        <PostsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}

import AboutPreview from "@/components/AboutPreview";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PortfolioPreview from "@/components/PortfolioPreview";
import Services from "@/components/ServicesPreview";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <PortfolioPreview />
        <AboutPreview />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}

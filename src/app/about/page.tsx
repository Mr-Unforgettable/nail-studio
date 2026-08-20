import AboutMain from "@/components/AboutMain";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <main className="flex-1">
        <AboutMain />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}

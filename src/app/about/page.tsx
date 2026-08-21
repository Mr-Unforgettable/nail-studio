import AboutMain from "@/components/AboutMain";
import Accordion from "@/components/Accordion";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import MissionVision from "@/components/MissionVision";
import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <main className="flex-1">
        <AboutMain />
        <MissionVision />
        <Accordion />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}

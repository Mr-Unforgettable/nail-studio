import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Policies from "@/components/Policies";

export default function Services() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <main className="flex-1">
        <h1>Services</h1>
        <Policies />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}

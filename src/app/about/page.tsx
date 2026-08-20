import AboutMain from "@/components/AboutMain";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Policies from "@/components/Policies";

export default function About() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <main className="flex-1">
        <AboutMain />
      </main>
      <Policies />
      <Footer />
    </div>
  );
}

import Navbar from "@/components/Navbar";
import PortfolioMain from "@/components/PortfolioMain";
import Policies from "@/components/Policies";
import Footer from "@/components/Footer";

export default function Portfolio() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <main className="flex-1">
        <PortfolioMain />
      </main>
      <Policies />
      <Footer />
    </div>
  );
}

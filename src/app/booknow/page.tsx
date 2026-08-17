import Navbar from "@/components/Navbar";
import Policies from "@/components/Policies";
import Footer from "@/components/Footer";

export default function BookNow() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <main className="flex-1">
        <Policies />
        <Footer />
      </main>
    </div>
  );
}

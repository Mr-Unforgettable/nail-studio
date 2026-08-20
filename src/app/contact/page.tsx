import ContactForm from "@/components/ContactForm";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Status from "@/components/Status";

export default function Contact() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <main className="flex-1">
        <ContactForm />
        <Status />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}

import Navbar from "@/components/Navbar";
import Policies from "@/components/Policies";
import Footer from "@/components/Footer";
import Booking from "@/components/Booking";
import BookingCalendar from "@/components/BookingCalendar";

export default function BookNow() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <main className="flex-1">
        <Booking />
        <BookingCalendar />
        <Policies />
      </main>
      <Footer />
    </div>
  );
}

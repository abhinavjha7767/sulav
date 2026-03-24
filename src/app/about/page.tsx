import { Navbar } from "@/src/components/Navbar";
import { Footer } from "@/src/components/Footer";
import { AboutPage } from "@/src/components/AboutPage";

export default function AboutRoute() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AboutPage />
      <Footer />
    </main>
  );
}

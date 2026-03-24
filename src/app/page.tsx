import { Navbar } from "@/src/components/Navbar";
import { Hero } from "@/src/components/Hero";
import { About } from "@/src/components/About";
import { WhyChooseUs } from "@/src/components/WhyChooseUs";
import { Categories } from "@/src/components/Categories";
import { Testimonials } from "@/src/components/Testimonials";
import { Contact } from "@/src/components/Contact";
import { Footer } from "@/src/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <Categories />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

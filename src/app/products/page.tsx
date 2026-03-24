import { Navbar } from "@/src/components/Navbar";
import { Footer } from "@/src/components/Footer";
import { ProductPage } from "@/src/components/ProductPage";
import { Products } from "@/src/components/Products";

export default function ProductsRoute() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ProductPage />
      <Products />
      <Footer />
    </main>
  );
}

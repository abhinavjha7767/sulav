import { Navbar } from "@/src/components/Navbar";
import { Footer } from "@/src/components/Footer";
import ProductPage from "../../components/ProductPage";
import Products from "../../components/Products";

export default function ProductsRoute() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <ProductPage />
      <div className="pb-24">
        <Products />
      </div>
      <Footer />
    </main>
  );
}

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import ProductShowcase from "@/components/ProductShowcase";
import Craftsmanship from "@/components/Craftsmanship";
import Exclusivity from "@/components/Exclusivity";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <Collections />
      <ProductShowcase />
      <Craftsmanship />
      <Exclusivity />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default Index;

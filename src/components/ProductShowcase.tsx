import ScrollReveal from "./ScrollReveal";
import prod1 from "@/assets/product-1.jpg";
import prod2 from "@/assets/product-2.jpg";
import prod3 from "@/assets/product-3.jpg";
import prod4 from "@/assets/product-4.jpg";

const products = [
  { name: "Pendente Solaris", price: "R$ 12.800", img: prod1 },
  { name: "Argolas Lumière", price: "R$ 8.400", img: prod2 },
  { name: "Sinete Sovereign", price: "R$ 9.600", img: prod3 },
  { name: "Bracelete Éternité", price: "R$ 15.200", img: prod4 },
];

const ProductShowcase = () => {
  return (
    <section className="bg-noir py-20 md:py-32">
      <ScrollReveal>
        <div className="text-center mb-16 md:mb-24">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-sans font-light">Seleção</span>
          <h2 className="font-serif text-cream text-3xl md:text-5xl lg:text-6xl mt-4 tracking-[0.02em]">
            Peças em Destaque
          </h2>
        </div>
      </ScrollReveal>

      <div className="section-padding grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {products.map((product, i) => (
          <ScrollReveal key={product.name} delay={i * 150}>
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6 aspect-square bg-noir-soft">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-noir/0 group-hover:bg-noir/30 transition-all duration-700 flex items-center justify-center">
                  <span className="text-cream text-xs tracking-[0.3em] uppercase font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-y-4 group-hover:translate-y-0">
                    Visualizar
                  </span>
                </div>
              </div>
              <h3 className="font-serif text-cream text-lg mb-1">{product.name}</h3>
              <p className="text-cream/50 text-xs tracking-[0.15em] font-sans font-light">{product.price}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default ProductShowcase;

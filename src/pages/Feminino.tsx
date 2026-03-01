import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

import heroImg from "@/assets/feminino-hero.jpg";
import editorialImg from "@/assets/feminino-editorial.jpg";
import auroraImg from "@/assets/feminino-aurora.jpg";

import femRing1 from "@/assets/fem-ring-1.jpg";
import femRing2 from "@/assets/fem-ring-2.jpg";
import femNecklace1 from "@/assets/fem-necklace-1.jpg";
import femNecklace2 from "@/assets/fem-necklace-2.jpg";
import femBracelet1 from "@/assets/fem-bracelet-1.jpg";
import femBracelet2 from "@/assets/fem-bracelet-2.jpg";
import femEarring1 from "@/assets/fem-earring-1.jpg";
import femEarring2 from "@/assets/fem-earring-2.jpg";

interface Product {
  name: string;
  material: string;
  price: string;
  img: string;
  category: string;
  description: string;
  materials: string[];
}

const products: Product[] = [
  { name: "Anel Solstice", material: "Ouro 18k com Diamantes", price: "R$ 14.800", img: femRing1, category: "Anéis", description: "Um solitário clássico reinventado com pavê de diamantes, simbolizando a luz eterna do solstício.", materials: ["Ouro 18k", "Ouro Rosé", "Prata"] },
  { name: "Anel Pétale", material: "Ouro 18k com Brilhantes", price: "R$ 6.200", img: femRing2, category: "Anéis", description: "Delicadeza em cada detalhe. Uma fileira de brilhantes que dança ao redor do dedo.", materials: ["Ouro 18k", "Ouro Rosé", "Prata"] },
  { name: "Colar Fleur", material: "Ouro 18k com Diamante", price: "R$ 18.500", img: femNecklace1, category: "Colares", description: "Inspirado nas flores douradas de Versalhes, um pendente que captura a essência da feminilidade.", materials: ["Ouro 18k", "Ouro Rosé", "Prata"] },
  { name: "Colar Goutte", material: "Ouro 18k com Diamante Pera", price: "R$ 22.000", img: femNecklace2, category: "Colares", description: "Uma gota perfeita de diamante suspensa em ouro. Simplicidade que hipnotiza.", materials: ["Ouro 18k", "Ouro Rosé", "Prata"] },
  { name: "Pulseira Éclat", material: "Ouro 18k com Diamantes", price: "R$ 24.600", img: femBracelet1, category: "Pulseiras", description: "Cada elo é uma constelação de diamantes. Uma obra-prima para o pulso.", materials: ["Ouro 18k", "Ouro Rosé", "Prata"] },
  { name: "Pulseira Rosée", material: "Ouro Rosé 18k com Diamante", price: "R$ 12.400", img: femBracelet2, category: "Pulseiras", description: "Ouro rosé e diamante central em harmonia delicada. Elegância que se revela nos detalhes.", materials: ["Ouro 18k", "Ouro Rosé", "Prata"] },
  { name: "Brincos Larme", material: "Ouro 18k com Diamantes Pavê", price: "R$ 16.800", img: femEarring1, category: "Brincos", description: "Gotas de ouro cravejadas de diamantes. Cada movimento revela um brilho novo.", materials: ["Ouro 18k", "Ouro Rosé", "Prata"] },
  { name: "Brincos Cercle", material: "Ouro 18k com Diamantes", price: "R$ 9.600", img: femEarring2, category: "Brincos", description: "Argolas contemporâneas com pavê de diamantes. Clássico e moderno em perfeita harmonia.", materials: ["Ouro 18k", "Ouro Rosé", "Prata"] },
];

const categories = ["Todos", "Anéis", "Colares", "Pulseiras", "Brincos"];

const Feminino = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedMaterial, setSelectedMaterial] = useState(0);

  const filtered = activeCategory === "Todos" ? products : products.filter((p) => p.category === activeCategory);

  return (
    <main className="overflow-x-hidden">
      <Header />

      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Mulher elegante usando joias finas de ouro" className="w-full h-full object-cover animate-slow-zoom" />
          <div className="absolute inset-0 bg-noir/40" />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <ScrollReveal delay={300}>
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-sans font-light mb-4 block">AUREA Maison</span>
            <h1 className="font-serif text-cream text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-[0.05em] leading-tight mb-6">
              Essência Feminina
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={600}>
            <p className="text-cream/70 text-xs sm:text-sm tracking-[0.2em] uppercase font-sans font-light mb-12 max-w-lg">
              Peças criadas para celebrar força, delicadeza e presença
            </p>
          </ScrollReveal>
          <ScrollReveal delay={900}>
            <a href="#colecao" className="btn-gold">Explorar Coleção</a>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in" style={{ animationDelay: "2s" }}>
          <span className="text-cream/40 text-[10px] tracking-[0.3em] uppercase font-sans">Scroll</span>
          <div className="w-px h-8 bg-cream/20 relative overflow-hidden">
            <div className="w-full h-1/2 bg-gold animate-bounce" />
          </div>
        </div>
      </section>

      {/* Editorial Intro */}
      <section className="bg-cream py-20 md:py-32">
        <div className="section-padding grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <ScrollReveal>
            <div className="aspect-[4/5] overflow-hidden">
              <img src={editorialImg} alt="Joias femininas em seda" className="w-full h-full object-cover" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="flex flex-col justify-center">
              <span className="text-gold text-xs tracking-[0.3em] uppercase font-sans font-light mb-6">Filosofia</span>
              <h2 className="font-serif text-foreground text-3xl md:text-4xl lg:text-5xl leading-tight mb-8">
                A joia certa não completa um visual. Ela revela quem você é.
              </h2>
              <p className="text-stone text-sm font-sans font-light leading-relaxed max-w-md">
                Cada peça da coleção feminina AUREA é desenhada para transcender tendências. São criações atemporais que celebram a essência de quem as usa.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Product Grid */}
      <section id="colecao" className="bg-cream py-20 md:py-32">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-sans font-light">Coleção</span>
            <h2 className="font-serif text-foreground text-3xl md:text-5xl mt-4">Peças Femininas</h2>
          </div>
        </ScrollReveal>

        {/* Category Filter */}
        <div className="flex justify-center gap-6 md:gap-10 mb-16 flex-wrap section-padding">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs tracking-[0.2em] uppercase font-sans font-light transition-all duration-500 pb-1 border-b ${
                activeCategory === cat ? "text-gold border-gold" : "text-stone border-transparent hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="section-padding grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {filtered.map((product, i) => (
            <ScrollReveal key={product.name} delay={i * 100}>
              <div className="group cursor-pointer" onClick={() => { setSelectedProduct(product); setSelectedMaterial(0); }}>
                <div className="relative overflow-hidden mb-6 aspect-square bg-cream-dark">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-noir/0 group-hover:bg-noir/20 transition-all duration-700 flex items-center justify-center">
                    <span className="text-cream text-xs tracking-[0.3em] uppercase font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      Ver detalhes
                    </span>
                  </div>
                </div>
                <h3 className="font-serif text-foreground text-lg mb-1">{product.name}</h3>
                <p className="text-stone text-[11px] tracking-[0.1em] font-sans font-light mb-1">{product.material}</p>
                <p className="text-gold text-xs tracking-[0.15em] font-sans font-light">{product.price}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Product Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-4xl bg-cream border-none p-0 gap-0">
          <button
            onClick={() => setSelectedProduct(null)}
            className="absolute right-4 top-4 z-10 text-foreground/60 hover:text-foreground transition-colors"
          >
            <X size={20} strokeWidth={1} />
          </button>
          {selectedProduct && (
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="aspect-square overflow-hidden bg-cream-dark">
                <img
                  src={selectedProduct.img}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s]"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans font-light mb-3">{selectedProduct.category}</span>
                <h3 className="font-serif text-foreground text-2xl md:text-3xl mb-2">{selectedProduct.name}</h3>
                <p className="text-gold text-sm tracking-[0.15em] font-sans font-light mb-6">{selectedProduct.price}</p>
                <p className="text-stone text-sm font-sans font-light leading-relaxed mb-8">{selectedProduct.description}</p>

                <div className="mb-8">
                  <span className="text-foreground text-[10px] tracking-[0.2em] uppercase font-sans font-light mb-3 block">Material</span>
                  <div className="flex gap-3">
                    {selectedProduct.materials.map((mat, i) => (
                      <button
                        key={mat}
                        onClick={() => setSelectedMaterial(i)}
                        className={`text-[11px] tracking-[0.15em] font-sans font-light px-4 py-2 border transition-all duration-500 ${
                          selectedMaterial === i
                            ? "border-gold text-gold"
                            : "border-foreground/10 text-stone hover:border-foreground/30"
                        }`}
                      >
                        {mat}
                      </button>
                    ))}
                  </div>
                </div>

                <button className="btn-gold-solid w-full text-center mb-4">Adicionar à seleção</button>
                <p className="text-stone text-[10px] tracking-[0.15em] font-sans font-light text-center">
                  Peça disponível sob encomenda.
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Featured Collection Aurora */}
      <section className="bg-cream py-20 md:py-32">
        <div className="section-padding">
          <ScrollReveal>
            <div className="relative overflow-hidden aspect-[21/9] md:aspect-[3/1]">
              <img src={auroraImg} alt="Coleção Aurora - conjunto de joias inspiradas no nascer do sol" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-noir/30 flex flex-col items-center justify-center text-center px-6">
                <span className="text-gold text-xs tracking-[0.3em] uppercase font-sans font-light mb-4">Nova Coleção</span>
                <h2 className="font-serif text-cream text-3xl md:text-5xl lg:text-6xl mb-4">Coleção Aurora</h2>
                <p className="text-cream/70 text-xs tracking-[0.2em] uppercase font-sans font-light mb-8 max-w-md">
                  Inspirada na luz dourada do amanhecer, cada peça captura a promessa de um novo dia
                </p>
                <a href="#" className="btn-gold">Descobrir</a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Impact Quote */}
      <section className="bg-cream py-24 md:py-40">
        <div className="section-padding text-center">
          <ScrollReveal>
            <h2 className="font-serif text-foreground text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight max-w-4xl mx-auto">
              Elegância não se impõe. Ela se revela.
            </h2>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Feminino;

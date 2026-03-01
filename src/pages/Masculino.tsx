import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

import heroImg from "@/assets/masculino-hero.jpg";
import conceptImg from "@/assets/masculino-concept.jpg";
import limitedImg from "@/assets/masculino-limited.jpg";

import mascRing1 from "@/assets/masc-ring-1.jpg";
import mascRing2 from "@/assets/masc-ring-2.jpg";
import mascBracelet1 from "@/assets/masc-bracelet-1.jpg";
import mascBracelet2 from "@/assets/masc-bracelet-2.jpg";
import mascChain1 from "@/assets/masc-chain-1.jpg";
import mascChain2 from "@/assets/masc-chain-2.jpg";
import mascWatch1 from "@/assets/masc-watch-1.jpg";
import mascWatch2 from "@/assets/masc-watch-2.jpg";

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
  { name: "Sinete Sovereign", material: "Ouro Amarelo 18k", price: "R$ 11.200", img: mascRing1, category: "Anéis", description: "Um sinete clássico com acabamento acetinado. Presença discreta e atemporal.", materials: ["Ouro Amarelo", "Ouro Negro", "Prata Escovada"] },
  { name: "Anel Obsidian", material: "Ouro Negro com Ônix", price: "R$ 15.800", img: mascRing2, category: "Anéis", description: "Ouro negro e ônix em uma composição que exala poder e sofisticação.", materials: ["Ouro Amarelo", "Ouro Negro", "Prata Escovada"] },
  { name: "Pulseira Titan", material: "Ouro Amarelo 18k", price: "R$ 28.400", img: mascBracelet1, category: "Pulseiras", description: "Elos robustos em ouro maciço. Uma declaração de presença silenciosa.", materials: ["Ouro Amarelo", "Ouro Negro", "Prata Escovada"] },
  { name: "Bracelete Forge", material: "Prata Escovada 925", price: "R$ 8.600", img: mascBracelet2, category: "Pulseiras", description: "Minimalismo industrial. Prata escovada com acabamento perfeito.", materials: ["Ouro Amarelo", "Ouro Negro", "Prata Escovada"] },
  { name: "Corrente Imperium", material: "Ouro Amarelo 18k", price: "R$ 34.000", img: mascChain1, category: "Correntes", description: "Elos Cuban Link em ouro maciço. Para homens que não precisam de palavras.", materials: ["Ouro Amarelo", "Ouro Negro", "Prata Escovada"] },
  { name: "Corrente Medallion", material: "Ouro Amarelo 18k", price: "R$ 19.600", img: mascChain2, category: "Correntes", description: "Pingente medalhão com gravação artesanal em corrente fina de ouro.", materials: ["Ouro Amarelo", "Ouro Negro", "Prata Escovada"] },
  { name: "Relógio Aurum", material: "Ouro Amarelo 18k", price: "R$ 85.000", img: mascWatch1, category: "Relógios", description: "Cronógrafo em ouro com mostrador negro. O tempo medido em excelência.", materials: ["Ouro Amarelo", "Ouro Negro", "Prata Escovada"] },
  { name: "Relógio Chronos", material: "Aço e Prata Escovada", price: "R$ 42.000", img: mascWatch2, category: "Relógios", description: "Prata escovada e precisão suíça. Elegância mecânica no pulso.", materials: ["Ouro Amarelo", "Ouro Negro", "Prata Escovada"] },
];

const categories = ["Todos", "Anéis", "Pulseiras", "Correntes", "Relógios"];

const Masculino = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedMaterial, setSelectedMaterial] = useState(0);

  const filtered = activeCategory === "Todos" ? products : products.filter((p) => p.category === activeCategory);

  return (
    <main className="overflow-x-hidden">
      <Header />

      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden bg-noir">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Homem elegante usando anel e relógio de ouro" className="w-full h-full object-cover animate-slow-zoom" />
          <div className="absolute inset-0 bg-noir/50" />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <ScrollReveal delay={300}>
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-sans font-light mb-4 block">AUREA Maison</span>
            <h1 className="font-serif text-cream text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-[0.05em] leading-tight mb-6">
              Força que se expressa<br />nos detalhes
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={600}>
            <p className="text-cream/70 text-xs sm:text-sm tracking-[0.2em] uppercase font-sans font-light mb-12 max-w-lg">
              Peças criadas para homens que compreendem o valor da presença
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

      {/* Concept Section */}
      <section className="bg-noir py-20 md:py-32">
        <div className="section-padding grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <ScrollReveal delay={300}>
            <div className="flex flex-col justify-center order-2 md:order-1">
              <span className="text-gold text-xs tracking-[0.3em] uppercase font-sans font-light mb-6">Conceito</span>
              <h2 className="font-serif text-cream text-3xl md:text-4xl lg:text-5xl leading-tight mb-8">
                Minimalismo, precisão e caráter.
              </h2>
              <p className="text-cream/50 text-sm font-sans font-light leading-relaxed max-w-md">
                A linha masculina AUREA é projetada para homens que entendem que o verdadeiro luxo está na discrição. Cada peça é uma extensão da personalidade de quem a usa.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="aspect-square overflow-hidden order-1 md:order-2">
              <img src={conceptImg} alt="Textura de ouro negro e dourado" className="w-full h-full object-cover" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Product Grid */}
      <section id="colecao" className="bg-noir py-20 md:py-32">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-sans font-light">Coleção</span>
            <h2 className="font-serif text-cream text-3xl md:text-5xl mt-4">Peças Masculinas</h2>
          </div>
        </ScrollReveal>

        {/* Category Filter */}
        <div className="flex justify-center gap-6 md:gap-10 mb-16 flex-wrap section-padding">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs tracking-[0.2em] uppercase font-sans font-light transition-all duration-500 pb-1 border-b ${
                activeCategory === cat ? "text-gold border-gold" : "text-cream/40 border-transparent hover:text-cream/70"
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
                <div className="relative overflow-hidden mb-6 aspect-square bg-noir-soft">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-noir/0 group-hover:bg-noir/30 transition-all duration-700 flex items-center justify-center">
                    <span className="text-cream text-xs tracking-[0.3em] uppercase font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      Ver peça
                    </span>
                  </div>
                </div>
                <h3 className="font-serif text-cream text-lg mb-1">{product.name}</h3>
                <p className="text-cream/40 text-[11px] tracking-[0.1em] font-sans font-light mb-1">{product.material}</p>
                <p className="text-gold text-xs tracking-[0.15em] font-sans font-light">{product.price}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Product Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-4xl bg-noir border-none p-0 gap-0">
          <button
            onClick={() => setSelectedProduct(null)}
            className="absolute right-4 top-4 z-10 text-cream/60 hover:text-cream transition-colors"
          >
            <X size={20} strokeWidth={1} />
          </button>
          {selectedProduct && (
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="aspect-square overflow-hidden bg-noir-soft">
                <img
                  src={selectedProduct.img}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s]"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans font-light mb-3">{selectedProduct.category}</span>
                <h3 className="font-serif text-cream text-2xl md:text-3xl mb-2">{selectedProduct.name}</h3>
                <p className="text-gold text-sm tracking-[0.15em] font-sans font-light mb-6">{selectedProduct.price}</p>
                <p className="text-cream/50 text-sm font-sans font-light leading-relaxed mb-8">{selectedProduct.description}</p>

                <div className="mb-8">
                  <span className="text-cream text-[10px] tracking-[0.2em] uppercase font-sans font-light mb-3 block">Material</span>
                  <div className="flex gap-3 flex-wrap">
                    {selectedProduct.materials.map((mat, i) => (
                      <button
                        key={mat}
                        onClick={() => setSelectedMaterial(i)}
                        className={`text-[11px] tracking-[0.15em] font-sans font-light px-4 py-2 border transition-all duration-500 ${
                          selectedMaterial === i
                            ? "border-gold text-gold"
                            : "border-cream/10 text-cream/40 hover:border-cream/30"
                        }`}
                      >
                        {mat}
                      </button>
                    ))}
                  </div>
                </div>

                <button className="btn-gold-solid w-full text-center mb-4">Adicionar à seleção</button>
                <p className="text-cream/40 text-[10px] tracking-[0.15em] font-sans font-light text-center">
                  Produção sob demanda.
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Limited Edition */}
      <section className="bg-noir py-20 md:py-32">
        <div className="section-padding">
          <ScrollReveal>
            <div className="relative overflow-hidden aspect-[21/9] md:aspect-[3/1]">
              <img src={limitedImg} alt="Edição Black Signature - anel e pulseira em ouro negro" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-noir/40 flex flex-col items-center justify-center text-center px-6">
                <span className="text-gold text-xs tracking-[0.3em] uppercase font-sans font-light mb-4">Edição Limitada</span>
                <h2 className="font-serif text-cream text-3xl md:text-5xl lg:text-6xl mb-4">Edição Black Signature</h2>
                <p className="text-cream/50 text-xs tracking-[0.2em] uppercase font-sans font-light mb-8">
                  Disponível para poucos.
                </p>
                <a href="#" className="btn-gold">Conhecer</a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Impact Quote */}
      <section className="bg-noir py-24 md:py-40">
        <div className="section-padding text-center">
          <ScrollReveal>
            <h2 className="font-serif text-cream text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight max-w-4xl mx-auto">
              Luxo é o que permanece.
            </h2>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Masculino;

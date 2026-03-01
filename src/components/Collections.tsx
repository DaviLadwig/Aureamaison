import ScrollReveal from "./ScrollReveal";
import femImg from "@/assets/collection-feminine.jpg";
import mascImg from "@/assets/collection-masculine.jpg";
import blackImg from "@/assets/collection-blackgold.jpg";
import limitedImg from "@/assets/collection-limited.jpg";

const collections = [
  { name: "Essência Feminina", desc: "Delicadeza que revela força interior", img: femImg, reverse: false },
  { name: "Força Masculina", desc: "Presença que dispensa apresentação", img: mascImg, reverse: true },
  { name: "Black Gold Edition", desc: "A ousadia do ouro que desafia o convencional", img: blackImg, reverse: false },
  { name: "Edição Limitada", desc: "Raridade para quem busca o extraordinário", img: limitedImg, reverse: true },
];

const Collections = () => {
  return (
    <section id="colecoes" className="bg-cream py-20 md:py-32">
      <ScrollReveal>
        <div className="text-center mb-16 md:mb-24">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-sans font-light">Coleções</span>
          <h2 className="font-serif text-foreground text-3xl md:text-5xl lg:text-6xl mt-4 tracking-[0.02em]">
            Curadoria Editorial
          </h2>
        </div>
      </ScrollReveal>

      <div className="space-y-20 md:space-y-32">
        {collections.map((col, i) => (
          <ScrollReveal key={col.name} delay={i * 100}>
            <div
              className={`section-padding flex flex-col gap-8 md:gap-16 items-center ${
                col.reverse ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              {/* Image */}
              <div className="w-full md:w-3/5 overflow-hidden group">
                <img
                  src={col.img}
                  alt={col.name}
                  className="w-full h-[400px] md:h-[600px] object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-2/5 flex flex-col items-start md:items-start gap-6">
                <span className="text-gold text-xs tracking-[0.3em] uppercase font-sans">Coleção</span>
                <h3 className="font-serif text-foreground text-3xl md:text-4xl lg:text-5xl">{col.name}</h3>
                <p className="text-stone text-sm font-sans font-light leading-relaxed max-w-sm">
                  {col.desc}
                </p>
                <a href="#" className="btn-gold mt-4">
                  Explorar
                </a>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Collections;

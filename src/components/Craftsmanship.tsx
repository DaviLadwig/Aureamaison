import ScrollReveal from "./ScrollReveal";
import craftImg from "@/assets/craftsmanship.jpg";

const Craftsmanship = () => {
  return (
    <section className="bg-cream py-20 md:py-32">
      <div className="section-padding flex flex-col md:flex-row items-center gap-12 md:gap-20">
        <ScrollReveal className="w-full md:w-3/5">
          <div className="overflow-hidden">
            <img
              src={craftImg}
              alt="Artesão criando joia de ouro com ferramentas de precisão"
              className="w-full h-[400px] md:h-[600px] object-cover"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal className="w-full md:w-2/5" delay={200}>
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-sans font-light">Artesanato</span>
          <h2 className="font-serif text-foreground text-3xl md:text-4xl lg:text-5xl mt-4 mb-6 leading-tight">
            A arte por trás
            <br />
            de cada peça
          </h2>
          <p className="text-stone text-sm font-sans font-light leading-relaxed max-w-md">
            Cada peça é criada com precisão artesanal e materiais nobres. Do desenho à lapidação final, nossas joias
            passam por mãos que dominam técnicas centenárias.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Craftsmanship;

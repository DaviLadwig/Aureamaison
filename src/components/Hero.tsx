import heroImg from "@/assets/hero-jewelry.jpg";
import ScrollReveal from "./ScrollReveal";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-noir">
      {/* Background image with slow zoom */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Colar de ouro com diamantes sobre veludo negro"
          className="w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-noir/50" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <ScrollReveal delay={300}>
          <h1 className="font-serif text-cream text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-[0.05em] leading-tight mb-6">
            A arte de eternizar
            <br />
            momentos
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={600}>
          <p className="text-cream/70 text-xs sm:text-sm tracking-[0.2em] uppercase font-sans font-light mb-12 max-w-lg">
            Joias masculinas e femininas criadas para marcar gerações
          </p>
        </ScrollReveal>
        <ScrollReveal delay={900}>
          <a href="#colecoes" className="btn-gold">
            Descobrir a Coleção
          </a>
        </ScrollReveal>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in" style={{ animationDelay: "2s" }}>
        <span className="text-cream/40 text-[10px] tracking-[0.3em] uppercase font-sans">Scroll</span>
        <div className="w-px h-8 bg-cream/20 relative overflow-hidden">
          <div className="w-full h-1/2 bg-gold animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

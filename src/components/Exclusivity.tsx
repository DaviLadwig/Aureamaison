import ScrollReveal from "./ScrollReveal";

const Exclusivity = () => {
  return (
    <section className="bg-noir py-32 md:py-48">
      <ScrollReveal>
        <div className="section-padding text-center max-w-4xl mx-auto">
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-sans font-light mb-8">Manifesto</p>
          <h2 className="font-serif text-cream text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight tracking-[0.02em]">
            Não vendemos acessórios.
            <br />
            <span className="text-gold">Criamos símbolos.</span>
          </h2>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Exclusivity;

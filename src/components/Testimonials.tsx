import ScrollReveal from "./ScrollReveal";

const testimonials = [
  { name: "Marina C.", city: "São Paulo", text: "Uma peça que me faz sentir única cada vez que a uso." },
  { name: "Ricardo M.", city: "Lisboa", text: "Qualidade incomparável. O anel Sovereign é uma obra de arte." },
  { name: "Isabella F.", city: "Milano", text: "A embalagem, a joia, cada detalhe é perfeição silenciosa." },
];

const Testimonials = () => {
  return (
    <section className="bg-cream py-20 md:py-32">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-sans font-light">Depoimentos</span>
          <h2 className="font-serif text-foreground text-3xl md:text-5xl mt-4">Palavras que nos honram</h2>
        </div>
      </ScrollReveal>

      <div className="section-padding grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.name} delay={i * 200}>
            <div className="text-center">
              <p className="font-serif text-foreground text-lg md:text-xl italic leading-relaxed mb-6">
                "{t.text}"
              </p>
              <p className="text-foreground text-xs tracking-[0.2em] uppercase font-sans font-light">{t.name}</p>
              <p className="text-stone text-xs tracking-[0.15em] font-sans font-light mt-1">{t.city}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

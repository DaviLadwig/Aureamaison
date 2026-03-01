import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-noir-soft py-20 md:py-32">
      <ScrollReveal>
        <div className="section-padding text-center max-w-xl mx-auto">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-sans font-light">Exclusivo</span>
          <h2 className="font-serif text-cream text-3xl md:text-4xl mt-4 mb-4">
            Entre para o círculo privado AUREA
          </h2>
          <p className="text-cream/50 text-xs tracking-[0.15em] font-sans font-light mb-10">
            Receba acesso antecipado às novas coleções e eventos exclusivos.
          </p>
          <form
            className="flex flex-col sm:flex-row items-center gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu e-mail"
              className="flex-1 w-full bg-transparent border-b border-cream/20 text-cream text-sm font-sans font-light py-3 px-0 focus:outline-none focus:border-gold transition-colors duration-500 placeholder:text-cream/30"
            />
            <button type="submit" className="btn-gold whitespace-nowrap">
              Inscrever-se
            </button>
          </form>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Newsletter;

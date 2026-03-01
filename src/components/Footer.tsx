const Footer = () => {
  const columns = [
    { title: "Maison", links: ["Nossa História", "Artesanato", "Sustentabilidade"] },
    { title: "Atendimento", links: ["Contato", "Guia de Tamanhos", "Cuidados com Joias"] },
    { title: "Políticas", links: ["Envio", "Devoluções", "Privacidade"] },
    { title: "Social", links: ["Instagram", "Pinterest", "LinkedIn"] },
  ];

  return (
    <footer className="bg-noir pt-16 md:pt-24 pb-8">
      <div className="section-padding">
        {/* Logo */}
        <div className="text-center mb-16">
          <span className="font-serif text-cream text-2xl md:text-3xl tracking-[0.4em] uppercase">AUREA</span>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-gold text-xs tracking-[0.2em] uppercase font-sans font-light mb-6">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-cream/50 text-xs font-sans font-light hover:text-cream transition-colors duration-500"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-cream/10 mb-8" />

        {/* Copyright */}
        <p className="text-cream/30 text-[10px] tracking-[0.2em] uppercase font-sans font-light text-center">
          © 2026 AUREA Maison — Alta Joalheria
        </p>
      </div>
    </footer>
  );
};

export default Footer;

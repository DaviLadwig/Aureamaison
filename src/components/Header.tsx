import { useState, useEffect } from "react";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Feminino", href: "/feminino" },
    { label: "Masculino", href: "/masculino" },
    { label: "Coleções", href: "/#colecoes" },
    { label: "Maison", href: "/" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-out ${
          scrolled ? "bg-noir py-4" : "bg-transparent py-6 md:py-8"
        }`}
      >
        <div className="section-padding flex items-center justify-between">
          {/* Left nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="gold-underline text-cream text-xs tracking-[0.2em] uppercase font-sans font-light"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-cream"
            onClick={() => setMobileOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu size={20} strokeWidth={1} />
          </button>

          {/* Center logo */}
          <Link
            to="/"
            className={`font-serif text-cream tracking-[0.4em] uppercase transition-all duration-700 ${
              scrolled ? "text-xl" : "text-2xl md:text-3xl"
            }`}
          >
            AUREA
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-5">
            <button className="text-cream hover:text-gold transition-colors duration-500" aria-label="Buscar">
              <Search size={18} strokeWidth={1} />
            </button>
            <button className="hidden sm:block text-cream hover:text-gold transition-colors duration-500" aria-label="Conta">
              <User size={18} strokeWidth={1} />
            </button>
            <button className="text-cream hover:text-gold transition-colors duration-500 relative" aria-label="Carrinho">
              <ShoppingBag size={18} strokeWidth={1} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu fullscreen */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-noir flex flex-col items-center justify-center">
          <button
            className="absolute top-6 right-6 text-cream"
            onClick={() => setMobileOpen(false)}
            aria-label="Fechar menu"
          >
            <X size={24} strokeWidth={1} />
          </button>
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link, i) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-cream text-lg tracking-[0.3em] uppercase font-serif opacity-0 animate-fade-up"
                style={{ animationDelay: `${i * 150}ms` }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;

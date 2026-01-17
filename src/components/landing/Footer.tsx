const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Pokój Bezpieczeństwa. Wszystkie prawa zastrzeżone.
          </div>
          <nav className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Polityka prywatności
            </a>
            <a href="#kontakt" className="hover:text-foreground transition-colors">
              Kontakt
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

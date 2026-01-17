import { motion } from "framer-motion";

const Header = () => {
return (
<motion.header
initial={{ opacity: 0, y: -20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
>
<div className="container px-10 md:px-10 lg:px-16"></div>
  <div className="grid grid-cols-3 items-center py-6 md:py-8">
  {/* ЛЕВО — ЛОГО */}
  <div className="flex items-center">
    <a href="/">
      <img
        src="/src/assets/6ave.png"
        className="h-20 md:h-24 w-auto"
      />
    </a>
  </div>

  {/* ЦЕНТР — УМНАЯ ФРАЗА */}
  <div className="hidden md:flex justify-center">
    <motion.span
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.6 }}
>
      Budujemy biezpiecznu przyslośc dla twojej rodziny
    </motion.span>
  </div>

  {/* ПРАВО — КОНТАКТ */}
  <div className="flex justify-end">
    <a
      href="#kontakt"
      className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
    >
      Kontakt
    </a>
  </div>

</div>

</motion.header>
);
};

export default Header;


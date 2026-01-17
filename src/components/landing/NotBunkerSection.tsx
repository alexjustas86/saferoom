import { motion } from "framer-motion";
import extensionImage from "@/assets/extension-drawing.png";

const NotBunkerSection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/50">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={extensionImage}
              alt="Projekt architektoniczny dobudowy pokoju bezpieczeństwa"
              className="w-full h-auto rounded-sm shadow-xl"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block text-sm uppercase tracking-[0.25em] text-muted-foreground mb-4">
              Filozofia projektu
            </span>
            <h2 className="text-3xl md:text-4xl font-light leading-tight text-foreground mb-6">
              To nie jest bunker
              <br />
              <span className="font-medium">ani modułowe schronisko</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Pokój Bezpieczeństwa to przemyślana przez architektów dobudowa do istniejącego 
                budynku, która z zewnątrz wygląda jak zwykła część domu.
              </p>
              <p>
                Żadnych wojskowych estetyk, żadnych metalowych kontenerów. To elegancka 
                przestrzeń mieszkalna, zaprojektowana z taką samą starannością jak reszta 
                Twojego domu.
              </p>
              <p>
                Integracja z istniejącą architekturą sprawia, że pokój bezpieczeństwa 
                jest niewidoczny dla postronnych — dyskretny, ale zawsze gotowy.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-2 gap-6 mt-10 pt-10 border-t border-border">
              <div>
                <div className="text-2xl font-light text-foreground mb-1">100%</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  Dyskrecji
                </div>
              </div>
              <div>
                <div className="text-2xl font-light text-foreground mb-1">0</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  Widocznych oznak
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NotBunkerSection;

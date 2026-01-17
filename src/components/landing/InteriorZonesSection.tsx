import { motion } from "framer-motion";
import interiorZonesImage from "@/assets/interior-zones.png";
import { Bed, Baby, UtensilsCrossed, Bath, Package } from "lucide-react";

const zones = [
  {
    icon: Bed,
    title: "Strefa rodziców",
    description: "Komfortowa sypialnia z pełnym wyposażeniem dla dorosłych członków rodziny.",
  },
  {
    icon: Baby,
    title: "Strefa dziecięca",
    description: "Bezpieczna przestrzeń dla dzieci z przemyślanym, przyjaznym wnętrzem.",
  },
  {
    icon: UtensilsCrossed,
    title: "Kuchnia",
    description: "W pełni wyposażony aneks kuchenny umożliwiający przygotowanie posiłków.",
  },
  {
    icon: Bath,
    title: "Łazienka",
    description: "Kompletna łazienka z prysznicem i wszystkimi niezbędnymi udogodnieniami.",
  },
  {
    icon: Package,
    title: "Magazyn",
    description: "Przestrzeń na zapasy żywności, wody i niezbędnego wyposażenia.",
  },
];

const InteriorZonesSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm uppercase tracking-[0.25em] text-muted-foreground mb-4">
            Wnętrze
          </span>
          <h2 className="text-3xl md:text-4xl font-light leading-tight text-foreground mb-6">
            Przemyślane strefy
            <br />
            <span className="font-medium">dla całej rodziny</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Każdy metr kwadratowy zaprojektowany z myślą o komforcie i funkcjonalności. 
            Przestrzeń, która zapewnia wszystko, czego potrzebujesz.
          </p>
        </motion.div>

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="relative rounded-sm overflow-hidden shadow-2xl">
            <img
              src={interiorZonesImage}
              alt="Przekrój wnętrza pokoju bezpieczeństwa pokazujący wszystkie strefy"
              className="w-full h-auto"
            />
            {/* Subtle overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* Zones Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {zones.map((zone, index) => (
            <motion.div
              key={zone.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-sm border border-border hover:border-muted-foreground/30 transition-colors"
            >
              <zone.icon className="w-6 h-6 text-foreground mb-4" strokeWidth={1.5} />
              <h3 className="text-lg font-medium text-foreground mb-2">{zone.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {zone.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteriorZonesSection;

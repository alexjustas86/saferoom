import { motion } from "framer-motion";
import exteriorImage from "@/assets/exterior-facade.png";
import { MessageSquare, Search, PenTool, HardHat } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Konsultacja",
    description: "Bezpłatne spotkanie, podczas którego poznajemy Twoje potrzeby i omawiamy możliwości.",
  },
  {
    number: "02",
    icon: Search,
    title: "Analiza",
    description: "Szczegółowa analiza Twojej nieruchomości i warunków technicznych realizacji.",
  },
  {
    number: "03",
    icon: PenTool,
    title: "Projekt",
    description: "Opracowanie indywidualnego projektu architektonicznego dostosowanego do Twojego domu.",
  },
  {
    number: "04",
    icon: HardHat,
    title: "Budowa",
    description: "Profesjonalna realizacja projektu przez doświadczony zespół wykonawczy.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <span className="inline-block text-sm uppercase tracking-[0.25em] text-muted-foreground mb-4">
                Proces
              </span>
              <h2 className="text-3xl md:text-4xl font-light leading-tight text-foreground mb-6">
                Od pomysłu
                <br />
                <span className="font-medium">do realizacji</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Przejrzysty proces w czterech krokach. Każdy etap realizowany przez 
                doświadczonych specjalistów.
              </p>
            </motion.div>

            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex gap-6 group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center group-hover:border-foreground/30 transition-colors">
                      <step.icon className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="pt-1">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-xs text-muted-foreground font-medium">{step.number}</span>
                      <h3 className="text-lg font-medium text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="sticky top-24"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-warm-beige to-transparent rounded-sm opacity-50" />
              <img
                src={exteriorImage}
                alt="Elewacja domu z rozbudową - pokój bezpieczeństwa"
                className="relative w-full h-auto rounded-sm shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

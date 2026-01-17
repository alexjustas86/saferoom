import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section id="kontakt" className="py-24 bg-muted">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-light mb-6">
          Zamów bezpłatne konsultacje
        </h2>

        <form
          action="https://formspree.io/f/mvzzzgrj"
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Imię"
            required
            className="w-full border border-border p-3 rounded-md"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Numer telefonu"
            required
            className="w-full border border-border p-3 rounded-md"
          />

          <button
            type="submit"
            className="w-full border border-foreground py-3 hover:bg-foreground hover:text-background transition"
          >
            Zamów konsultacje
          </button>
        </form>
      </div>
    </section>
  );
};

export default CTASection;

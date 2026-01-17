export default function ConsultationForm() {
  return (
    <section id="consultation" className="py-24 bg-neutral-100">
      <div className="max-w-xl mx-auto px-6">
        <h2 className="text-3xl font-light mb-6">
          Бесплатная консультация
        </h2>

        <form
          action="https://formspree.io/f/mvzzzgrj"
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Ваше имя"
            required
            className="w-full border border-neutral-300 p-3 rounded-md"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Номер телефона"
            required
            className="w-full border border-neutral-300 p-3 rounded-md"
          />

          <button
            type="submit"
            className="w-full border border-black py-3 hover:bg-black hover:text-white transition"
          >
            Мы вам перезвоним
          </button>
        </form>
      </div>
    </section>
  );
}

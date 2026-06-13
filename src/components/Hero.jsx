export default function Hero() {
  return (
    <section className="relative h-[90vh]">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 h-full flex items-center">

        <div className="max-w-7xl mx-auto px-6 text-white">

          <span className="bg-violet-700 px-4 py-2 rounded-full text-sm">
            Industrial & Domestic Solutions
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mt-6 max-w-4xl">
            Water Treatment & Cooling Solutions
          </h1>

          <p className="mt-6 text-lg max-w-2xl text-zinc-200">
            RO Plants, Water Chillers, Chemicals,
            Installation, AMC and Maintenance Services.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="#contact"
              className="bg-violet-700 px-6 py-3 rounded-xl"
            >
              Get Quote
            </a>

            <a
              href="https://wa.me/919999999999"
              className="border border-white px-6 py-3 rounded-xl"
            >
              WhatsApp
            </a>

            <a
  href="tel:+918888668508"
  className="bg-white text-violet-700 px-6 py-3 rounded-xl font-semibold"
>
  Call Now
</a>
          </div>

        </div>
      </div>
    </section>
  );
}
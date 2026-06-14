export default function Hero() {
return ( <section className="relative h-[90vh] overflow-hidden">


  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/videos/hero.mp4" type="video/mp4" />
  </video>

  <div className="absolute inset-0 bg-gradient-to-r from-purple-950/90 via-purple-900/70 to-black/40"></div>

  <div className="relative z-10 h-full flex items-center">
    <div className="max-w-7xl mx-auto px-6 w-full text-white">

      <span className="inline-block bg-purple-700/90 px-5 py-2 rounded-full text-sm font-medium shadow-lg">
        Home Appliances • Electronics • Water Solutions
      </span>

      <h1 className="text-4xl md:text-7xl font-bold mt-6 max-w-5xl leading-tight">
        Find the Right Appliance for Your Home & Business
      </h1>

      <div className="mt-6 max-w-3xl">

        <p className="text-purple-200 uppercase tracking-wider font-medium">
          Refrigerators • Air Conditioners • RO Systems • Water Chillers
        </p>

        <p className="mt-4 text-lg md:text-xl text-purple-100">
          Explore a wide range of home appliances, electronic products,
          water treatment systems and cooling solutions — all in one place.
        </p>

        <div className="mt-6 flex flex-wrap gap-4 text-sm md:text-base">
          <span>✓ Quality Products</span>
          <span>✓ Trusted Brands</span>
          <span>✓ Competitive Prices</span>
          <span>✓ Installation Available</span>
        </div>

      </div>

      <div className="flex flex-wrap gap-4 mt-10">

        <a
          href="#products"
          className="bg-purple-700 hover:bg-purple-800 px-6 py-3 rounded-xl font-semibold shadow-lg"
        >
          Browse Products
        </a>

        <a
          href="https://wa.me/918888668508"
          target="_blank"
          rel="noreferrer"
          className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl font-semibold shadow-lg"
        >
          WhatsApp
        </a>

        <a
          href="tel:+918888668508"
          className="bg-white hover:bg-zinc-100 text-purple-700 px-6 py-3 rounded-xl font-semibold shadow-lg"
        >
          Call Now
        </a>

      </div>

    </div>
  </div>

</section>


);
}

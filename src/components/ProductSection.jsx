export default function ProductSection() {
  const products = [
    {
      title: "Industrial RO Plants",
      image: "/images/ro-plant.jpg",
      desc: "High-capacity water purification systems."
    },
    {
      title: "Water Chillers",
      image: "/images/chiller.jpg",
      desc: "Commercial and industrial cooling solutions."
    },
    {
      title: "Water Treatment Chemicals",
      image: "/images/chemicals.jpg",
      desc: "Quality chemicals for treatment processes."
    }
  ];

  return (
    <section
      id="products"
      className="py-24 bg-violet-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Our Products
        </h2>

        <p className="text-center text-zinc-600 mb-12">
          Reliable solutions for residential,
          commercial and industrial requirements.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {products.map((product) => (
            <div
              key={product.title}
              className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-xl font-bold">
                  {product.title}
                </h3>

                <p className="mt-3 text-zinc-600">
                  {product.desc}
                </p>

                <button
                  className="mt-5 bg-violet-700 text-white px-5 py-2 rounded-xl"
                >
                  Learn More
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductSection from "../components/ProductSection";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold">
            Welcome to Appliancer
          </h2>

          <p className="mt-5 text-zinc-600 max-w-3xl">
            We provide complete water treatment,
            cooling solutions, RO systems,
            industrial equipment and maintenance
            services.
          </p>

        </div>
      </section>

      <ProductSection />
    </>
  );
}
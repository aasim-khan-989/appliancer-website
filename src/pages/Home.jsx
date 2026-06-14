import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductSection from "../components/ProductSection";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
return (
<> <Navbar />

  <Hero />

  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6">

      <h2 className="text-4xl font-bold text-center">
        Your One-Stop Destination for Appliances & Water Solutions
      </h2>

      <p className="mt-6 text-zinc-600 max-w-4xl mx-auto text-center text-lg">
        Discover a wide range of home appliances, electronic products,
        refrigerators, air conditioners, RO systems, water chillers,
        water coolers, water treatment equipment and more.
        We help customers find quality products at competitive prices
        with installation and support available when required.
      </p>

    </div>
  </section>

  <ProductSection />

  <Services />

  <Contact />

  <Footer />

  <WhatsAppButton />
</>

);
}

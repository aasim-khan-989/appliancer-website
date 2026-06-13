import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">

          <div>
            <h1 className="text-2xl font-bold text-violet-700">
              Appliancer
            </h1>
            <p className="text-xs text-zinc-500">
              Water Treatment Solutions
            </p>
          </div>

          <nav className="hidden md:flex gap-8">
            <a href="#" className="hover:text-violet-700">
              Home
            </a>

            <a href="#products" className="hover:text-violet-700">
              Products
            </a>

            <a href="#services" className="hover:text-violet-700">
              Services
            </a>

            <a href="#contact" className="hover:text-violet-700">
              Contact
            </a>
          </nav>

          <button className="hidden md:block bg-violet-700 text-white px-5 py-2 rounded-xl">
            Get Quote
          </button>

          <button className="md:hidden">
            <Menu />
          </button>
        </div>
      </div>
    </header>
  );
}
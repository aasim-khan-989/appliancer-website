import {
  Wrench,
  Settings,
  ShieldCheck,
  Headphones
} from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Installation",
    desc: "Professional installation of RO plants, chillers and treatment systems."
  },
  {
    icon: Settings,
    title: "Maintenance",
    desc: "Regular servicing and preventive maintenance."
  },
  {
    icon: ShieldCheck,
    title: "AMC Contracts",
    desc: "Annual maintenance contracts for uninterrupted operation."
  },
  {
    icon: Headphones,
    title: "Technical Support",
    desc: "Quick troubleshooting and expert guidance."
  }
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Our Services
        </h2>

        <p className="text-center text-zinc-600 mt-4 mb-12">
          Complete support from installation to maintenance.
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="border rounded-3xl p-8 hover:shadow-xl transition"
              >
                <Icon className="w-10 h-10 text-violet-700" />

                <h3 className="text-xl font-semibold mt-5">
                  {service.title}
                </h3>

                <p className="text-zinc-600 mt-3">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
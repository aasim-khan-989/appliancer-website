import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `
*New Inquiry from Appliancer Website*

👤 Name: ${formData.name}

📞 Phone: ${formData.phone}

📧 Email: ${formData.email}

📝 Requirement:
${formData.message}
`;

    window.open(
      `https://wa.me/918888668508?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );
  };

  return (
    <section
      id="contact"
      className="py-24 bg-violet-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Contact Us
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 mt-12">

          <div>
            <div className="bg-white p-8 rounded-3xl shadow">

              <h3 className="text-2xl font-bold mb-4">
                Contact Information
              </h3>

              <a
                href="tel:+918888668508"
                className="block text-lg text-violet-700 font-semibold hover:underline"
              >
                📞 +91 88886 68508
              </a>

              <a
                href="https://wa.me/918888668508"
                target="_blank"
                rel="noreferrer"
                className="block mt-4 text-lg text-green-600 font-semibold hover:underline"
              >
                💬 WhatsApp Us
              </a>

             

              <p className="mt-3 text-zinc-600">
                Sales • Installation • AMC • Maintenance
              </p>

            </div>

            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d937.9741511945475!2d75.34088256959804!3d19.886587398843286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDUzJzExLjciTiA3NcKwMjAnMjkuNSJF!5e0!3m2!1sen!2sin!4v1781393364214!5m2!1sen!2sin"
              className="w-full h-[400px] rounded-3xl mt-6 shadow"
              loading="lazy"
            />
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-3xl shadow"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-xl mb-4"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-3 rounded-xl mb-4"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-xl mb-4"
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Tell us your requirement..."
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-xl mb-4"
            />

            <button
              type="submit"
              className="w-full bg-violet-700 hover:bg-violet-800 text-white px-6 py-3 rounded-xl font-semibold"
            >
              Send via WhatsApp
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
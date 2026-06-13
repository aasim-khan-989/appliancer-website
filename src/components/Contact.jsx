export default function Contact() {
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

          <form
            action="https://formsubmit.co/your@email.com"
            method="POST"
            className="bg-white p-8 rounded-3xl shadow"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full border p-3 rounded-xl mb-4"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full border p-3 rounded-xl mb-4"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="w-full border p-3 rounded-xl mb-4"
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Your Requirement"
              className="w-full border p-3 rounded-xl mb-4"
            />

            <button
              className="bg-violet-700 text-white px-6 py-3 rounded-xl"
            >
              Send Inquiry
            </button>
          </form>

          <iframe
            title="Google Map"
            src="YOUR_MAP_EMBED_URL"
            className="w-full h-[450px] rounded-3xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
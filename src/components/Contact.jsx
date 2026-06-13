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

            <div className="bg-white p-8 rounded-3xl shadow mb-8">
  <h3 className="text-2xl font-bold mb-4">
    Contact Information
  </h3>

  <p>
    📞 +91 88886 68508
  </p>

  <p className="mt-3">
    📍 Aurangabad, Maharashtra
  </p>

  <p className="mt-3">
    Sales • Installation • AMC • Maintenance
  </p>
</div>

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
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d937.9741511945475!2d75.34088256959804!3d19.886587398843286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDUzJzExLjciTiA3NcKwMjAnMjkuNSJF!5e0!3m2!1sen!2sin!4v1781393364214!5m2!1sen!2sin" 
            className="w-full h-[450px] rounded-3xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
export default function QuickActions() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-violet-700 text-white z-50 md:hidden">
      <div className="grid grid-cols-2">

        <a
          href="tel:+918888668508"
          className="text-center py-4 border-r border-violet-500"
        >
          Call Now
        </a>

        <a
          href="https://wa.me/918888668508"
          className="text-center py-4"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>

      </div>
    </div>
  );
}
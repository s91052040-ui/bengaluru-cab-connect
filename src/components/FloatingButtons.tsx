import { Phone, MessageCircle } from 'lucide-react';

const FloatingButtons = () => {
  return (
    <>
      {/* WhatsApp Button - Bottom Right */}
      <a
        href="https://wa.me/919880077291?text=Hi!%20I'd%20like%20to%20book%20a%20cab."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 animate-bounce-subtle"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" fill="white" />
      </a>

      {/* Mobile Sticky Call Button */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border p-3">
        <a
          href="tel:9880077291"
          className="btn-accent flex items-center justify-center gap-2 w-full py-4"
        >
          <Phone className="w-5 h-5" />
          <span className="font-semibold">Call Now: 9880077291</span>
        </a>
      </div>
    </>
  );
};

export default FloatingButtons;

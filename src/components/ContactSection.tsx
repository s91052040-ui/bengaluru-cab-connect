import { Phone, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-primary">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center text-primary-foreground">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Get In Touch
          </span>
          <h2 className="heading-secondary mb-6">
            Ready to Book Your Ride?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10">
            Use the booking form above or contact us directly. We're available 24/7 to assist you.
          </p>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-3 gap-4">
            <a
              href="tel:9880077291"
              className="flex flex-col items-center gap-3 p-6 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors"
            >
              <div className="w-14 h-14 rounded-lg bg-accent flex items-center justify-center">
                <Phone className="w-7 h-7 text-accent-foreground" />
              </div>
              <div>
                <div className="font-semibold text-lg">Call Us</div>
                <div className="text-primary-foreground/70">+91 9880077291</div>
              </div>
            </a>

            <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-primary-foreground/10">
              <div className="w-14 h-14 rounded-lg bg-accent/20 flex items-center justify-center">
                <MapPin className="w-7 h-7 text-accent" />
              </div>
              <div>
                <div className="font-semibold text-lg">Location</div>
                <div className="text-primary-foreground/70">Bengaluru, Karnataka</div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-primary-foreground/10">
              <div className="w-14 h-14 rounded-lg bg-accent/20 flex items-center justify-center">
                <Clock className="w-7 h-7 text-accent" />
              </div>
              <div>
                <div className="font-semibold text-lg">Hours</div>
                <div className="text-primary-foreground/70">24/7 Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

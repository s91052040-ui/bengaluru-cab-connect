import { Phone, MapPin, Clock, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-primary-foreground">
      <div className="section-container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-heading font-bold text-lg">PT</span>
              </div>
              <div>
                <span className="font-heading font-bold text-lg">Public Tours</span>
                <span className="block text-xs text-primary-foreground/70">
                  Travels & Cab Service
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Your trusted cab partner in Bangalore. Professional drivers, 
              well-maintained vehicles, and transparent pricing since 2014.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'Fleet', 'About Us', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '')}`}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              {[
                'Airport Pickup & Drop',
                'Local City Rides',
                'Outstation Cabs',
                'Corporate Travel',
                'Wedding Cars',
                'Group Tours',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:9880077291"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  <Phone className="w-4 h-4 text-accent" />
                  <span>+91 9880077291</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Bengaluru, Karnataka</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Clock className="w-4 h-4 text-accent" />
                <span>24/7 Available</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Mail className="w-4 h-4 text-accent" />
                <span>info@publictours.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 mt-10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm text-center md:text-left">
              © {currentYear} Public Tours Travels & Cab Service. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-primary-foreground/60 text-sm">
                Serving Bangalore with Pride
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

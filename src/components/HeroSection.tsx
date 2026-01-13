import { Phone, Calendar } from 'lucide-react';
import heroImage from '@/assets/hero-cab.jpg';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/90" />

      {/* Content */}
      <div className="relative z-10 section-container text-center pt-20">
        <div className="max-w-4xl mx-auto animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse-soft" />
            <span className="text-accent font-medium text-sm">24/7 Available in Bangalore</span>
          </div>

          {/* Main Heading */}
          <h1 className="heading-primary text-primary-foreground mb-6">
            Reliable Cab & Taxi Services in{' '}
            <span className="gold-gradient-text">Bangalore</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 font-medium">
            Airport Transfers • Outstation Trips • Local Rides • Corporate Travel
          </p>
          <p className="text-lg text-primary-foreground/70 mb-10 max-w-2xl mx-auto">
            Experience premium cab services with professional drivers, well-maintained vehicles, 
            and transparent pricing. Your trusted travel partner in Bangalore.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#contact"
              className="btn-accent flex items-center gap-2 text-lg px-8 py-4 w-full sm:w-auto justify-center"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Now</span>
            </a>
            <a
              href="tel:9880077291"
              className="btn-outline flex items-center gap-2 text-lg px-8 py-4 w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5" />
              <span>Call: 9880077291</span>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-accent font-heading font-bold">10+</span>
              </div>
              <span className="text-sm">Years Experience</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-accent font-heading font-bold">5K+</span>
              </div>
              <span className="text-sm">Happy Customers</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-accent font-heading font-bold">50+</span>
              </div>
              <span className="text-sm">Fleet Vehicles</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

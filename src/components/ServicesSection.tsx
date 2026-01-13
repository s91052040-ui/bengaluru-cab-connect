import { Plane, MapPin, Building2, Users, Heart, Car } from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: 'Airport Pickup & Drop',
    description: 'Hassle-free airport transfers with flight tracking. Never miss a flight with our punctual service.',
  },
  {
    icon: MapPin,
    title: 'Local City Rides',
    description: 'Comfortable rides within Bangalore for shopping, meetings, or sightseeing. Hourly packages available.',
  },
  {
    icon: Car,
    title: 'Outstation Cab Services',
    description: 'Travel to Mysore, Coorg, Ooty, and beyond. Well-planned routes with experienced drivers.',
  },
  {
    icon: Building2,
    title: 'Corporate Cab Services',
    description: 'Reliable transportation for businesses. Monthly packages and employee transport solutions.',
  },
  {
    icon: Users,
    title: 'Family & Group Travel',
    description: 'Spacious vehicles for family outings and group trips. Tempo Travellers and SUVs available.',
  },
  {
    icon: Heart,
    title: 'Wedding & Event Transport',
    description: 'Make your special day perfect with our decorated cars and professional chauffeur service.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Our Services
          </span>
          <h2 className="heading-secondary text-foreground mb-4">
            Complete Travel Solutions
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            From airport transfers to outstation trips, we provide comprehensive cab services 
            tailored to meet all your travel needs in Bangalore.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl p-6 lg:p-8 shadow-card card-hover border border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="heading-tertiary text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Learn More Link */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-accent font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Book Now
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

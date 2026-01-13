import sedanImage from '@/assets/sedan-car.jpg';
import suvImage from '@/assets/suv-car.jpg';
import tempoImage from '@/assets/tempo-traveller.jpg';

const fleet = [
  {
    image: sedanImage,
    name: 'Sedan',
    models: 'Dzire / Etios',
    capacity: '4 Passengers',
    features: ['AC', 'Comfortable Seating', 'Luggage Space'],
    bestFor: 'Airport Transfers & City Rides',
  },
  {
    image: suvImage,
    name: 'SUV',
    models: 'Innova / Ertiga',
    capacity: '6-7 Passengers',
    features: ['Spacious', 'Family Friendly', 'Extra Luggage'],
    bestFor: 'Family Trips & Outstation',
  },
  {
    image: tempoImage,
    name: 'Tempo Traveller',
    models: '12-17 Seater',
    capacity: '12-17 Passengers',
    features: ['Group Travel', 'Push Back Seats', 'Music System'],
    bestFor: 'Group Tours & Events',
  },
];

const FleetSection = () => {
  return (
    <section id="fleet" className="section-padding bg-secondary">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Our Fleet
          </span>
          <h2 className="heading-secondary text-foreground mb-4">
            Premium Vehicles for Every Need
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Choose from our well-maintained fleet of sedans, SUVs, and tempo travellers. 
            All vehicles are regularly serviced and sanitized for your comfort.
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fleet.map((vehicle) => (
            <div
              key={vehicle.name}
              className="group bg-card rounded-2xl overflow-hidden shadow-card card-hover border border-border/50"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {vehicle.capacity}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="heading-tertiary text-foreground">{vehicle.name}</h3>
                  <span className="text-muted-foreground text-sm">{vehicle.models}</span>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {vehicle.features.map((feature) => (
                    <span
                      key={feature}
                      className="bg-secondary text-muted-foreground text-xs px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Best For */}
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">Best for:</span>
                  <span className="text-primary font-medium">{vehicle.bestFor}</span>
                </div>

                {/* Book Button */}
                <a
                  href="tel:9880077291"
                  className="btn-primary w-full mt-5 text-center block"
                >
                  Book This Vehicle
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetSection;

import { useState } from 'react';
import { MapPin, Send, Car } from 'lucide-react';
import { z } from 'zod';

const bookingSchema = z.object({
  pickup: z.string().trim().min(2, "Enter pickup location").max(200),
  drop: z.string().trim().min(2, "Enter drop location").max(200),
  date: z.string().min(1, "Select date"),
  time: z.string().min(1, "Select time"),
  package: z.enum(['outstation', 'oneway', 'airport', 'local']),
});

const packageLabels: Record<string, string> = {
  outstation: 'Outstation Trip',
  oneway: 'One Way Drop',
  airport: 'Airport Transfer',
  local: 'Local Ride',
};

const BookingWidget = () => {
  const [formData, setFormData] = useState({
    pickup: '',
    drop: '',
    date: '',
    time: '',
    package: 'outstation',
  });
  const [activePackage, setActivePackage] = useState('outstation');

  const handleBookNow = () => {
    const result = bookingSchema.safeParse({ ...formData, package: activePackage });
    
    if (!result.success) {
      const firstError = result.error.errors[0]?.message || 'Please fill all fields';
      alert(firstError);
      return;
    }

    const { pickup, drop, date, time } = result.data;
    const packageType = packageLabels[activePackage];
    
    // Format date for display
    const formattedDate = new Date(date).toLocaleDateString('en-IN', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });

    // Create WhatsApp message
    const message = `🚕 *New Cab Booking Request*

📦 *Package:* ${packageType}
📍 *Pickup:* ${pickup}
📍 *Drop:* ${drop}
📅 *Date:* ${formattedDate}
⏰ *Time:* ${time}

Please confirm availability and fare.`;

    const whatsappUrl = `https://wa.me/919880077291?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (value.length <= 200) {
      setFormData({ ...formData, [name]: value });
    }
  };

  const packages = [
    { id: 'outstation', label: 'Outstation' },
    { id: 'oneway', label: 'One Way' },
    { id: 'airport', label: 'Airport' },
    { id: 'local', label: 'Local' },
  ];

  const today = new Date().toISOString().split('T')[0];

  return (
    <section className="relative z-20 -mt-24 pb-12">
      <div className="section-container">
        <div className="max-w-4xl mx-auto bg-card rounded-2xl p-6 lg:p-8 shadow-2xl border border-border/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
              <Car className="w-5 h-5 text-accent-foreground" />
            </div>
            <h3 className="heading-tertiary text-foreground">Book Your Cab</h3>
          </div>

          {/* Package Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-foreground mb-3">
              Select Package
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {packages.map((pkg) => (
                <button
                  key={pkg.id}
                  type="button"
                  onClick={() => setActivePackage(pkg.id)}
                  className={`py-3 px-4 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    activePackage === pkg.id
                      ? 'bg-accent text-accent-foreground shadow-gold'
                      : 'bg-secondary text-foreground hover:bg-secondary/80'
                  }`}
                >
                  {pkg.label}
                </button>
              ))}
            </div>
          </div>

          {/* Pickup & Drop */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Pickup Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent" />
                <input
                  type="text"
                  name="pickup"
                  value={formData.pickup}
                  onChange={handleChange}
                  placeholder="Enter pickup address"
                  maxLength={200}
                  className="w-full pl-12 pr-4 py-3.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Drop Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                <input
                  type="text"
                  name="drop"
                  value={formData.drop}
                  onChange={handleChange}
                  placeholder="Enter drop address"
                  maxLength={200}
                  className="w-full pl-12 pr-4 py-3.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Date, Time & Book Button */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={today}
                className="w-full px-4 py-3.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Time
              </label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>
            <div className="col-span-2 flex items-end">
              <button
                type="button"
                onClick={handleBookNow}
                className="btn-accent w-full flex items-center justify-center gap-3 py-3.5 text-lg"
              >
                <Send className="w-5 h-5" />
                <span>Book Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingWidget;

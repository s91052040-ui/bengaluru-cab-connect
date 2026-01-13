import { useState } from 'react';
import { Phone, MapPin, Clock, Send, Car } from 'lucide-react';
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

const ContactSection = () => {
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
    // Limit input length
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

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="contact" className="section-padding bg-primary">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Contact Info */}
          <div className="text-primary-foreground">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              Get In Touch
            </span>
            <h2 className="heading-secondary mb-6">
              Ready to Book Your Ride?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-10">
              Select your package, enter your trip details, and book instantly via WhatsApp. 
              We're available 24/7 to assist you.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4">
              <a
                href="tel:9880077291"
                className="flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                  <Phone className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-lg">Call Us Anytime</div>
                  <div className="text-primary-foreground/70">+91 9880077291</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/10">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-lg">Our Location</div>
                  <div className="text-primary-foreground/70">Bengaluru, Karnataka</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/10">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-lg">Working Hours</div>
                  <div className="text-primary-foreground/70">24/7 - All Days</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Booking Widget */}
          <div className="bg-card rounded-2xl p-6 lg:p-8 shadow-xl">
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
            <div className="space-y-4 mb-4">
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

            {/* Date & Time */}
            <div className="grid grid-cols-2 gap-4 mb-6">
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
            </div>

            {/* Book Now Button */}
            <button
              type="button"
              onClick={handleBookNow}
              className="btn-accent w-full flex items-center justify-center gap-3 py-4 text-lg"
            >
              <Send className="w-5 h-5" />
              <span>Book Now via WhatsApp</span>
            </button>

            <p className="text-center text-sm text-muted-foreground mt-4">
              Or call us directly at{' '}
              <a href="tel:9880077291" className="text-accent font-semibold hover:underline">
                9880077291
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

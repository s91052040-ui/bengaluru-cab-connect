import { useState } from 'react';
import { Phone, MapPin, Clock, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup: '',
    drop: '',
    date: '',
    time: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Hi! I'd like to book a cab.
    
Name: ${formData.name}
Phone: ${formData.phone}
Pickup: ${formData.pickup}
Drop: ${formData.drop}
Date: ${formData.date}
Time: ${formData.time}`;

    const whatsappUrl = `https://wa.me/919880077291?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
              Fill out the form or give us a call. We're available 24/7 to assist you 
              with your travel needs in Bangalore.
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

          {/* Right - Booking Form */}
          <div className="bg-card rounded-2xl p-6 lg:p-8 shadow-xl">
            <h3 className="heading-tertiary text-foreground mb-6">Book Your Cab</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Pickup Location
                </label>
                <input
                  type="text"
                  name="pickup"
                  value={formData.pickup}
                  onChange={handleChange}
                  placeholder="Enter pickup address"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Drop Location
                </label>
                <input
                  type="text"
                  name="drop"
                  value={formData.drop}
                  onChange={handleChange}
                  placeholder="Enter drop address"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
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
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn-accent w-full flex items-center justify-center gap-2 py-4 text-lg"
              >
                <Send className="w-5 h-5" />
                <span>Send Booking Request</span>
              </button>

              <p className="text-center text-sm text-muted-foreground">
                Or call us directly at{' '}
                <a href="tel:9880077291" className="text-accent font-semibold hover:underline">
                  9880077291
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

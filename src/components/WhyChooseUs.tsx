import { Shield, Clock, Wallet, Headphones, ThumbsUp, Users } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Professional Drivers',
    description: 'Experienced, verified drivers who know Bangalore inside out.',
  },
  {
    icon: Shield,
    title: 'Clean & Safe Vehicles',
    description: 'Well-maintained, sanitized cars for a comfortable journey.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock customer support for any assistance.',
  },
  {
    icon: Clock,
    title: 'On-Time Service',
    description: 'Punctual pickups and drops, every single time.',
  },
  {
    icon: Wallet,
    title: 'Transparent Pricing',
    description: 'No hidden charges. Pay only what you see upfront.',
  },
  {
    icon: ThumbsUp,
    title: 'Direct Service',
    description: 'No middlemen or commissions. Deal directly with us.',
  },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              Why Choose Us
            </span>
            <h2 className="heading-secondary text-foreground mb-6">
              Your Trusted Cab Partner in Bangalore
            </h2>
            <p className="text-body mb-8">
              At Public Tours Travels, we understand that reliability and trust are paramount 
              when it comes to cab services. With over a decade of experience serving Bangalore, 
              we've built our reputation on delivering exceptional service every single time.
            </p>
            <p className="text-body mb-8">
              Whether you need a quick airport transfer or a multi-day outstation trip, 
              our team is committed to making your journey safe, comfortable, and memorable.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-secondary rounded-lg">
                <div className="text-3xl font-heading font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
              <div className="text-center p-4 bg-secondary rounded-lg">
                <div className="text-3xl font-heading font-bold text-primary">5000+</div>
                <div className="text-sm text-muted-foreground">Trips</div>
              </div>
              <div className="text-center p-4 bg-secondary rounded-lg">
                <div className="text-3xl font-heading font-bold text-primary">4.9★</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="flex gap-4 p-5 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

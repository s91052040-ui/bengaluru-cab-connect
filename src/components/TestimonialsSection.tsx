import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    location: 'Koramangala, Bangalore',
    rating: 5,
    text: 'Excellent service! The driver was very professional and the car was spotless. Reached the airport well on time. Highly recommended for airport transfers.',
  },
  {
    name: 'Priya Sharma',
    location: 'Whitefield, Bangalore',
    rating: 5,
    text: 'Used their service for our family trip to Mysore. The Innova was very comfortable and the driver knew all the best routes. Great experience overall!',
  },
  {
    name: 'Anil Reddy',
    location: 'Indiranagar, Bangalore',
    rating: 5,
    text: 'Very reliable cab service. I use them regularly for office commute. Always on time and the pricing is very transparent. No hidden charges.',
  },
  {
    name: 'Sneha Patel',
    location: 'HSR Layout, Bangalore',
    rating: 5,
    text: 'Booked their Tempo Traveller for our team outing to Coorg. The vehicle was in excellent condition and the driver was very courteous.',
  },
  {
    name: 'Mohammed Ashraf',
    location: 'Jayanagar, Bangalore',
    rating: 5,
    text: 'Best cab service in Bangalore! Clean cars, professional drivers, and they even waited for me when my flight was delayed. True 24/7 support.',
  },
  {
    name: 'Kavitha Nair',
    location: 'Electronic City, Bangalore',
    rating: 5,
    text: 'Used their wedding car service and it was perfect. The decorated car looked beautiful and the chauffeur was very professional. Thank you!',
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Testimonials
          </span>
          <h2 className="heading-secondary text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued customers have to say 
            about their experience with Public Tours Travels.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-card border border-border/50 relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-accent/20" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-secondary rounded-full px-6 py-3">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-primary border-2 border-background flex items-center justify-center text-xs text-primary-foreground font-medium"
                >
                  {['R', 'P', 'A', 'S'][i]}
                </div>
              ))}
            </div>
            <span className="text-muted-foreground text-sm ml-2">
              <span className="font-semibold text-foreground">5000+</span> happy customers across Bangalore
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

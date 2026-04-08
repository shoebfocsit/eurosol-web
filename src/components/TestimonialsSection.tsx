import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import ScrollAnimator from "./ScrollAnimator";

const testimonials = [
  {
    name: "Rahul Sharma",
    location: "Lucknow, UP",
    rating: 5,
    text: "Eurosol Prime transformed our home! Our electricity bill dropped from ₹8,000 to just ₹800 per month. The installation was quick, professional, and hassle-free. Highly recommended!",
  },
  {
    name: "Amit Pandey",
    location: "Kanpur, UP",
    rating: 5,
    text: "Best decision we ever made. The team at Eurosol Prime guided us through every step, from subsidy application to net metering. Absolutely world-class service!",
  },
  {
    name: "Neha Srivastava",
    location: "Varanasi, UP",
    rating: 5,
    text: "We installed a 10kW system for our school and the results have been phenomenal. Clean energy, zero bills, and the students love learning about solar technology!",
  },
  {
    name: "Vikram Singh",
    location: "Noida, UP",
    rating: 5,
    text: "The quality of panels and inverter is outstanding. Eurosol Prime uses top-tier European components that you can actually see performing better than local alternatives.",
  },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((p) => (p + 1) % testimonials.length);

  return (
    <section id="testimonials" className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollAnimator className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 leading-tight">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
        </ScrollAnimator>

        <ScrollAnimator>
          <div className="max-w-3xl mx-auto">
            <div className="glass rounded-2xl p-8 sm:p-10 relative">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
              
              <div className="flex gap-1 mb-5">
                {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground text-base sm:text-lg leading-relaxed mb-8 min-h-[80px]">
                "{testimonials[active].text}"
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-foreground">{testimonials[active].name}</div>
                  <div className="text-sm text-muted-foreground">{testimonials[active].location}</div>
                </div>
                <div className="flex gap-2">
                  <button onClick={prev} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-primary/30 transition-colors">
                    <ChevronLeft className="w-5 h-5 text-muted-foreground" />
                  </button>
                  <button onClick={next} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-primary/30 transition-colors">
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </button>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === active ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"}`}
                />
              ))}
            </div>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  );
};

export default TestimonialsSection;

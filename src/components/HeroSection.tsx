import { useEffect, useState, useRef } from "react";
import { ArrowRight, Zap, Home, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Zap, value: 500, suffix: "+", label: "Panels Installed" },
  { icon: Home, value: 300, suffix: "+", label: "Homes Powered" },
  { icon: Calendar, value: 10, suffix: "+", label: "Years Experience" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
        <div
          className="absolute inset-0 opacity-[0.03] animate-grid-move"
          style={{
            backgroundImage: `linear-gradient(hsl(25 95% 53% / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(25 95% 53% / 0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Radial glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8 w-full">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-muted-foreground tracking-wide">EURO TECHNOLOGY SOLAR INTELLIGENCE</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6 animate-fade-in-up">
            Power Your Future{" "}
            <br className="hidden sm:block" />
            <span className="gradient-text">With Solar Energy</span>
          </h1>

          {/* Sub */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            Stop overpaying for electricity. Switch to premium solar solutions and save up to 90% on your energy bills with Eurosol Prime.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: "400ms" }}>
            <Button size="lg" className="animate-pulse-glow text-base px-8 py-6 font-bold group">
              Book Free Site Survey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8 py-6 border-border hover:border-primary/50">
              Explore Services
            </Button>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 sm:mt-24 glass rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "600ms" }}>
          <div className="grid grid-cols-3 gap-4 sm:gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 text-primary mb-3 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

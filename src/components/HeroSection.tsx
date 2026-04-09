import { useEffect, useState, useRef } from "react";
import { ArrowRight, Zap, Home, Calendar, Users, Star, Shield, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import ownerImg from "@/assets/owner-portrait.png";
import heroBg from "@/assets/solar-hero-bg.jpg";
import ParticleField from "./ParticleField";

const stats = [
  { icon: Zap, value: 500, suffix: "+", label: "Panels Installed" },
  { icon: Home, value: 300, suffix: "+", label: "Homes Powered" },
  { icon: Calendar, value: 10, suffix: "+", label: "Years Experience" },
  { icon: Users, value: 1200, suffix: "+", label: "Happy Customers" },
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

const floatingBadges = [
  { icon: Star, text: "4.9★ Rating", pos: "top-[10%] left-[-30%] sm:left-[-40%]", delay: "0s" },
  { icon: Shield, text: "10 Yr Warranty", pos: "top-[30%] right-[-30%] sm:right-[-40%]", delay: "0.5s" },
  { icon: Users, text: "1200+ Customers", pos: "bottom-[25%] left-[-25%] sm:left-[-35%]", delay: "1s" },
  { icon: Zap, text: "500+ Installations", pos: "bottom-[8%] right-[-25%] sm:right-[-35%]", delay: "1.5s" },
];

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const parallaxSlow = scrollY * 0.3;
  const parallaxFast = scrollY * 0.5;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with parallax */}
      <div className="absolute inset-0" style={{ transform: `translateY(${parallaxSlow * 0.5}px)` }}>
        <img src={heroBg} alt="" className="w-full h-full object-cover scale-110" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
      </div>

      {/* Particle animation */}
      <ParticleField />

      {/* Animated Grid */}
      <div className="absolute inset-0 z-[2]">
        <div
          className="absolute inset-0 opacity-[0.03] animate-grid-move"
          style={{
            backgroundImage: `linear-gradient(hsl(25 95% 53% / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(25 95% 53% / 0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left — Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1" style={{ transform: `translateY(${parallaxFast * -0.1}px)` }}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 animate-fade-in">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium text-muted-foreground tracking-wide">EURO TECHNOLOGY SOLAR INTELLIGENCE</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-5 animate-fade-in-up">
              Power Your Future{" "}
              <br className="hidden sm:block" />
              <span className="gradient-text">With Solar Energy</span>
            </h1>

            {/* Sub */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              Stop overpaying for electricity. Switch to premium solar solutions and save up to <span className="text-primary font-bold">90% on your energy bills</span> with Eurosol Prime. Trusted by 1200+ families across India.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              {["✅ Free Site Survey", "✅ Govt. Subsidy Help", "✅ 10-Year Warranty"].map((t) => (
                <span key={t} className="text-xs sm:text-sm text-muted-foreground glass rounded-full px-3 py-1.5">{t}</span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in-up" style={{ animationDelay: "400ms" }}>
              <Button
                size="lg"
                className="animate-pulse-glow text-base px-8 py-6 font-bold group"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Book Free Site Survey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base px-8 py-6 border-border hover:border-primary/50 group"
                onClick={() => document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Calculator className="w-5 h-5 mr-1" />
                Calculate Savings
              </Button>
            </div>
          </div>

          {/* Right — Owner Photo with Floating Badges */}
          <div className="relative flex justify-center order-1 lg:order-2 animate-fade-in-up" style={{ animationDelay: "300ms", transform: `translateY(${parallaxFast * -0.15}px)` }}>
            {/* Glow behind owner */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 sm:w-80 sm:h-80 bg-primary/15 rounded-full blur-[80px]" />
            </div>

            {/* Owner image container — wider to allow floating badges */}
            <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] flex items-center justify-center">
              {/* Circular photo */}
              <div className="w-48 h-48 sm:w-60 sm:h-60 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/30 relative z-10 shadow-2xl shadow-primary/20">
                <img src={ownerImg} alt="Eurosol Prime Founder" className="w-full h-full object-cover object-top" width={768} height={1024} />
              </div>

              {/* Rotating ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-[280px] md:h-[280px] rounded-full border-2 border-dashed border-primary/20 animate-spin" style={{ animationDuration: "20s" }} />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-[320px] md:h-[320px] rounded-full border border-primary/10 animate-spin" style={{ animationDuration: "30s", animationDirection: "reverse" }} />
              </div>

              {/* Floating vector badges — positioned relative to the 320/400px container */}
              {floatingBadges.map((badge, i) => (
                <div
                  key={i}
                  className={`absolute ${badge.pos} z-20 glass rounded-xl px-3 py-2 flex items-center gap-2 animate-float shadow-lg shadow-primary/10 border border-primary/10`}
                  style={{ animationDelay: badge.delay }}
                >
                  <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <badge.icon className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-semibold text-foreground whitespace-nowrap">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-12 sm:mt-20 glass rounded-2xl p-5 sm:p-8 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: "600ms" }}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 text-primary mb-2 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-foreground">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[10px] sm:text-xs text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

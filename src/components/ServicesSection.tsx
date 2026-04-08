import { SunMedium, Settings, PenTool, ArrowRight } from "lucide-react";
import ScrollAnimator from "./ScrollAnimator";

const services = [
  {
    icon: SunMedium,
    title: "Solar Panel Installation",
    desc: "Complete rooftop and ground-mounted solar panel installation for homes, offices, and industries. We handle everything from design to commissioning.",
    features: ["Site Assessment", "System Design", "Net Metering Setup"],
  },
  {
    icon: Settings,
    title: "Maintenance & Repair",
    desc: "Annual maintenance contracts and emergency repair services to ensure your solar system operates at peak efficiency year-round.",
    features: ["Panel Cleaning", "Inverter Check", "Performance Monitoring"],
  },
  {
    icon: PenTool,
    title: "Custom System Design",
    desc: "Bespoke solar solutions designed by our expert engineers to maximize energy output based on your unique requirements and location.",
    features: ["Energy Audit", "3D Roof Analysis", "ROI Calculation"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollAnimator className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Our Services</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 leading-tight">
            Comprehensive <span className="gradient-text">Solar Solutions</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            From installation to long-term maintenance, we offer end-to-end solar energy solutions.
          </p>
        </ScrollAnimator>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ScrollAnimator key={i} delay={i * 120}>
              <div className="glass rounded-2xl p-7 group hover:border-primary/30 transition-all duration-500 h-full flex flex-col relative overflow-hidden">
                {/* Accent gradient on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                  <s.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{s.desc}</p>
                
                <div className="space-y-2 mb-6">
                  {s.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{f}</span>
                    </div>
                  ))}
                </div>

                <button className="inline-flex items-center gap-2 text-primary font-semibold text-sm group/btn mt-auto">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

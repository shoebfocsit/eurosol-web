import { SunMedium, Settings, PenTool, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollAnimator from "./ScrollAnimator";
import solarInstallation from "@/assets/solar-installation.jpg";
import solarMaintenance from "@/assets/solar-maintenance.jpg";
import solarPanels from "@/assets/solar-panels-closeup.jpg";

const services = [
  {
    icon: SunMedium,
    title: "Solar Panel Installation",
    desc: "Complete rooftop and ground-mounted solar panel installation for homes, offices, and industries. We handle everything from design to commissioning.",
    features: ["Site Assessment", "System Design", "Net Metering Setup"],
    image: solarInstallation,
    slug: "solar-installation",
  },
  {
    icon: Settings,
    title: "Maintenance & Repair",
    desc: "Annual maintenance contracts and emergency repair services to ensure your solar system operates at peak efficiency year-round.",
    features: ["Panel Cleaning", "Inverter Check", "Performance Monitoring"],
    image: solarMaintenance,
    slug: "maintenance-repair",
  },
  {
    icon: PenTool,
    title: "Custom System Design",
    desc: "Bespoke solar solutions designed by our expert engineers to maximize energy output based on your unique requirements and location.",
    features: ["Energy Audit", "3D Roof Analysis", "ROI Calculation"],
    image: solarPanels,
    slug: "custom-design",
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
            From installation to long-term maintenance, we offer end-to-end solar energy solutions across Indore, Nagpur, and all of Central India.
          </p>
        </ScrollAnimator>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ScrollAnimator key={i} delay={i * 120}>
              <div className="glass rounded-2xl group hover:border-primary/30 transition-all duration-500 h-full flex flex-col relative overflow-hidden">
                <div className="h-48 overflow-hidden relative">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" width={1200} height={800} />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                      <s.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="h-0.5 w-12 bg-primary/50 mb-4 group-hover:w-20 transition-all duration-500" />
                  <h3 className="text-xl font-bold mb-3 text-foreground">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{s.desc}</p>
                  
                  <div className="space-y-2 mb-5">
                    {s.features.map((f, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{f}</span>
                      </div>
                    ))}
                  </div>

                  <Link to={`/services/${s.slug}`} className="inline-flex items-center gap-2 text-primary font-semibold text-sm group/btn mt-auto">
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </ScrollAnimator>
          ))}
        </div>

        {/* Additional Services Links */}
        <ScrollAnimator className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Net Metering Setup", slug: "net-metering", desc: "Export excess power to the grid" },
              { title: "Subsidy Assistance", slug: "subsidy-assistance", desc: "PM Surya Ghar & state schemes" },
              { title: "Commercial Solar", slug: "commercial-solar", desc: "10kW to 500kW+ systems" },
            ].map((s, i) => (
              <Link key={i} to={`/services/${s.slug}`} className="glass rounded-xl p-4 sm:p-5 group hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                <h4 className="font-bold text-foreground text-sm mb-1">{s.title}</h4>
                <p className="text-xs text-muted-foreground mb-2">{s.desc}</p>
                <span className="text-primary text-xs font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read More <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </ScrollAnimator>
      </div>
    </section>
  );
};

export default ServicesSection;

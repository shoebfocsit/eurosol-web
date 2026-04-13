import { MapPin, Zap } from "lucide-react";
import ScrollAnimator from "./ScrollAnimator";
import solarInstallation from "@/assets/solar-installation.jpg";
import solarPanels from "@/assets/solar-panels-closeup.jpg";
import happyCustomer from "@/assets/happy-customer.jpg";
import heroBg from "@/assets/solar-hero-bg.jpg";

const projects = [
  { title: "BrightHome Residency", location: "Indore, MP", capacity: "15 kW", panels: 42, savings: "₹18,000/month", image: solarInstallation },
  { title: "GreenMart Commercial", location: "Nagpur, Maharashtra", capacity: "50 kW", panels: 140, savings: "₹65,000/month", image: solarPanels },
  { title: "EcoSchool Campus", location: "Bhopal, MP", capacity: "25 kW", panels: 72, savings: "₹30,000/month", image: happyCustomer },
  { title: "SunVilla Township", location: "Indore, MP", capacity: "100 kW", panels: 280, savings: "₹1,20,000/month", image: heroBg },
];

const ProjectsShowcase = () => {
  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimator className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Our Projects</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 leading-tight">
            Successfully <span className="gradient-text">Completed Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Real results from real installations across Madhya Pradesh & Maharashtra. See how we're transforming homes and businesses.
          </p>
        </ScrollAnimator>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <ScrollAnimator key={i} delay={i * 100}>
              <div className="glass rounded-2xl overflow-hidden group hover:border-primary/30 transition-all duration-500">
                <div className="h-48 relative overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" width={1200} height={800} />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                  <div className="absolute top-4 right-4 glass rounded-full px-3 py-1 text-xs font-bold text-primary">{p.capacity}</div>
                  <div className="absolute bottom-4 left-5 right-5">
                    <h3 className="text-xl font-bold text-foreground">{p.title}</h3>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm mt-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {p.location}
                    </div>
                  </div>
                </div>
                <div className="px-5 py-4 flex items-center justify-between">
                  <div className="text-center">
                    <div className="text-lg font-bold text-foreground">{p.panels}</div>
                    <div className="text-xs text-muted-foreground">Panels</div>
                  </div>
                  <div className="w-px h-8 bg-border" />
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">{p.savings}</div>
                    <div className="text-xs text-muted-foreground">Monthly Savings</div>
                  </div>
                </div>
              </div>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;

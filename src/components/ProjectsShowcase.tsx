import { MapPin, Zap } from "lucide-react";
import ScrollAnimator from "./ScrollAnimator";

const projects = [
  { title: "BrightHome Residency", location: "Lucknow, UP", capacity: "15 kW", panels: 42, savings: "₹18,000/month" },
  { title: "GreenMart Commercial", location: "Kanpur, UP", capacity: "50 kW", panels: 140, savings: "₹65,000/month" },
  { title: "EcoSchool Campus", location: "Varanasi, UP", capacity: "25 kW", panels: 72, savings: "₹30,000/month" },
  { title: "SunVilla Township", location: "Noida, UP", capacity: "100 kW", panels: 280, savings: "₹1,20,000/month" },
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
            Real results from real installations across Uttar Pradesh.
          </p>
        </ScrollAnimator>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <ScrollAnimator key={i} delay={i * 100}>
              <div className="glass rounded-2xl overflow-hidden group hover:border-primary/30 transition-all duration-500">
                {/* Image placeholder */}
                <div className="h-48 relative bg-gradient-to-br from-secondary via-navy-100 to-secondary overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity">
                    <Zap className="w-20 h-20 text-primary" />
                  </div>
                  {/* Capacity badge */}
                  <div className="absolute top-4 right-4 glass rounded-full px-3 py-1 text-xs font-bold text-primary">
                    {p.capacity}
                  </div>
                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-5 right-5">
                    <h3 className="text-xl font-bold text-foreground">{p.title}</h3>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm mt-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {p.location}
                    </div>
                  </div>
                </div>
                {/* Stats */}
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

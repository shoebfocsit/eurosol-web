import { Wrench, Target, IndianRupee, HeadphonesIcon, Cpu, Timer } from "lucide-react";
import ScrollAnimator from "./ScrollAnimator";

const features = [
  { icon: Wrench, title: "Expert Installation", desc: "Our certified engineers ensure perfect installation with precision and safety standards." },
  { icon: Target, title: "Tailored Solutions", desc: "Custom-designed solar systems to match your specific energy needs and roof layout." },
  { icon: IndianRupee, title: "Cost-Efficient", desc: "Maximize your savings with high-efficiency panels and government subsidy support." },
  { icon: HeadphonesIcon, title: "End-to-End Support", desc: "From consultation to maintenance, we're with you at every step of the journey." },
  { icon: Cpu, title: "Premium Components", desc: "European-grade solar panels and inverters for maximum power output and longevity." },
  { icon: Timer, title: "Quick Installation", desc: "Rapid deployment within 7-10 days with zero disruption to your daily routine." },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 sm:py-28 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[150px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollAnimator className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Why Choose Us</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 leading-tight">
            The <span className="gradient-text">Eurosol Prime</span> Advantage
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            We combine European solar technology with Indian expertise to deliver unmatched quality and value.
          </p>
        </ScrollAnimator>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <ScrollAnimator key={i} delay={i * 80}>
              <div className="glass rounded-2xl p-6 group hover:border-primary/30 hover:glow-orange-sm transition-all duration-500 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

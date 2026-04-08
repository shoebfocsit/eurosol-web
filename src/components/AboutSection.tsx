import { CheckCircle2, Award, Shield, Leaf } from "lucide-react";
import ScrollAnimator from "./ScrollAnimator";

const highlights = [
  { icon: Award, text: "Certified & Licensed Installers" },
  { icon: Shield, text: "10-Year Performance Warranty" },
  { icon: Leaf, text: "100% Clean & Green Energy" },
  { icon: CheckCircle2, text: "Government Subsidy Assistance" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <ScrollAnimator animation="fade-in-up">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl glass-strong overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-primary/20 flex items-center justify-center mb-4">
                      <Leaf className="w-10 h-10 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">Powering a Greener Tomorrow</p>
                  </div>
                </div>
              </div>
              {/* Floating accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-primary/10 border border-primary/20 animate-float" />
            </div>
          </ScrollAnimator>

          {/* Text Side */}
          <div>
            <ScrollAnimator>
              <span className="text-primary font-semibold text-sm tracking-widest uppercase">About Us</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-6 leading-tight">
                India's Trusted{" "}
                <span className="gradient-text">Solar Energy</span> Partner
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Eurosol Prime is a premier solar energy solutions provider dedicated to transforming how India powers its homes and businesses. With cutting-edge European technology and deep local expertise, we deliver solar systems that are efficient, durable, and cost-effective. Our mission is to make clean energy accessible to every household.
              </p>
            </ScrollAnimator>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <ScrollAnimator key={i} delay={i * 100}>
                  <div className="flex items-center gap-3 glass rounded-xl px-4 py-3 group hover:border-primary/30 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm text-foreground font-medium">{item.text}</span>
                  </div>
                </ScrollAnimator>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

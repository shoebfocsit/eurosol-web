import { CheckCircle2, Award, Shield, Leaf } from "lucide-react";
import ScrollAnimator from "./ScrollAnimator";
import happyCustomerImg from "@/assets/happy-customer.jpg";

const highlights = [
  { icon: Award, text: "Certified & Licensed Installers" },
  { icon: Shield, text: "10+ Years of Industry Experience" },
  { icon: Leaf, text: "100% Clean & Green Energy" },
  { icon: CheckCircle2, text: "Government Subsidy Assistance" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollAnimator animation="fade-in-up">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden relative shadow-2xl shadow-primary/10">
                <img src={happyCustomerImg} alt="Happy customer family with solar panels" className="w-full h-full object-cover" loading="lazy" width={1200} height={800} />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 glass rounded-xl p-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <Leaf className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-foreground">1200+ Happy Families</div>
                    <div className="text-[10px] text-muted-foreground">Saving money with Eurosol Prime</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-primary/10 border border-primary/20 animate-float" />
            </div>
          </ScrollAnimator>

          <div>
            <ScrollAnimator>
              <span className="text-primary font-semibold text-sm tracking-widest uppercase">About Us</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-6 leading-tight">
                India's Trusted{" "}
                <span className="gradient-text">Solar Energy</span> Partner
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Eurosol Prime is a premier solar energy solutions provider headquartered in Indore, Madhya Pradesh with a strong presence in Nagpur, Maharashtra. With cutting-edge European technology and deep local expertise, we deliver solar systems that are efficient, durable, and cost-effective.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our mission is to make clean energy accessible to every household. We've helped <span className="text-primary font-semibold">1200+ families</span> reduce their electricity bills by up to 90%, backed by our <span className="text-primary font-semibold">10+ years of industry experience</span>.
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

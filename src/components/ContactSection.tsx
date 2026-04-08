import { Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ScrollAnimator from "./ScrollAnimator";

const contactInfo = [
  { icon: Phone, label: "Call Us", value: "+91 98765 43210", sub: "Mon-Sat, 9AM-7PM" },
  { icon: Mail, label: "Email Us", value: "info@eurosolprime.com", sub: "Quick response guaranteed" },
  { icon: Clock, label: "Working Hours", value: "Mon - Sat: 9AM - 7PM", sub: "Sunday by appointment" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Info Strip */}
        <ScrollAnimator className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {contactInfo.map((c, i) => (
              <div key={i} className="glass rounded-2xl p-6 text-center group hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <c.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{c.label}</div>
                <div className="text-base font-bold text-foreground mb-1">{c.value}</div>
                <div className="text-xs text-muted-foreground">{c.sub}</div>
              </div>
            ))}
          </div>
        </ScrollAnimator>

        {/* Form */}
        <ScrollAnimator>
          <div className="max-w-2xl mx-auto glass rounded-2xl p-8 sm:p-10">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold">
                Get Your <span className="gradient-text">Free Quote</span>
              </h2>
              <p className="text-muted-foreground mt-2 text-sm">Fill in the details and our team will contact you within 24 hours.</p>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input placeholder="Your Name" className="bg-secondary/50 border-border focus:border-primary" />
                <Input placeholder="Phone Number" type="tel" className="bg-secondary/50 border-border focus:border-primary" />
              </div>
              <Input placeholder="Email Address" type="email" className="bg-secondary/50 border-border focus:border-primary" />
              <Input placeholder="Your City / Location" className="bg-secondary/50 border-border focus:border-primary" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input placeholder="Monthly Electricity Bill (₹)" type="number" className="bg-secondary/50 border-border focus:border-primary" />
                <Input placeholder="Roof Area (sq ft)" type="number" className="bg-secondary/50 border-border focus:border-primary" />
              </div>
              <textarea
                placeholder="Any additional message..."
                rows={3}
                className="flex w-full rounded-md border border-border bg-secondary/50 px-3 py-2 text-base placeholder:text-muted-foreground focus:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:text-sm resize-none"
              />
              <Button className="w-full animate-pulse-glow text-base py-6 font-bold group" type="submit">
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Request Free Consultation
              </Button>
            </form>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  );
};

export default ContactSection;

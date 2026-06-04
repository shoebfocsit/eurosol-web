import { useState, useEffect } from "react";
import { Phone, Mail, Clock, Send, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ScrollAnimator from "./ScrollAnimator";
import { toast } from "sonner";

const contactInfo = [
  { icon: Phone, label: "Call Us", value: "+91 98344 60139", sub: "Mon-Sat, 9AM-7PM" },
  { icon: Mail, label: "Email Us", value: "info@eurosolprime.com", sub: "Quick response guaranteed" },
  { icon: Clock, label: "Working Hours", value: "Mon - Sat: 9AM - 7PM", sub: "Sunday by appointment" },
];

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat",
  "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh",
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
  "Uttarakhand", "West Bengal", "Delhi", "Jammu & Kashmir", "Ladakh",
];

const serviceMap: Record<string, string> = {
  "agrivoltaics": "Agrivoltaics (Solar Farming)",
  "virtual-net-metering": "Virtual Net Metering (VNM)",
  "open-access-solar": "Open Access Solar",
  "solar-ppa": "Solar Power Purchase Agreement (PPA)",
  "green-power-supply": "Green Power Supply",
  "industrial-solar": "Industrial Solar Solutions",
  "commercial-solar": "Commercial Solar Solutions",
  "institutional-solar": "Institutional Solar Solutions",
  "solar-epc": "Solar EPC Services",
  "operation-maintenance": "Operation & Maintenance (O&M)",
  "scada-monitoring": "Remote Monitoring / SCADA Monitoring",
  "energy-efficiency": "Energy Efficiency Solutions",
  "net-metering": "Net Metering Services",
  "ground-mounted-solar": "Ground Mounted Solar Plants",
  "rooftop-solar": "Rooftop Solar Systems",
  "group-captive-solar": "Group Captive Solar Solutions",
  "project-design-engineering": "Solar Project Design & Engineering",
  "installation-commissioning": "Solar Installation & Commissioning",
  "regulatory-approval-support": "Solar Regulatory & Approval Support",
  "solar-asset-management": "Solar Asset Management",
};

interface FormData {
  name: string;
  phone: string;
  email: string;
  city: string;
  state: string;
  monthlyBill: string;
  message: string;
  service: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  city?: string;
  state?: string;
  monthlyBill?: string;
}

const ContactSection = () => {
  const [form, setForm] = useState<FormData>({
    name: "", phone: "", email: "", city: "", state: "", monthlyBill: "", message: "", service: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const serviceParam = params.get("service");
    if (serviceParam && serviceMap[serviceParam]) {
      setForm((p) => ({ ...p, service: serviceMap[serviceParam] }));
      
      // Smooth scroll to the contact form on render if the parameter is present
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, []);

  const getServiceType = (serviceName: string): string => {
    if (!serviceName) return "General Inquiry";
    
    const lowercaseName = serviceName.toLowerCase();
    
    // Installation
    if (
      lowercaseName.includes("installation") ||
      lowercaseName.includes("rooftop") ||
      lowercaseName.includes("ground mounted") ||
      lowercaseName.includes("agrivoltaics") ||
      lowercaseName.includes("industrial") ||
      lowercaseName.includes("commercial") ||
      lowercaseName.includes("institutional") ||
      lowercaseName.includes("epc")
    ) {
      return "Installation";
    }
    
    // Maintenance
    if (
      lowercaseName.includes("maintenance") ||
      lowercaseName.includes("scada") ||
      lowercaseName.includes("asset management") ||
      lowercaseName.includes("monitoring")
    ) {
      return "Maintenance";
    }
    
    // Custom Design
    if (
      lowercaseName.includes("design") ||
      lowercaseName.includes("engineering")
    ) {
      return "Custom Design";
    }
    
    // Solar Audit
    if (
      lowercaseName.includes("efficiency") ||
      lowercaseName.includes("audit")
    ) {
      return "Solar Audit";
    }
    
    return "General Inquiry";
  };

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    else if (!/^(\+91[-\s]?)?[6-9]\d{9}$/.test(form.phone.replace(/[\s-]/g, "")))
      e.phone = "Enter a valid Indian phone number";
    
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      e.email = "Enter a valid email address";

    if (!form.city.trim()) e.city = "City is required";
    if (!form.state) e.state = "State is required";
    if (!form.monthlyBill) e.monthlyBill = "Monthly bill is required";
    else if (parseInt(form.monthlyBill) < 500) e.monthlyBill = "Minimum ₹500";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const combinedMessage = [
        form.service ? `[Service: ${form.service}]` : "",
        form.state ? `[State: ${form.state}]` : "",
        form.monthlyBill ? `[Monthly Bill: ₹${form.monthlyBill}]` : "",
        form.message.trim()
      ].filter(Boolean).join("\n");

      const payload = {
        fullName: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        city: form.city.trim(),
        serviceType: getServiceType(form.service),
        message: combinedMessage || undefined,
      };

      const res = await fetch("https://api.eurosolservice.com/v1/web/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to submit");

      setSubmitted(true);
      toast.success("🎉 Inquiry submitted! We'll contact you within 24 hours.");
      setForm({ name: "", phone: "", email: "", city: "", state: "", monthlyBill: "", message: "", service: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      toast.error("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  const updateField = (field: keyof FormData, value: string) => {
    setForm((p) => ({ ...p, [field]: value }));
    if (errors[field as keyof FormErrors]) setErrors((p) => ({ ...p, [field]: undefined }));
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimator className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {contactInfo.map((c, i) => (
              <div key={i} className="glass rounded-2xl p-5 text-center group hover:border-primary/30 transition-all duration-300">
                <div className="w-11 h-11 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <c.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{c.label}</div>
                <div className="text-sm font-bold text-foreground mb-1">{c.value}</div>
                <div className="text-xs text-muted-foreground">{c.sub}</div>
              </div>
            ))}
          </div>
        </ScrollAnimator>

        <ScrollAnimator>
          <div className="max-w-2xl mx-auto glass rounded-2xl p-6 sm:p-10">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold">
                Get Your <span className="gradient-text">Free Quote</span>
              </h2>
              <p className="text-muted-foreground mt-2 text-sm">Fill in the details and our team will contact you within 24 hours.</p>
            </div>

            {submitted ? (
              <div className="text-center py-12 animate-fade-in">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Thank You!</h3>
                <p className="text-muted-foreground">We've received your inquiry. Our team will reach out shortly.</p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Input placeholder="Your Name *" value={form.name} onChange={(e) => updateField("name", e.target.value)} className={`bg-secondary/50 border-border focus:border-primary ${errors.name ? "border-destructive" : ""}`} />
                    {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <Input placeholder="Phone Number *" type="tel" value={form.phone} onChange={(e) => updateField("phone", e.target.value)} className={`bg-secondary/50 border-border focus:border-primary ${errors.phone ? "border-destructive" : ""}`} />
                    {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <Input placeholder="Email Address *" type="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} className={`bg-secondary/50 border-border focus:border-primary ${errors.email ? "border-destructive" : ""}`} />
                  {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Input placeholder="City *" value={form.city} onChange={(e) => updateField("city", e.target.value)} className={`bg-secondary/50 border-border focus:border-primary ${errors.city ? "border-destructive" : ""}`} />
                    {errors.city && <p className="text-destructive text-xs mt-1">{errors.city}</p>}
                  </div>
                  <div>
                    <select value={form.state} onChange={(e) => updateField("state", e.target.value)} className={`flex h-10 w-full rounded-md border bg-secondary/50 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${errors.state ? "border-destructive" : "border-border"} ${!form.state ? "text-muted-foreground" : ""}`}>
                      <option value="" className="bg-background text-muted-foreground">Select State *</option>
                      {indianStates.map((s) => (
                        <option key={s} value={s} className="bg-background text-foreground">{s}</option>
                      ))}
                    </select>
                    {errors.state && <p className="text-destructive text-xs mt-1">{errors.state}</p>}
                  </div>
                </div>

                <div>
                  <select
                    value={form.service}
                    onChange={(e) => updateField("service", e.target.value)}
                    className="flex h-10 w-full rounded-md border border-border bg-secondary/50 px-3 py-2 text-sm text-foreground focus:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="" className="bg-background text-muted-foreground">Select Service Interested In (Optional)</option>
                    {Object.values(serviceMap).map((name) => (
                      <option key={name} value={name} className="bg-background text-foreground">{name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <Input placeholder="Monthly Electricity Bill (₹) *" type="number" value={form.monthlyBill} onChange={(e) => updateField("monthlyBill", e.target.value)} className={`bg-secondary/50 border-border focus:border-primary ${errors.monthlyBill ? "border-destructive" : ""}`} />
                  {errors.monthlyBill && <p className="text-destructive text-xs mt-1">{errors.monthlyBill}</p>}
                </div>

                <textarea placeholder="Any additional message (Optional)..." rows={3} value={form.message} onChange={(e) => updateField("message", e.target.value)} className="flex w-full rounded-md border border-border bg-secondary/50 px-3 py-2 text-base placeholder:text-muted-foreground focus:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:text-sm resize-none text-foreground" />

                <Button className="w-full animate-pulse-glow text-base py-6 font-bold group" type="submit" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      Request Free Consultation
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </ScrollAnimator>
      </div>
    </section>
  );
};

export default ContactSection;

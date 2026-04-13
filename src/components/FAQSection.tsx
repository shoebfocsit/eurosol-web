import ScrollAnimator from "./ScrollAnimator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "How much does a solar panel system cost in India?",
    a: "A residential solar system typically costs ₹55,000–₹75,000 per kW before government subsidies. After PM Surya Ghar subsidy, costs can drop by ₹30,000–₹78,000 depending on system size. For a 3kW home system, you can expect to pay around ₹1,20,000–₹1,50,000 after subsidy. Use our free solar calculator above for a personalized estimate.",
  },
  {
    q: "How much can I save on my electricity bill with solar?",
    a: "Most homeowners save 80-90% on their electricity bills. A typical 3kW system generates 12-15 units per day, which covers most household needs. With net metering, any excess power is exported to the grid and credited to your account, further reducing your bills.",
  },
  {
    q: "What government subsidies are available for solar in Madhya Pradesh & Maharashtra?",
    a: "Under the PM Surya Ghar Muft Bijli Yojana, residential consumers can get subsidies up to ₹78,000 for systems up to 3kW. For 3-10kW systems, subsidy is ₹30,000/kW for the first 2kW and ₹18,000/kW for the next 1kW. Both MP and Maharashtra state governments also offer additional incentives. Eurosol Prime handles the entire subsidy application process for you.",
  },
  {
    q: "How long does installation take?",
    a: "A standard residential installation (2-5 kW) is completed within 3-5 working days, including mounting structure, panel installation, wiring, inverter setup, and testing. Commercial installations (10kW+) typically take 7-15 days depending on system size and site complexity.",
  },
  {
    q: "What is the lifespan of solar panels?",
    a: "Premium solar panels last 25-30 years with minimal degradation (less than 0.5% per year). Inverters typically last 10-15 years. Eurosol Prime uses only Tier-1 European-grade panels with 25-year performance warranties from manufacturers.",
  },
  {
    q: "Do solar panels work during monsoon or cloudy days?",
    a: "Yes! Modern solar panels generate 25-40% of their rated capacity even on cloudy days. During monsoon, while output reduces, your system still generates significant power. Over the year, Indore and Nagpur receive excellent solar irradiation (5-6 peak sun hours), making solar highly effective.",
  },
  {
    q: "What is net metering and how does it work?",
    a: "Net metering allows you to export excess solar power to the electricity grid. A bi-directional meter tracks both import and export. At the end of the billing cycle, you only pay for the net electricity consumed. In MP and Maharashtra, net metering policies are very favorable for residential consumers.",
  },
  {
    q: "Do you provide after-sales service and maintenance?",
    a: "Absolutely! We offer comprehensive Annual Maintenance Contracts (AMC) that include panel cleaning, inverter servicing, performance monitoring, and emergency repairs. Our team is based in Indore and Nagpur, ensuring quick response times across the region.",
  },
  {
    q: "Is my roof suitable for solar panels?",
    a: "Most roofs (RCC, metal sheet, or tiled) can support solar panels. We conduct a free site survey to assess roof condition, orientation, shading, and structural strength. Even if your roof faces east/west instead of south, we design systems to maximize output for your specific situation.",
  },
  {
    q: "What areas do you serve?",
    a: "Our headquarters is in Indore, Madhya Pradesh with a major branch in Nagpur, Maharashtra. We serve the entire MP and Maharashtra region including Bhopal, Ujjain, Jabalpur, Gwalior, Aurangabad, Pune, and surrounding areas. Contact us for service availability in your area.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 sm:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollAnimator className="text-center mb-12">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">FAQ</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-3 leading-tight">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto text-sm sm:text-base">
            Everything you need to know about going solar with Eurosol Prime.
          </p>
        </ScrollAnimator>

        <ScrollAnimator>
          <div className="glass rounded-2xl p-4 sm:p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-border/50">
                  <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-foreground hover:text-primary hover:no-underline py-4 sm:py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  );
};

export default FAQSection;

import { ArrowLeft, FileText, Shield, IndianRupee, Wrench, AlertTriangle, Landmark, XCircle, Scale, Phone, Truck, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  {
    icon: Zap,
    title: "1. Services",
    content: [
      "Eurosol Prime provides comprehensive solar energy solutions including:",
      "• **Residential Solar Installation:** Rooftop solar panel systems for homes (2kW to 15kW)",
      "• **Commercial & Industrial Solar:** Large-scale solar installations for businesses, factories, and institutions (10kW to 500kW+)",
      "• **Solar System Design:** Custom engineering and 3D roof analysis for optimal system design",
      "• **Net Metering Setup:** Complete assistance with DISCOM applications and bi-directional meter installation",
      "• **Government Subsidy Processing:** End-to-end help with PM Surya Ghar and state subsidy applications",
      "• **Maintenance & Repair:** Annual maintenance contracts (AMC), panel cleaning, inverter servicing, and emergency repairs",
      "• **Solar Monitoring:** IoT-based real-time monitoring solutions for system performance tracking",
      "All services are subject to site feasibility, structural assessment, local regulations, and DISCOM approvals. Service availability may vary by location.",
    ],
  },
  {
    icon: IndianRupee,
    title: "2. Quotations & Pricing",
    content: [
      "• All quotes provided through our website, solar calculator, or consultations are **estimates only** and are subject to change",
      "• Final pricing depends on: site survey findings, roof condition & type, system design, equipment selection, distance from our office, and applicable government subsidies",
      "• Quoted prices include: solar panels, inverter, mounting structure, wiring, installation labor, commissioning, and net metering application",
      "• Quoted prices exclude: any structural modifications to the roof, electrical panel upgrades (if required), and DISCOM fees for net metering",
      "• Price validity: Quotations are valid for **30 days** from the date of issue unless otherwise specified",
      "• GST: All prices are inclusive of applicable GST (currently 12% for solar systems)",
      "• **Price Disclaimer:** Solar equipment prices fluctuate based on global market conditions, exchange rates, and supply chain dynamics. Final pricing will be confirmed at the time of order confirmation",
    ],
  },
  {
    icon: Shield,
    title: "3. Warranty",
    content: [
      "Eurosol Prime provides the following warranty coverage:",
      "• **Solar Panels:** 25-year linear performance warranty as per manufacturer (guaranteed minimum 80% output at 25 years)",
      "• **Inverter:** 5-10 year warranty depending on brand and model (extended warranty options available)",
      "• **Mounting Structure:** 10-year warranty against manufacturing defects and corrosion",
      "• **Installation Workmanship:** 10-year warranty by Eurosol Prime covering installation-related issues",
      "• **Wiring & Electrical Components:** 5-year warranty on all electrical connections and cabling",
      "",
      "**Warranty Exclusions:**",
      "• Damage caused by natural disasters (earthquakes, floods, cyclones, lightning strikes)",
      "• Unauthorized modifications, tampering, or repairs by third parties",
      "• Negligence, improper use, or failure to follow maintenance guidelines",
      "• Normal wear and tear, cosmetic damage, or discoloration that doesn't affect performance",
      "• Damage caused by animals, birds, or falling objects",
    ],
  },
  {
    icon: Truck,
    title: "4. Installation Process",
    content: [
      "Our standard installation process includes:",
      "• **Step 1 — Free Consultation:** Initial discussion to understand your requirements and provide preliminary recommendations",
      "• **Step 2 — Site Survey:** Our engineers visit your location for detailed roof assessment, shading analysis, and electrical audit (free of charge)",
      "• **Step 3 — System Design:** Custom solar system design with 3D modelling and detailed proposal with pricing",
      "• **Step 4 — Order Confirmation:** Upon acceptance, 30% advance payment to confirm the order",
      "• **Step 5 — Installation:** Professional installation by certified engineers (3-15 days depending on system size)",
      "• **Step 6 — Commissioning:** System testing, quality checks, and handover with documentation",
      "• **Step 7 — Net Metering:** Application submission to DISCOM and meter installation coordination",
      "• **Step 8 — Subsidy Application:** Filing for applicable government subsidies on your behalf",
      "• **Timeline:** Residential installations typically completed within 7-10 working days from order confirmation. Commercial projects may take 15-45 days.",
    ],
  },
  {
    icon: IndianRupee,
    title: "5. Payment Terms",
    content: [
      "• **Advance Payment:** 30% of the total project cost is required to confirm the order and initiate material procurement",
      "• **Progress Payment:** 50% upon delivery of materials at the installation site",
      "• **Final Payment:** Remaining 20% upon successful installation, commissioning, and system handover",
      "• **Payment Methods:** Bank transfer (NEFT/RTGS/IMPS), UPI, cheque, and demand draft",
      "• **EMI Options:** We partner with leading NBFCs to offer 0% EMI options for up to 12 months on select systems (subject to credit approval)",
      "• **Late Payment:** Payments delayed beyond 7 days from the due date may attract a late fee of 1.5% per month",
      "• All payments should be made in favor of 'Eurosol Prime' or as specified in the invoice",
    ],
  },
  {
    icon: XCircle,
    title: "6. Cancellation & Refund Policy",
    content: [
      "• **Before Material Procurement:** Orders cancelled before material procurement will receive a full refund within 15 business days",
      "• **After Material Procurement:** Cancellations after materials have been ordered will incur a 15% restocking fee plus any shipping costs incurred",
      "• **After Installation Begins:** No refunds will be issued once physical installation work has commenced at the site",
      "• **Partial Cancellation:** If only specific components need to be changed, we will adjust pricing accordingly",
      "• **Refund Method:** Refunds will be processed via the original payment method within 15-30 business days",
      "• **Force Majeure:** In case of cancellation due to force majeure events (natural disasters, government policy changes, pandemics), both parties will negotiate in good faith for a fair resolution",
    ],
  },
  {
    icon: Landmark,
    title: "7. Government Subsidy Assistance",
    content: [
      "• We provide complete assistance with government subsidy applications including PM Surya Ghar Muft Bijli Yojana and state-specific solar schemes",
      "• **Important:** Subsidy approval and disbursement is solely at the discretion of the government authority (MNRE/State Nodal Agency). Eurosol Prime cannot guarantee subsidy approval or the amount",
      "• We charge NO additional fees for subsidy application processing — it is included in our service",
      "• Subsidy amounts are subject to change based on government policy revisions and budget availability",
      "• The customer is responsible for providing accurate information and documentation required for subsidy applications",
      "• In case of subsidy rejection, the customer is liable for the full system cost without subsidy",
      "• Current applicable subsidies (as of April 2026):",
      "  — Up to 2 kW: ₹30,000/kW",
      "  — 2-3 kW: ₹18,000/kW (for capacity above 2 kW)",
      "  — 3-10 kW: ₹9,000/kW (for capacity above 3 kW)",
    ],
  },
  {
    icon: AlertTriangle,
    title: "8. Limitation of Liability",
    content: [
      "• Eurosol Prime's total liability under any circumstance shall not exceed the total value of the contract/order",
      "• We are NOT liable for: indirect damages, consequential losses, loss of income or business profits, delays caused by third parties (DISCOM, government agencies), or performance variations due to weather conditions",
      "• Solar energy generation estimates are indicative and based on average weather data. Actual generation may vary ±15% due to weather, atmospheric conditions, and other factors beyond our control",
      "• We are not responsible for grid outages, DISCOM policy changes, or delays in net metering approval",
      "• Force majeure events including but not limited to natural disasters, wars, strikes, epidemics, and government actions shall excuse performance obligations",
    ],
  },
  {
    icon: Scale,
    title: "9. Dispute Resolution & Governing Law",
    content: [
      "• These terms are governed by the laws of India",
      "• Any disputes arising from these terms or our services shall first be attempted to resolve through mutual negotiation",
      "• If negotiation fails, disputes shall be referred to arbitration under the Arbitration and Conciliation Act, 1996",
      "• The seat of arbitration shall be Indore, Madhya Pradesh",
      "• The courts of Indore, Madhya Pradesh shall have exclusive jurisdiction for any legal proceedings",
    ],
  },
  {
    icon: Phone,
    title: "10. Contact Information",
    content: [
      "For any queries, complaints, or clarifications regarding these terms:",
      "📧 **Email:** info@eurosolprime.com",
      "📞 **Phone:** +91 98344 60139",
      "📍 **Head Office:** Indore, Madhya Pradesh, India",
      "📍 **Branch Office:** Nagpur, Maharashtra, India",
      "🕐 **Business Hours:** Monday - Saturday, 9:00 AM - 7:00 PM IST",
      "",
      "**Authorized Signatory:** Amar Kapse, Founder & CEO, Eurosol Prime",
    ],
  },
];

const TermsConditions = () => (
  <div className="min-h-screen bg-background text-foreground">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8 text-sm">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>

      <div className="glass rounded-2xl p-6 sm:p-10 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <FileText className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">Terms & Conditions</h1>
            <p className="text-sm text-muted-foreground mt-1">Effective Date: April 2026</p>
          </div>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Welcome to Eurosol Prime. These Terms & Conditions govern your use of our website and the solar energy services we provide. By engaging our services or using this website, you agree to be bound by these terms. Please read them carefully before proceeding.
        </p>
      </div>

      <div className="space-y-4">
        {sections.map((section, i) => (
          <div key={i} className="glass rounded-2xl p-5 sm:p-7 hover:border-primary/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <section.icon className="w-4 h-4 text-primary" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-foreground">{section.title}</h2>
            </div>
            <div className="space-y-2 pl-12">
              {section.content.map((line, j) => (
                <p key={j} className="text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TermsConditions;

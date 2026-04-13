import { ArrowLeft, ArrowRight, CheckCircle2, Sun, Shield, Zap, Settings, PenTool, Landmark, Building2, BarChart3, Wrench, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const servicePages: Record<string, {
  icon: typeof Sun;
  title: string;
  subtitle: string;
  heroDesc: string;
  benefits: string[];
  details: { title: string; desc: string }[];
  process: { step: string; desc: string }[];
}> = {
  "solar-installation": {
    icon: Sun,
    title: "Solar Panel Installation",
    subtitle: "Complete Rooftop & Ground-Mounted Solutions",
    heroDesc: "Get premium solar panels installed on your rooftop or ground with expert engineering, quality components, and hassle-free project management. From residential homes to commercial complexes, we handle everything.",
    benefits: [
      "Free site survey & shadow analysis",
      "Premium Tier-1 European solar panels",
      "Professional installation by certified engineers",
      "Complete electrical wiring & safety setup",
      "Net metering application & coordination",
      "Government subsidy processing included",
      "10+ years workmanship warranty",
      "Post-installation monitoring setup",
    ],
    details: [
      { title: "Residential Systems (2-15 kW)", desc: "Ideal for homes, apartments, and villas. Our residential solar systems are designed to offset 80-100% of your electricity consumption. We use monocrystalline panels for maximum efficiency even in limited roof space." },
      { title: "Commercial Systems (10-500 kW)", desc: "Tailored for offices, showrooms, warehouses, factories, and institutions. Commercial systems offer excellent ROI with accelerated depreciation benefits and significant reduction in operational costs." },
      { title: "Ground-Mounted Systems", desc: "For properties with ample land but limited roof space, we design and install ground-mounted solar arrays. These systems can be optimized for tilt angle and orientation, often producing more energy per panel than rooftop installations." },
      { title: "Hybrid & Off-Grid Systems", desc: "For areas with unreliable grid supply, we offer hybrid systems with battery backup and completely off-grid solutions. These ensure uninterrupted power supply while maximizing solar utilization." },
    ],
    process: [
      { step: "Free Consultation", desc: "Discuss your energy needs, roof type, budget, and timeline" },
      { step: "Site Survey", desc: "Detailed roof assessment, shading analysis, and electrical audit" },
      { step: "Custom Design", desc: "3D system design with panel layout, wiring diagram, and BOQ" },
      { step: "Procurement", desc: "Source premium Tier-1 components from certified manufacturers" },
      { step: "Installation", desc: "Professional mounting, wiring, and inverter setup (3-15 days)" },
      { step: "Commissioning", desc: "System testing, performance validation, and handover" },
    ],
  },
  "maintenance-repair": {
    icon: Settings,
    title: "Maintenance & Repair",
    subtitle: "Keep Your Solar System at Peak Performance",
    heroDesc: "Regular maintenance ensures your solar investment delivers maximum returns for 25+ years. Our expert technicians provide comprehensive servicing, monitoring, and emergency repair services across Madhya Pradesh & Maharashtra.",
    benefits: [
      "Annual Maintenance Contracts (AMC)",
      "Professional panel cleaning service",
      "Inverter health checks & servicing",
      "Performance monitoring & reporting",
      "Emergency breakdown support",
      "Wiring & connection inspection",
      "Thermal imaging for defect detection",
      "Generation loss analysis & optimization",
    ],
    details: [
      { title: "Annual Maintenance Contract (AMC)", desc: "Our AMC plans include quarterly panel cleaning, bi-annual inverter servicing, annual comprehensive inspection, and priority emergency support. Plans start from ₹2,500/year for residential systems." },
      { title: "Panel Cleaning Service", desc: "Dust, bird droppings, and pollution can reduce panel output by 15-25%. Our professional cleaning service uses deionized water and soft brushes to safely clean panels without damage." },
      { title: "Inverter Servicing", desc: "Inverters are the heart of your solar system. We check firmware updates, cooling fan operation, DC/AC conversion efficiency, MPPT tracking, and communication modules." },
      { title: "Emergency Repairs", desc: "Experiencing reduced output or system faults? Our emergency response team in Indore and Nagpur can diagnose and fix issues within 24-48 hours, minimizing your energy loss." },
    ],
    process: [
      { step: "Schedule Visit", desc: "Call or WhatsApp us to book a maintenance visit" },
      { step: "System Inspection", desc: "Thorough check of panels, inverter, wiring, and mounting" },
      { step: "Cleaning & Service", desc: "Professional cleaning and component servicing" },
      { step: "Performance Report", desc: "Detailed report with findings and recommendations" },
      { step: "Optimization", desc: "Adjustments to maximize system output" },
      { step: "Follow-up", desc: "Scheduled next maintenance and ongoing monitoring" },
    ],
  },
  "custom-design": {
    icon: PenTool,
    title: "Custom System Design",
    subtitle: "Engineered for Maximum Performance",
    heroDesc: "Every property is unique. Our expert engineers create bespoke solar solutions using advanced 3D modeling, shadow analysis, and energy simulation to maximize your solar output and financial returns.",
    benefits: [
      "3D roof modeling & shadow analysis",
      "Energy consumption pattern study",
      "Optimal panel layout design",
      "Component selection consulting",
      "ROI & payback calculation",
      "Structural load assessment",
      "Electrical single-line diagram",
      "Future expansion planning",
    ],
    details: [
      { title: "Energy Audit", desc: "We analyze your past 12 months of electricity consumption, peak demand patterns, and future energy needs to determine the optimal system size and configuration." },
      { title: "3D Roof Analysis", desc: "Using satellite imagery and on-site measurements, we create a 3D model of your roof to simulate shadow patterns throughout the year. This ensures every panel receives maximum sunlight." },
      { title: "Component Engineering", desc: "Based on your budget, energy goals, and site conditions, we recommend the optimal combination of panels, inverters, and mounting structures from our curated list of Tier-1 manufacturers." },
      { title: "Financial Modeling", desc: "Detailed ROI analysis including system cost, subsidy benefits, energy savings, net metering credits, and payback period. We also factor in panel degradation and electricity tariff increases." },
    ],
    process: [
      { step: "Requirement Analysis", desc: "Understanding your energy goals, budget, and constraints" },
      { step: "Site Assessment", desc: "Detailed physical and remote survey of your property" },
      { step: "Design & Simulation", desc: "3D modeling with energy yield simulation" },
      { step: "Proposal Presentation", desc: "Detailed design document with financial projections" },
      { step: "Design Finalization", desc: "Incorporating your feedback and finalizing specifications" },
      { step: "Handoff to Installation", desc: "Complete design package for seamless installation" },
    ],
  },
  "net-metering": {
    icon: BarChart3,
    title: "Net Metering Setup",
    subtitle: "Earn Credits for Your Excess Solar Power",
    heroDesc: "Net metering allows you to export surplus solar electricity to the grid and receive credits on your electricity bill. We handle the entire process — from DISCOM application to meter installation.",
    benefits: [
      "Complete DISCOM application handling",
      "Technical feasibility coordination",
      "Bi-directional meter installation",
      "Documentation & compliance support",
      "Regular billing reconciliation help",
      "Policy advisory & updates",
      "Zero electricity bill achievement",
      "Available in MP & Maharashtra",
    ],
    details: [
      { title: "How Net Metering Works", desc: "A bi-directional (import-export) meter replaces your regular meter. When your solar system generates more power than you consume, the excess flows to the grid and the meter runs backward. You only pay for the net electricity consumed." },
      { title: "MP Net Metering Policy", desc: "Madhya Pradesh allows net metering for systems up to the sanctioned load. The settlement period is annual, and excess generation is credited at the average power purchase cost. Both residential and commercial consumers are eligible." },
      { title: "Maharashtra Net Metering Policy", desc: "Maharashtra supports net metering for systems up to 1 MW. The billing cycle is monthly, and excess generation is carried forward for 12 months. The policy is favorable for both residential and commercial installations." },
      { title: "Application Process", desc: "We submit the net metering application to your local DISCOM, coordinate the technical feasibility study, schedule the meter change, and ensure all documentation is in order for seamless activation." },
    ],
    process: [
      { step: "Eligibility Check", desc: "Verify your sanctioned load and DISCOM requirements" },
      { step: "Application Filing", desc: "Submit net metering application with required documents" },
      { step: "Feasibility Study", desc: "DISCOM conducts technical feasibility at your premises" },
      { step: "Approval", desc: "Receive net metering approval from DISCOM" },
      { step: "Meter Installation", desc: "Bi-directional meter installation and system connection" },
      { step: "Activation", desc: "Net metering goes live — start earning credits!" },
    ],
  },
  "subsidy-assistance": {
    icon: Landmark,
    title: "Government Subsidy Assistance",
    subtitle: "Maximize Your Savings with PM Surya Ghar & State Schemes",
    heroDesc: "The Indian government offers substantial subsidies to make solar affordable. We handle the entire subsidy application process at no additional cost, ensuring you get the maximum benefit.",
    benefits: [
      "100% subsidy paperwork handled by us",
      "PM Surya Ghar Muft Bijli Yojana",
      "State-specific solar incentives",
      "No extra charges for subsidy processing",
      "Regular status updates on application",
      "Documentation support & verification",
      "Direct benefit transfer guidance",
      "Appeals handling if needed",
    ],
    details: [
      { title: "PM Surya Ghar Muft Bijli Yojana", desc: "The central government's flagship scheme provides subsidies of ₹30,000/kW for the first 2kW, ₹18,000/kW for 2-3kW capacity, and ₹9,000/kW for 3-10kW. Maximum subsidy can go up to ₹78,000 for a 3kW system. Available for residential consumers only." },
      { title: "Madhya Pradesh Solar Policy", desc: "MP offers additional state-level incentives including exemption from electricity duty, accelerated depreciation benefits for commercial installations, and special schemes for agricultural solar pumps." },
      { title: "Maharashtra Solar Incentives", desc: "Maharashtra provides net metering benefits, wheeling and banking facilities for commercial consumers, and special industrial solar tariffs. The state has ambitious targets under its renewable energy policy." },
      { title: "Documentation Required", desc: "We help you prepare all required documents: electricity bill copies, Aadhaar card, bank passbook, property ownership proof, roof photos, and the application form. Our team ensures everything is accurate to avoid rejection." },
    ],
    process: [
      { step: "Eligibility Assessment", desc: "Verify your eligibility under various subsidy schemes" },
      { step: "Document Collection", desc: "Gather required documents with our checklist guidance" },
      { step: "Application Filing", desc: "Submit applications on the national portal and state portal" },
      { step: "Verification Support", desc: "Coordinate with inspection teams for site verification" },
      { step: "Approval Tracking", desc: "Monitor application status and handle any queries" },
      { step: "Disbursement", desc: "Subsidy amount credited directly to your bank account" },
    ],
  },
  "commercial-solar": {
    icon: Building2,
    title: "Commercial & Industrial Solar",
    subtitle: "Reduce Operating Costs & Go Green",
    heroDesc: "Large-scale solar solutions for businesses, industries, hospitals, schools, and government buildings. Benefit from accelerated depreciation, reduced electricity costs, and enhanced corporate sustainability.",
    benefits: [
      "Systems from 10kW to 500kW+",
      "40% accelerated depreciation benefit",
      "Significant opex cost reduction",
      "Green building certification support",
      "CAPEX & OPEX models available",
      "Power Purchase Agreements (PPA)",
      "Remote monitoring & analytics",
      "CSR & ESG compliance support",
    ],
    details: [
      { title: "CAPEX Model", desc: "Own your solar system outright. Higher upfront investment but maximum long-term savings with payback in 3-5 years. Eligible for 40% accelerated depreciation benefit, effectively reducing the net cost significantly." },
      { title: "OPEX / PPA Model", desc: "Zero upfront investment. A solar developer installs and maintains the system, and you purchase the power at a pre-agreed rate (typically 30-40% lower than grid tariff). The developer handles everything — you just enjoy lower bills." },
      { title: "Industrial Applications", desc: "We design high-capacity systems for factories, manufacturing plants, and warehouses. These systems can offset massive electricity bills and provide energy security. We've delivered solutions across Indore's and Nagpur's industrial areas." },
      { title: "Institutional Solar", desc: "Schools, hospitals, and government buildings benefit from solar with near-zero electricity bills and positive environmental impact. We offer special pricing for educational and healthcare institutions." },
    ],
    process: [
      { step: "Energy Assessment", desc: "Analyze your energy consumption patterns and demand profile" },
      { step: "Feasibility Study", desc: "Technical and financial feasibility with site assessment" },
      { step: "Proposal & Financing", desc: "Detailed project proposal with CAPEX/OPEX options" },
      { step: "Engineering & Procurement", desc: "Detailed engineering and component sourcing" },
      { step: "Installation & Commissioning", desc: "Professional installation with minimal disruption" },
      { step: "Monitoring & Maintenance", desc: "Ongoing performance tracking and AMC support" },
    ],
  },
};

const ServiceDetailPage = ({ slug }: { slug: string }) => {
  const service = servicePages[slug];
  if (!service) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
          <Link to="/" className="text-primary hover:underline">← Back to Home</Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8 text-sm">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        {/* Hero */}
        <div className="glass rounded-2xl p-6 sm:p-10 mb-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Icon className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">{service.title}</h1>
              <p className="text-primary font-semibold text-sm mt-1">{service.subtitle}</p>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed">{service.heroDesc}</p>
        </div>

        {/* Benefits */}
        <div className="glass rounded-2xl p-6 sm:p-8 mb-8">
          <h2 className="text-xl font-bold text-foreground mb-6">Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.benefits.map((b, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-foreground">{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-4 mb-8">
          {service.details.map((d, i) => (
            <div key={i} className="glass rounded-2xl p-5 sm:p-7 hover:border-primary/20 transition-all duration-300">
              <h3 className="text-lg font-bold text-foreground mb-2">{d.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="glass rounded-2xl p-6 sm:p-8 mb-8">
          <h2 className="text-xl font-bold text-foreground mb-6">Our Process</h2>
          <div className="space-y-4">
            {service.process.map((p, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary font-bold text-sm">
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">{p.step}</h4>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="glass rounded-2xl p-6 sm:p-8 text-center border-primary/20">
          <h3 className="text-xl font-bold text-foreground mb-2">Ready to Get Started?</h3>
          <p className="text-muted-foreground text-sm mb-6">Contact us for a free consultation and site survey. No obligations, no hidden charges.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button className="animate-pulse-glow font-bold group" onClick={() => window.location.href = "/#contact"}>
              Get Free Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="border-primary/30 hover:bg-primary/10" asChild>
              <a href="https://wa.me/919834460139" target="_blank" rel="noopener noreferrer">
                <Phone className="w-4 h-4 mr-2" /> WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;

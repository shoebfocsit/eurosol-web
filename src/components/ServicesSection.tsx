import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sun,
  Sprout,
  Share2,
  Unlock,
  FileText,
  Leaf,
  Factory,
  Building2,
  GraduationCap,
  Hammer,
  Wrench,
  Activity,
  Gauge,
  RefreshCw,
  Home,
  Users,
  DraftingCompass,
  Power,
  FileCheck,
  TrendingUp,
  Search,
  ArrowRight,
  Send,
} from "lucide-react";
import ScrollAnimator from "./ScrollAnimator";
import solarInstallation from "@/assets/solar-installation.jpg";
import solarMaintenance from "@/assets/solar-maintenance.jpg";
import solarPanels from "@/assets/solar-panels-closeup.jpg";

const categories = [
  "All",
  "Solar Solutions",
  "Business Models",
  "Engineering & EPC",
  "Lifecycle & Operations",
];

const services = [
  // 1. Solar Solutions
  {
    icon: Home,
    title: "Rooftop Solar Systems",
    category: "Solar Solutions",
    desc: "Turn your idle roof space into a reliable green power source. Ideal for villas, apartments, residential societies, and small offices.",
    features: ["Rooftop Optimization", "PM Surya Ghar Subsidies", "Zero Leak Mounting"],
    image: solarInstallation,
    slug: "rooftop-solar",
  },
  {
    icon: Sun,
    title: "Ground Mounted Solar Plants",
    category: "Solar Solutions",
    desc: "High-capacity on-grid solar plants built on ground-mounted frames, optimized for utility-scale solar generation and large vacant plots.",
    features: ["Soil & Topography Testing", "Concrete Base Foundations", "Optimized Tilt & Pitch"],
    image: solarPanels,
    slug: "ground-mounted-solar",
  },
  {
    icon: Sprout,
    title: "Agrivoltaics (Solar Farming)",
    category: "Solar Solutions",
    desc: "Co-locate solar panels with crops to maximize land utility. Generate secondary farming income and reduce soil water evaporation.",
    features: ["Dual Land Revenues", "Reduced Water Evaporation", "Raised Farm Equipment Clearance"],
    image: solarInstallation,
    slug: "agrivoltaics",
  },
  {
    icon: Factory,
    title: "Industrial Solar Solutions",
    category: "Solar Solutions",
    desc: "Heavy-duty solar installations engineered to meet continuous factory loads, slash operational cost, and earn 40% accelerated depreciation.",
    features: ["DG-PV Synchronization", "High Load Engineering", "Soot-Resistant Design"],
    image: solarPanels,
    slug: "industrial-solar",
  },
  {
    icon: Building2,
    title: "Commercial Solar Solutions",
    category: "Solar Solutions",
    desc: "Transform high-tariff commercial roof spaces on retail outlets, malls, and hotels into high-yield, cost-cutting solar assets.",
    features: ["Quick 3-4 Year Payback", "Aesthetic Solar Carports", "Shared Tenant Sub-metering"],
    image: solarInstallation,
    slug: "commercial-solar",
  },
  {
    icon: GraduationCap,
    title: "Institutional Solar Solutions",
    category: "Solar Solutions",
    desc: "Reliable solar setups for universities, schools, and hospitals, offering critical energy security, lower carbon footprints, and budget savings.",
    features: ["ICU & Lab UPS Integration", "Educational Display Lobbies", "Soft Loan Financing Sync"],
    image: solarPanels,
    slug: "institutional-solar",
  },

  // 2. Business Models
  {
    icon: FileText,
    title: "Solar Power Purchase Agreement (PPA)",
    category: "Business Models",
    desc: "Zero-upfront-investment solar (OPEX). We build and maintain the system on your roof, and you only buy generated power at low tariffs.",
    features: ["Zero Upfront CapEx", "Lower Guaranteed Tariff", "Full Maintenance Included"],
    image: solarPanels,
    slug: "solar-ppa",
  },
  {
    icon: Unlock,
    title: "Open Access Solar",
    category: "Business Models",
    desc: "Buy cheap, green energy directly from our off-site solar farms via state grid wheeling, bypassing high local utility commercial tariffs.",
    features: ["No On-Site Space Required", "Save 30% to 50% on Tariff", "100kW+ Contract Demand Sync"],
    image: solarInstallation,
    slug: "open-access-solar",
  },
  {
    icon: Users,
    title: "Group Captive Solar Solutions",
    category: "Business Models",
    desc: "Consortium of large consumers collectively owning at least 26% of an off-site solar farm, getting exempt from cross-subsidy surcharges.",
    features: ["Consortium Equity Structure", "Cross-Subsidy Exemption", "HT Transmission Integration"],
    image: solarPanels,
    slug: "group-captive-solar",
  },
  {
    icon: Leaf,
    title: "Green Power Supply",
    category: "Business Models",
    desc: "Direct supply of 100% clean energy and verified carbon offsets / RECs to enhance ESG compliance and fulfill green procurement goals.",
    features: ["RECs & I-RECs Sourcing", "Carbon Footprint Reductions", "ESG Performance Optimization"],
    image: solarInstallation,
    slug: "green-power-supply",
  },

  // 3. Engineering & EPC
  {
    icon: DraftingCompass,
    title: "Solar Project Design & Engineering",
    category: "Engineering & EPC",
    desc: "Expert structural designs and PVsyst simulation blueprints to estimate solar yield and ensure strong wind load protection.",
    features: ["STAAD Pro Structural Modeling", "Detailed Single Line Diagrams", "PVsyst Output Reports"],
    image: solarPanels,
    slug: "project-design-engineering",
  },
  {
    icon: Power,
    title: "Solar Installation & Commissioning",
    category: "Engineering & EPC",
    desc: "Trained mechanical execution, chemical earthing setup, protected cabling, and grid-tie inverter synchronization.",
    features: ["Certified Safety Crews", "NEC Code Standard Wiring", "Phase & Frequency Sync Checks"],
    image: solarInstallation,
    slug: "installation-commissioning",
  },
  {
    icon: Hammer,
    title: "Solar EPC Services",
    category: "Engineering & EPC",
    desc: "Turn-key Engineering, Procurement, and Commissioning services. We manage the entire project from design up to power generation.",
    features: ["Single Point Responsibility", "Bulk Sourcing Advantages", "Hassle-Free Project Handover"],
    image: solarInstallation,
    slug: "solar-epc",
  },
  {
    icon: FileCheck,
    title: "Solar Regulatory & Approval Support",
    category: "Engineering & EPC",
    desc: "We manage DISCOM net metering registrations, CEIG electrical clearances, fire safety approvals, and PM Surya Ghar subsidies.",
    features: ["Liaison with DISCOM Offices", "CEIG Clearance Certifications", "Subsidy Paperwork Handling"],
    image: solarPanels,
    slug: "regulatory-approval-support",
  },

  // 4. Lifecycle & Operations
  {
    icon: Wrench,
    title: "Operation & Maintenance (O&M)",
    category: "Lifecycle & Operations",
    desc: "Maintain peak generation. Annual maintenance contracts (AMC), soft water panel cleaning, and regular inverter wellness checkups.",
    features: ["Low TDS Panel Cleaning", "Inverter Firmware Inspections", "Electrical Connection Torquing"],
    image: solarMaintenance,
    slug: "operation-maintenance",
  },
  {
    icon: Activity,
    title: "Remote Monitoring / SCADA Monitoring",
    category: "Lifecycle & Operations",
    desc: "IoT loggers push generation stats to cloud dashboards, giving real-time visibility and generating instant fault alerts.",
    features: ["Real-Time Output Metrics", "IoT Cloud Loggers Integration", "Irradiance Performance Check"],
    image: solarMaintenance,
    slug: "scada-monitoring",
  },
  {
    icon: TrendingUp,
    title: "Solar Asset Management",
    category: "Lifecycle & Operations",
    desc: "Maximize long-term financial yield. Reconcile utility bills, manage warranty replacements, and handle insurance claims.",
    features: ["Levelized Cost Auditing", "Manufacturer Warranty Claims", "Asset Damage Insurance Setup"],
    image: solarMaintenance,
    slug: "solar-asset-management",
  },
  {
    icon: RefreshCw,
    title: "Net Metering Services",
    category: "Lifecycle & Operations",
    desc: "Grid-tie coordination and bi-directional meter installations to export surplus daytime power and claim utility credits.",
    features: ["Bi-directional Meter Setup", "Electricity Bill Reconciliation", "Compliance and Drawing Audits"],
    image: solarPanels,
    slug: "net-metering",
  },
  {
    icon: Share2,
    title: "Virtual Net Metering (VNM)",
    category: "Lifecycle & Operations",
    desc: "Centralized solar billing setups allowing multiple metered accounts to split generated credits, ideal for apartments.",
    features: ["Shared Credit Accounting", "DISCOM Billing Synchrony", "Centralized Common Solar Grid"],
    image: solarInstallation,
    slug: "virtual-net-metering",
  },
  {
    icon: Gauge,
    title: "Energy Efficiency Solutions",
    category: "Lifecycle & Operations",
    desc: "Combine solar with load audits. Retrofit APFC panels and LEDs to lower overall power demand and maximize solar ROI.",
    features: ["Power Analyzer Demand Audits", "APFC Panel Installations", "LED Energy-saving Retrofits"],
    image: solarPanels,
    slug: "energy-efficiency",
  },
];

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = services.filter((s) => {
    const matchesCategory = activeCategory === "All" || s.category === activeCategory;
    const matchesSearch =
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <ScrollAnimator className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Our Services</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 leading-tight">
            Comprehensive <span className="gradient-text">Solar Solutions</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            From industrial engineering and power purchase agreements to net metering and SCADA monitoring, we cover the entire solar project lifecycle.
          </p>
        </ScrollAnimator>

        {/* Filter and Search Bar */}
        <ScrollAnimator className="mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full border transition-all duration-300 ${
                    activeCategory === c
                      ? "bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : "bg-secondary/40 border-border text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-3 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-secondary/30 border border-border rounded-full pl-10 pr-4 py-2 text-sm focus:border-primary focus:outline-none text-foreground"
              />
            </div>
          </div>
        </ScrollAnimator>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((s, i) => {
            const Icon = s.icon;
            return (
              <ScrollAnimator key={s.slug + i} delay={(i % 3) * 100}>
                <div className="glass rounded-2xl group hover:border-primary/30 transition-all duration-500 h-full flex flex-col relative overflow-hidden">
                  
                  {/* Image Section */}
                  <div className="h-44 overflow-hidden relative">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                      width={600}
                      height={400}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                    </div>
                  </div>

                  {/* Text Details Section */}
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-[10px] text-primary tracking-wider uppercase font-bold mb-1.5 block">
                      {s.category}
                    </span>
                    <h3 className="text-lg font-bold mb-2.5 text-foreground leading-tight">
                      {s.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">
                      {s.desc}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 mb-5 border-t border-border/50 pt-3">
                      {s.features.map((f, j) => (
                        <div key={j} className="flex items-center gap-2 text-xs">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          <span className="text-muted-foreground">{f}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Links */}
                    <div className="flex items-center justify-between border-t border-border/50 pt-4 mt-auto">
                      <Link
                        to={`/services/${s.slug}`}
                        className="inline-flex items-center gap-1.5 text-primary font-semibold text-xs group/btn"
                      >
                        Read Details
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>

                      <button
                        onClick={() => {
                          window.location.href = `/?service=${s.slug}#contact`;
                        }}
                        className="inline-flex items-center gap-1 text-[11px] text-muted-foreground hover:text-primary font-semibold transition-colors"
                      >
                        <Send className="w-3 h-3" />
                        Inquire Now
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollAnimator>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <ScrollAnimator className="text-center py-16">
            <p className="text-muted-foreground text-sm">No services found matching your search criteria.</p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className="text-primary font-bold text-xs hover:underline mt-2"
            >
              Reset Filters
            </button>
          </ScrollAnimator>
        )}

      </div>
    </section>
  );
};

export default ServicesSection;

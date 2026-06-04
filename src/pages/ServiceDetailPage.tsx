import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Phone,
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
  Sun,
  Home,
  Users,
  DraftingCompass,
  Power,
  FileCheck,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const servicePages: Record<
  string,
  {
    icon: typeof Sun;
    title: string;
    subtitle: string;
    heroDesc: string;
    benefits: string[];
    details: { title: string; desc: string }[];
    process: { step: string; desc: string }[];
  }
> = {
  agrivoltaics: {
    icon: Sprout,
    title: "Agrivoltaics (Solar Farming)",
    subtitle: "Dual-Use Agriculture & Solar Power Integration",
    heroDesc: "Maximize land utility and crop yield simultaneously by co-locating solar panels with agriculture. Our Agrivoltaic systems provide shade, reduce water evaporation, and generate a secondary revenue stream for farmers without compromising agricultural output.",
    benefits: [
      "Dual income from crops and solar power generation",
      "Shade reduces soil water evaporation by up to 30%",
      "Protection of sensitive crops from extreme heat and hail",
      "Improved panel efficiency due to crop transpiration cooling",
      "Eco-friendly land preservation and soil conservation",
      "Optimized high-clearance mounting structures for farm equipment",
    ],
    details: [
      {
        title: "Co-location Efficiency",
        desc: "Maximize land productivity by generating clean electricity above while growing high-value crops below. Ideal for shade-tolerant crops, leafy greens, root vegetables, and berries.",
      },
      {
        title: "Water-Energy Nexus",
        desc: "Solar panels reduce direct sunlight on crops, which dramatically lowers irrigation needs, keeping soil moist and saving precious water resources in dry regions.",
      },
      {
        title: "Custom Elevating Structures",
        desc: "Our engineering team designs custom structural mounts with high ground clearance (typically 2.5m - 4.5m) and wider spacing to allow tractors and farming machinery to pass underneath freely.",
      },
    ],
    process: [
      { step: "Soil & Crop Feasibility", desc: "Analyze soil quality, water resources, and determine the best crops for shaded farming." },
      { step: "Structural Engineering", desc: "Design high-clearance, wind-resistant structural mounts that support farming equipment movement." },
      { step: "Irrigation & Wiring Integration", desc: "Integrate smart drip-irrigation systems with structural wiring layouts." },
      { step: "System Assembly", desc: "Carefully construct the raised frames and install high-efficiency solar modules." },
      { step: "Crop Planting", desc: "Prepare the soil and seed the selected crop varieties under the new micro-climate." },
      { step: "Smart Monitoring", desc: "Track both agricultural yield and solar output to optimize dual performance." },
    ],
  },
  "virtual-net-metering": {
    icon: Share2,
    title: "Virtual Net Metering (VNM)",
    subtitle: "Shared Solar Benefits Across Multiple Meters",
    heroDesc: "Virtual Net Metering allows multiple energy consumers or tenants to share the benefits of a single, centralized solar system. Perfect for housing societies, multi-tenant commercial complexes, and real estate developers looking to offer green incentives.",
    benefits: [
      "No individual roof space required for tenants",
      "Fair and proportional distribution of solar credits",
      "Lower capital cost per consumer via centralized system",
      "Saves on multiple independent installation fees",
      "Easy billing and credit tracking through DISCOM",
      "Higher asset value for multi-family/commercial buildings",
    ],
    details: [
      {
        title: "How VNM Works",
        desc: "A single solar array is installed on the common roof or land. The solar power generated is sent directly to the grid, and utility credits are proportionally divided among participating accounts.",
      },
      {
        title: "Housing Societies",
        desc: "Ideal for residential welfare associations (RWAs). Offset the common area bills first, then credit individual apartments based on their share of investment or roof rights.",
      },
      {
        title: "Regulatory Compliance",
        desc: "We handle all DISCOM approvals, paperwork, and joint metering arrangements required under state VNM policies in Madhya Pradesh and Maharashtra.",
      },
    ],
    process: [
      { step: "Feasibility & Agreement", desc: "Assess common areas, group consumer list, and draft tenant agreements." },
      { step: "DISCOM Registration", desc: "File joint VNM application with local utility and complete feasibility checks." },
      { step: "System Engineering", desc: "Design and size the centralized system to meet collective consumption targets." },
      { step: "Installation", desc: "Mount the central array and connect it to a dedicated generation meter." },
      { step: "Bi-Directional Mapping", desc: "Configure individual account links with the DISCOM billing database." },
      { step: "Commissioning & Credit Tracking", desc: "Test the system, activate shared billing credits, and launch dashboard." },
    ],
  },
  "open-access-solar": {
    icon: Unlock,
    title: "Open Access Solar",
    subtitle: "Direct Power Procurement from Third-Party Solar Plants",
    heroDesc: "Open Access Solar allows large commercial and industrial consumers to buy cheap, green electricity directly from off-site solar farms, bypassing local utility grid tariffs and achieving massive savings with zero capital expenditure.",
    benefits: [
      "Up to 30-50% savings compared to standard commercial grid tariffs",
      "No on-site roof or land space required",
      "Procure up to 100% renewable energy for your operations",
      "Long-term price stability with fixed-tariff power purchase",
      "Complete regulatory compliance and wheeling charge management",
      "Rapid path to net-zero and carbon reduction goals",
    ],
    details: [
      {
        title: "Third-Party PPA",
        desc: "Buy power from an off-site developer's solar farm through the grid under a long-term agreement without any hardware costs."
      },
      {
        title: "Wheeling & Banking",
        desc: "Solar power is fed into the state transmission network and delivered (wheeled) to your facility, with excess power banked for later use."
      },
      {
        title: "Eligibility",
        desc: "Available to consumers with a contract demand of 100 kW or 1 MW and above, depending on state regulations."
      }
    ],
    process: [
      { step: "Consumption Analysis", desc: "Audit your energy demand profile and check Open Access feasibility." },
      { step: "Developer Matching", desc: "Select the best solar farm developer and negotiate power purchase rates." },
      { step: "Grid Connection Approval", desc: "Apply for Open Access permissions with state transmission utilities (STU) and DISCOMs." },
      { step: "PPA Execution", desc: "Sign the power purchase agreement specifying wheeling charges and tariffs." },
      { step: "System Synchronisation", desc: "Set up special UI/ABT meters for tracking real-time energy flow." },
      { step: "Commercial Operations", desc: "Begin receiving green power and offset your utility bill through grid settlements." }
    ]
  },
  "solar-ppa": {
    icon: FileText,
    title: "Solar Power Purchase Agreement (PPA)",
    subtitle: "Zero-Investment Solar for Businesses (OPEX Model)",
    heroDesc: "Under a Solar PPA (OPEX Model), we design, install, own, and maintain the solar system on your roof or land. You pay nothing upfront and only purchase the generated electricity at a guaranteed rate lower than the grid utility tariff.",
    benefits: [
      "Zero upfront capital expenditure (CapEx)",
      "Immediate savings on monthly electricity bills from day one",
      "Zero maintenance costs or operational risks for the customer",
      "Hassle-free operation with performance guarantees",
      "Flexible contract terms (typically 15-25 years)",
      "Option to buy back the solar assets at depreciated cost",
    ],
    details: [
      {
        title: "OPEX Model",
        desc: "The solar system is owned by the developer (us or our partners). We handle all equipment procurement, installation, and operation."
      },
      {
        title: "Lower Tariff Rates",
        desc: "The PPA tariff is locked in, protected from rising utility grid rates, securing long-term cost predictability."
      },
      {
        title: "Fully Maintained",
        desc: "Since we own the system, we are incentivized to keep it running at maximum efficiency, providing free O&M throughout the PPA."
      }
    ],
    process: [
      { step: "Energy Audit & Site Study", desc: "Confirm your site is suitable for a long-term solar project." },
      { step: "Financial Assessment", desc: "Evaluate your credit profile and propose customized PPA tariff options." },
      { step: "PPA Drafting", desc: "Execute the PPA contract, detailing tariffs, performance criteria, and contract length." },
      { step: "System Installation", desc: "Manage entire project engineering, purchasing, and construction." },
      { step: "Grid Connection", desc: "Handle utility permissions and synchronize the solar system." },
      { step: "Uptime & Generation Billing", desc: "Invoice monthly based strictly on actual kilowatt-hours produced." }
    ]
  },
  "green-power-supply": {
    icon: Leaf,
    title: "Green Power Supply",
    subtitle: "100% Clean Energy directly to your Operations",
    heroDesc: "Switch your facility completely to clean energy. Our Green Power Supply service facilitates direct sourcing of renewable electricity through green tariffs, energy attribute certificates (EACs), and clean power transactions.",
    benefits: [
      "Achieve 100% green energy status for your enterprise",
      "Procure Renewable Energy Certificates (RECs) and I-RECs",
      "Hedge against volatile coal and gas-based power pricing",
      "Improve ESG ratings and score higher with sustainable investors",
      "Attract eco-conscious international clients and consumers",
      "Zero on-site operational changes needed",
    ],
    details: [
      {
        title: "Green Tariffs",
        desc: "Many utilities offer green tariff programs that we assist you in registering for, securing clean power allocations."
      },
      {
        title: "I-RECs & Carbon Offsets",
        desc: "For businesses that cannot build solar or buy open access, we source verified international renewable energy certificates to offset carbon footprints."
      },
      {
        title: "Sustainability Branding",
        desc: "Demonstrate clear environmental leadership with audited clean energy consumption reports."
      }
    ],
    process: [
      { step: "Carbon Audit", desc: "Calculate your current scope 1 and scope 2 emissions." },
      { step: "Option Evaluation", desc: "Analyze green tariff programs vs EACs/RECs procurement." },
      { step: "Contract Management", desc: "Secure long-term supply of green certificates or green tariff quotas." },
      { step: "Compliance Audit", desc: "Verify that all certificates are tracked and retired under international ESG protocols." },
      { step: "ESG Reporting", desc: "Prepare audited ESG statements for corporate disclosure and annual reports." },
      { step: "Annual Review", desc: "Re-evaluate energy requirements and scale green power allocations." }
    ]
  },
  "industrial-solar": {
    icon: Factory,
    title: "Industrial Solar Solutions",
    subtitle: "Heavy-Duty Solar Power for Factories & Mills",
    heroDesc: "Specially engineered solar power systems to meet the heavy and continuous electrical loads of manufacturing plants, textile mills, cold storages, steel works, and chemical factories. Maximize operational savings and tax benefits.",
    benefits: [
      "Drastically slash industrial operating costs (OPEX)",
      "Claim 40% Accelerated Depreciation tax benefits",
      "Minimize peak demand charges from the grid",
      "Robust, heavy-duty structures to withstand harsh industrial environments",
      "Custom integration with existing diesel generators (DG-PV synchronization)",
      "Enhanced brand profile as a green manufacturer",
    ],
    details: [
      {
        title: "High Capacity Setup",
        desc: "Designed for systems exceeding 100kW up to multiple megawatts. Built to operate 24/7."
      },
      {
        title: "DG Synchronization",
        desc: "Our smart controllers modulate solar output dynamically based on generator loads, preventing fuel backfeeding when running on backup power."
      },
      {
        title: "Industrial Durability",
        desc: "Use hot-dip galvanized mounting structures and corrosion-resistant panels for industrial roofs exposed to soot or chemical vapors."
      }
    ],
    process: [
      { step: "Load Analysis", desc: "Study active/reactive power loads, peak surges, and grid fluctuations." },
      { step: "Site & Structural Audit", desc: "Evaluate roof structure integrity and load-bearing capacity for solar frames." },
      { step: "Custom System Design", desc: "Design DG-PV sync systems, electrical protections, and layout." },
      { step: "Procurement & Quality", desc: "Source Tier-1 industrial-grade inverters and modules." },
      { step: "Installation", desc: "Install with strict safety standards, minimizing factory downtime." },
      { step: "Testing & Synchronization", desc: "Commission the system, set up automation, and complete safety trials." }
    ]
  },
  "commercial-solar": {
    icon: Building2,
    title: "Commercial Solar Solutions",
    subtitle: "Cost-Saving Solar for Retail, Offices & Malls",
    heroDesc: "Maximize the return on your commercial spaces. Our Commercial Solar Solutions help retail outlets, office buildings, hotels, hospitals, and shopping malls transform high-tariff commercial roof space into a high-yield solar asset.",
    benefits: [
      "Offset expensive commercial electricity tariffs (often the highest tier)",
      "Fast financial payback (typically 3 to 4 years)",
      "Tax write-offs via accelerated depreciation and interest subsidies",
      "Shield operations from future electricity rate hikes",
      "Power common services (lifts, lighting, central HVAC) with solar",
      "Improve commercial building energy efficiency ratings (LEED/BEE)",
    ],
    details: [
      {
        title: "High Return ROI",
        desc: "Commercial power tariffs are highly expensive. Solar provides cheap power at a fraction of the cost, making ROI extremely lucrative."
      },
      {
        title: "Aesthetic Integration",
        desc: "Aesthetic rooftop mounting, flush layouts, or solar carports that double as shaded parking spaces for customers."
      },
      {
        title: "Smart Billing Integration",
        desc: "Connect solar output directly to tenant sub-meters for fair billing distribution."
      }
    ],
    process: [
      { step: "Consumption Study", desc: "Review seasonal demand, HVAC loads, and billing cycles." },
      { step: "Roof Space Mapping", desc: "Perform 3D solar mapping to avoid shading from AC outdoor units and elevators." },
      { step: "Financial Projection", desc: "Produce ROI sheets showing NPV, IRR, and payback period." },
      { step: "Engineering & Permit", desc: "Secure municipal and utility approvals for commercial solar grid-tie." },
      { step: "Execution", desc: "Conduct neat, professional installations with structural safety checks." },
      { step: "Commissioning", desc: "Initiate net metering and set up remote display dashboards." }
    ]
  },
  "institutional-solar": {
    icon: GraduationCap,
    title: "Institutional Solar Solutions",
    subtitle: "Reliable Renewable Power for Educational & Healthcare Hubs",
    heroDesc: "Tailored solar energy solutions for schools, colleges, universities, research labs, hospitals, and NGO facilities. Provide reliable power, hedge against price hikes, and educate the next generation on sustainability.",
    benefits: [
      "Significant savings to redirect toward educational or healthcare resources",
      "Reliable, uninterrupted power for labs, critical wards, and server rooms",
      "Special government subsidy benefits and public funding support",
      "Educational tool: student access to real-time solar generation portals",
      "Lower carbon footprint for public and non-profit campuses",
      "Long-term durability with minimal maintenance requirements",
    ],
    details: [
      {
        title: "Critical Backup Sync",
        desc: "Integration with UPS systems and backup generators to ensure uninterrupted electricity for ICU wards, diagnostic machines, and servers."
      },
      {
        title: "Educational Value",
        desc: "We set up interactive dashboards in school lobbies to teach children about renewable energy and solar generation."
      },
      {
        title: "Flexible Budgets",
        desc: "Support for custom financing, government grants, and soft loans."
      }
    ],
    process: [
      { step: "Energy Audit", desc: "Audit cooling systems, laboratory equipment, and lighting profiles." },
      { step: "Design Safety Check", desc: "Ensure strict structural safety protocols for high-occupancy buildings." },
      { step: "Grant Coordination", desc: "Help prepare documents for educational or health institution grants." },
      { step: "Installation", desc: "Perform work during school breaks or low-occupancy hours to maximize safety." },
      { step: "Compliance Check", desc: "Verify electrical protection, earthing, and lightning arresters meet norms." },
      { step: "Student/Staff Briefing", desc: "Conduct training on system features and display dashboard usage." }
    ]
  },
  "solar-epc": {
    icon: Hammer,
    title: "Solar EPC Services",
    subtitle: "End-to-End Engineering, Procurement & Commissioning",
    heroDesc: "Our comprehensive Engineering, Procurement, and Commissioning (EPC) service provides a complete, turn-key solar power plant solution. We take absolute responsibility for the project, from initial concept design to final power generation.",
    benefits: [
      "Single point of contact for the entire solar project life cycle",
      "Expert structural and electrical engineering designs",
      "Bulk purchasing power: access to Tier-1 materials at lower costs",
      "Strict adherence to timelines and safety protocols",
      "Hassle-free regulatory filings and government approvals",
      "Guaranteed system performance and plant output",
    ],
    details: [
      {
        title: "Engineering",
        desc: "Custom PVsyst modeling, structural wind-load simulations, electrical layout design, and cable sizing."
      },
      {
        title: "Procurement",
        desc: "Direct sourcing of high-performance Tier-1 panels, smart string inverters, and hot-dip galvanized mounting structures."
      },
      {
        title: "Commissioning",
        desc: "Grid synchronization, protection relay testing, double earthing, and CEIG approval facilitation."
      }
    ],
    process: [
      { step: "Pre-Feasibility Study", desc: "Perform geographical, shadow, and financial feasibility audits." },
      { step: "Detailed Engineering", desc: "Create detailed single line diagrams (SLD) and structural designs." },
      { step: "Material Procurement", desc: "Purchase and transport checked components to the site." },
      { step: "Civil & Mechanical Work", desc: "Pour foundations, build mounting structures, and fix panels." },
      { step: "Electrical Commissioning", desc: "Lay cables, wire string combiners, set up inverters, and connect grid." },
      { step: "Handover & Documentation", desc: "Conduct performance ratio (PR) tests, hand over manuals and warranties." }
    ]
  },
  "operation-maintenance": {
    icon: Wrench,
    title: "Operation & Maintenance (O&M)",
    subtitle: "Maximize Solar Plant Lifespan & Output",
    heroDesc: "Keep your solar plant operating at peak efficiency. Our professional O&M services provide regular panel cleaning, preventive inspections, electrical health checks, and rapid repair response times to minimize generation losses.",
    benefits: [
      "Prevent up to 25% output loss caused by dust and dirt accumulation",
      "Extend inverter and panel lifespan through preventive checkups",
      "Thermal imaging scans to detect hidden panel hot-spots early",
      "24/7 remote tracking and automated alert responses",
      "Quick turnaround time (TAT) for component replacement",
      "Comprehensive monthly generation reports and insights",
    ],
    details: [
      {
        title: "Preventive Maintenance",
        desc: "Regular tightening of electrical connections, check of safety relays, and mechanical structural integrity checks."
      },
      {
        title: "Solar Panel Cleaning",
        desc: "Using water with low TDS (Total Dissolved Solids) and soft-bristle squeegees to avoid micro-scratches on glass coating."
      },
      {
        title: "Corrective Action",
        desc: "Fast replacement of failed fuses, replacement of faulty DC cables, and coordination with inverter manufacturer service centers."
      }
    ],
    process: [
      { step: "O&M Schedule Setup", desc: "Create a customized cleaning and inspection calendar based on site dust levels." },
      { step: "Cleaning Routine", desc: "Perform monthly/bi-monthly panel cleaning using professional gear." },
      { step: "Preventive Testing", desc: "Conduct electrical testing of strings (Voc, Isc) and check inverter logs." },
      { step: "Thermal Scan", desc: "Use infrared cameras to detect cells overheating (hotspots)." },
      { step: "Corrective Repairs", desc: "Fix any identified issues (faulty wiring, MC4 connectors, or structure bolts)." },
      { step: "Monthly Report", desc: "Deliver a complete review of energy generated, issues resolved, and efficiency stats." }
    ]
  },
  "scada-monitoring": {
    icon: Activity,
    title: "Remote Monitoring / SCADA Monitoring",
    subtitle: "Real-Time Performance Tracking & Analytics",
    heroDesc: "Gain complete visibility into your solar assets. Our remote monitoring and SCADA systems collect, analyze, and report real-time generation data from your inverters, weather sensors, and meters, instantly alerting us to any faults.",
    benefits: [
      "Identify and fix issues in real-time, reducing downtime",
      "Access generation dashboards from any mobile or desktop device",
      "Receive immediate alerts for inverter faults or grid failures",
      "Track weather metrics (solar radiation, ambient temp) to verify PR",
      "Prevent power degradation and optimize energy output",
      "Automated daily, weekly, and monthly performance reports",
    ],
    details: [
      {
        title: "SCADA Integration",
        desc: "For large MW-scale plants, we integrate SCADA systems featuring PLC controls, real-time visualization, and parameter tracking."
      },
      {
        title: "IoT Gateway",
        desc: "Our smart IoT data loggers push string-level data to our secure cloud monitoring portal every 5 minutes."
      },
      {
        title: "Performance Ratio (PR) Tracking",
        desc: "Automatically compare actual generation with theoretical output based on solar irradiance."
      }
    ],
    process: [
      { step: "Data Logger Setup", desc: "Install IoT gateways and connect them to inverter RS485/Modbus ports." },
      { step: "Sensors Calibration", desc: "Install solar pyranometers, module temp sensors, and wind speed meters." },
      { step: "Cloud Configuration", desc: "Register the system on our cloud monitoring platform and set up alerts." },
      { step: "Dashboard Access", desc: "Provide customized mobile app and desktop portal logins to client teams." },
      { step: "24/7 Monitoring Desk", desc: "Our centralized support desk monitors warnings and dispatches technicians." },
      { step: "Analytics Review", desc: "Conduct monthly reviews of inverter efficiency and grid downtime." }
    ]
  },
  "energy-efficiency": {
    icon: Gauge,
    title: "Energy Efficiency Solutions",
    subtitle: "Audit, Optimize & Offset Energy Consumption",
    heroDesc: "Maximize the impact of your solar plant by pairing it with energy conservation. We conduct complete energy audits to identify power waste and deploy energy efficiency upgrades to slash your overall electricity demand.",
    benefits: [
      "Reduce overall energy demand by 15-30% before solar sizing",
      "Lower required solar system capacity and capital costs",
      "Identify power leakages, poor power factors, and HVAC inefficiencies",
      "Install smart energy management systems (EMS) and LED retrofits",
      "Improve power factor to avoid DISCOM penalty charges",
      "Fast payback on energy-saving equipment upgrades",
    ],
    details: [
      {
        title: "Level-2 Energy Audits",
        desc: "Thermal imaging of panels, power quality analysis, harmonic studies, and motor load analysis."
      },
      {
        title: "Power Factor Correction",
        desc: "Install Automatic Power Factor Correction (APFC) panels to keep PF close to 1.0, qualifying for utility discounts."
      },
      {
        title: "Smart Automation",
        desc: "Integrate occupancy sensors, smart HVAC controls, and scheduled automated lighting systems."
      }
    ],
    process: [
      { step: "Energy Assessment", desc: "Log electrical parameters over 7 days using power analyzers." },
      { step: "Audit Report", desc: "Present a detailed report showing energy leakages and saving options." },
      { step: "Solution Design", desc: "Design APFC panels, LED retrofits, and smart motor drives." },
      { step: "Implementation", desc: "Procure and install the energy-saving devices with minimal disruption." },
      { step: "Validation", desc: "Measure post-installation energy demand to verify savings." },
      { step: "Solar Integration", desc: "Re-size and synchronize the solar system based on the optimized loads." }
    ]
  },
  "net-metering": {
    icon: RefreshCw,
    title: "Net Metering Services",
    subtitle: "Seamless Grid Connection & Export Approvals",
    heroDesc: "Unlock the true potential of your solar system by connecting it directly to the grid. We manage the entire net metering application process, feasibility studies, documentation, and bi-directional meter installation with local DISCOMs.",
    benefits: [
      "Export surplus daytime solar energy and earn utility credits",
      "Reduce electricity bills to near zero through offset credits",
      "End-to-end liaison with DISCOM, eliminating government office visits",
      "Complete regulatory documentation and drawing preparation",
      "Liaison with CEIG (Electrical Inspector) for systems above 10kW",
      "Available for residential, commercial, and industrial connections",
    ],
    details: [
      {
        title: "Export Credits",
        desc: "Excess solar energy generated during peak sunshine is fed back to the grid. The DISCOM credits this energy against your evening consumption."
      },
      {
        title: "DISCOM Liaison",
        desc: "We coordinate with MSEDCL (Maharashtra), MPPKVVCL/MPMKVVCL/MPPKVVCL (Madhya Pradesh), and other regional utilities."
      },
      {
        title: "Compliant Components",
        desc: "Provide DISCOM-approved bi-directional meters, surge protection devices (SPDs), and solar ACDB/DCDB boxes."
      }
    ],
    process: [
      { step: "Load Verification", desc: "Verify current sanctioned load and contract details of client." },
      { step: "Online Application", desc: "File applications on state solar portals and upload documents." },
      { step: "Liaison & Inspection", desc: "Coordinate physical site inspections with DISCOM engineers." },
      { step: "Infrastructure Setup", desc: "Install dual earthing, AC/DC distribution boxes, and safety switches." },
      { step: "Meter Installation", desc: "Procure and get the bi-directional meter calibrated and installed." },
      { step: "Solar Grid-Tie Commissioning", desc: "Obtain synchronization approval and turn on the grid-tie system." }
    ]
  },
  "ground-mounted-solar": {
    icon: Sun,
    title: "Ground Mounted Solar Plants",
    subtitle: "Utility-Scale On-Grid Power Generation",
    heroDesc: "For enterprises with large, vacant land plots, we design and construct ground-mounted solar power plants. These systems can be optimized for tilt angle, soil condition, and panel orientation, maximizing electricity production.",
    benefits: [
      "Higher electricity output compared to typical rooftop systems",
      "No roof load limitations or roofing material concerns",
      "Easy access for high-pressure panel cleaning and maintenance",
      "Custom concrete foundations to withstand high wind speeds (150 km/h)",
      "Ideal for industrial captive use or selling power to the grid",
      "Uses tracking systems (optional) to track sun path for 15-20% more yield",
    ],
    details: [
      {
        title: "Civil Engineering",
        desc: "Soil testing, land grading, piling, concrete foundation blocks, and storm-water drainage design."
      },
      {
        title: "Optimized Pitch & Tilt",
        desc: "Maximize solar irradiance by angling panels to the exact latitude and spacing strings to avoid self-shading."
      },
      {
        title: "Substation Integration",
        desc: "Design and build matching HT yards, transformers, and transmission line linkages."
      }
    ],
    process: [
      { step: "Soil & Topo Survey", desc: "Conduct soil load-bearing tests and topographic land mapping." },
      { step: "Civil Layout", desc: "Clear vegetation, level the ground, and layout structural markings." },
      { step: "Foundation Piling", desc: "Cast concrete foundation blocks or drive steel piles." },
      { step: "Structure Assembly", desc: "Mount heavy-duty hot-dip galvanized mounting structures." },
      { step: "PV Module & Cabling", desc: "Install modules and connect DC cables in underground trenches." },
      { step: "Inverter & HT Setup", desc: "Install central inverters, transformers, HT panels, and tie-in grid." }
    ]
  },
  "rooftop-solar": {
    icon: Home,
    title: "Rooftop Solar Systems",
    subtitle: "Turn Your Roof into a Clean Power Generator",
    heroDesc: "Make the most of your unused rooftop space. We design and install premium rooftop solar systems for bungalows, residential societies, corporate offices, and warehouses, providing reliable, clean energy directly on-site.",
    benefits: [
      "Transform idle roof space into a reliable financial asset",
      "Substantial government subsidies under PM Surya Ghar Yojana",
      "Provide thermal insulation, keeping the rooms directly below cooler",
      "No additional land required for installation",
      "Premium structural mounting (aluminum/GI) with zero roof leaks",
      "Enhance property value and green building rating",
    ],
    details: [
      {
        title: "Roof Mounting Methods",
        desc: "Ballasted mounts (no roof punctures) for concrete roofs, or leak-proof structural clamps for metal sheet roofs."
      },
      {
        title: "High Efficiency Modules",
        desc: "We use half-cut monocrystalline PERC panels that deliver high generation in cloudy or hot weather."
      },
      {
        title: "Safety Protections",
        desc: "Fitted with string-level fuses, lightning arresters, and dual earthing rods."
      }
    ],
    process: [
      { step: "3D Shadow Scan", desc: "Create a digital map of your roof to locate shadows from chimneys, trees, or adjacent buildings." },
      { step: "Structural Analysis", desc: "Verify the load capacity of the slab or metal framing." },
      { step: "Custom Mounting Design", desc: "Design mounting frames to maximize panels while leaving walking paths." },
      { step: "Installation", desc: "Fix structures, install panels, and run protected DC cables to the inverter." },
      { step: "Inverter Setup", desc: "Mount the grid-tie inverter and install AC/DC distribution boxes." },
      { step: "Net Metering integration", desc: "Complete billing registration and hand over the system." }
    ]
  },
  "group-captive-solar": {
    icon: Users,
    title: "Group Captive Solar Solutions",
    subtitle: "Shared Equity Off-site Solar Plants for Large Users",
    heroDesc: "A Group Captive Solar plant is an arrangement where a consortium of industrial or commercial users collectively set up a solar plant at an off-site location, holding at least 26% equity and consuming 51% of the generated power.",
    benefits: [
      "Drastically reduce electricity tariffs without building on-site plants",
      "Exemption from cross-subsidy surcharges (CSS), saving 20-30% more",
      "Scale your clean energy procurement up to multiple megawatts",
      "Share capital costs and development risks among group members",
      "Long-term power cost predictability with structured tariffs",
      "Fulfill Renewable Purchase Obligations (RPO) easily",
    ],
    details: [
      {
        title: "Regulatory Framework",
        desc: "Governed by the Electricity Rules, 2005. Requires structured Special Purpose Vehicle (SPV) formation."
      },
      {
        title: "Cross-Subsidy Savings",
        desc: "By taking equity shares, members are classified as 'captive users', exempting them from hefty CSS charges."
      },
      {
        title: "Wheeling Optimization",
        desc: "Coordination of generation schedules with consumer drawal schedules for maximum billing credits."
      }
    ],
    process: [
      { step: "Consortium Formation", desc: "Bring together industrial/commercial consumers and create the SPV." },
      { step: "Equity Structuring", desc: "Allocate shareholding (minimum 26%) based on consumption ratios." },
      { step: "Land & Development", desc: "Secure land and build the off-site MW-scale solar farm." },
      { step: "Grid Connection Approval", desc: "Secure banking and wheeling approvals from the State Transmission Utility." },
      { step: "Execution", desc: "Design, install, and synchronize the central solar farm." },
      { step: "Shared Billing Tracking", desc: "Deliver proportional generation credits to members' DISCOM bills." }
    ]
  },
  "project-design-engineering": {
    icon: DraftingCompass,
    title: "Solar Project Design & Engineering",
    subtitle: "Precision Engineering for Optimal Solar Performance",
    heroDesc: "A high-performing solar plant starts with exceptional design. Our engineering team uses advanced 3D software, meteorological databases, and structural modeling tools to create detailed, custom blueprints for your solar installation.",
    benefits: [
      "PVsyst simulations to estimate year-round generation with 98% accuracy",
      "3D shading analysis to locate optimal panel layout spots",
      "Custom structural design to resist local extreme wind speeds",
      "Precise electrical designs (SLDs) with optimized cable thickness",
      "Detailed Bill of Quantities (BOQ) preventing site cost overruns",
      "Pre-construction design packs ready for local utility approvals",
    ],
    details: [
      {
        title: "PVsyst Software",
        desc: "The global standard for simulating solar output, modeling inverter losses, string mismatches, and temperature coefficients."
      },
      {
        title: "Wind-Load Modeling",
        desc: "STAAD Pro modeling of structures to ensure they easily withstand regional wind forces."
      },
      {
        title: "Electrical Layout",
        desc: "Detailed layout maps for DC/AC cabling, earthing networks, and lightning protection systems."
      }
    ],
    process: [
      { step: "Data Collection", desc: "Gather GPS coordinates, physical site dimensions, and utility billing records." },
      { step: "Meteorological Mapping", desc: "Fetch local sun path, temperature, and cloud data from NASA databases." },
      { step: "3D Shading Simulation", desc: "Build a 3D digital model of the site and identify shading objects." },
      { step: "Electrical & Structural Design", desc: "Design structural mounts and map string connections." },
      { step: "Output Simulation", desc: "Run PVsyst yield reports showing monthly energy delivery projections." },
      { step: "BOQ & Layout Delivery", desc: "Deliver engineering documents, structural drawings, and material specifications." }
    ]
  },
  "installation-commissioning": {
    icon: Power,
    title: "Solar Installation & Commissioning",
    subtitle: "Professional Execution, Wiring & Grid Setup",
    heroDesc: "Turn engineering designs into an active solar power plant. Our trained team manages the physical assembly, structural mounting, electrical wiring, safety protections, and grid synchronization, ensuring safe operations.",
    benefits: [
      "Safe installation by certified technicians and safety officers",
      "Strict adherence to NEC (National Electrical Code) wiring rules",
      "High-quality, moisture-resistant MC4 connectors and conduits",
      "Robust earthing system with chemical earthing electrodes",
      "Comprehensive component check (panels, inverters, cables, switchgears)",
      "Seamless grid synchronization and generation check",
    ],
    details: [
      {
        title: "Structure Mechanical Assembly",
        desc: "Install torque-tested anchor fasteners, level mounting channels, and secure modules."
      },
      {
        title: "Electrical Cabling",
        desc: "Neat running of copper/aluminum DC cables in heavy-duty conduit pipe, avoiding loose wires."
      },
      {
        title: "Grid Synchronization",
        desc: "Checking grid voltage, phase rotation, grid frequency matching, and switching on the inverter."
      }
    ],
    process: [
      { step: "Site Prep", desc: "Deliver components safely, clear workspace, and install safety nets." },
      { step: "Mechanical Assembly", desc: "Erect mounting structures and secure modules with torque wrenches." },
      { step: "DC Wiring", desc: "Connect modules into strings, wire to DCDB, and route to inverter." },
      { step: "AC Integration", desc: "Connect inverter to ACDB and hook into main electrical panel." },
      { step: "Safety Audits", desc: "Perform megger tests, insulation tests, and measure earthing resistance." },
      { step: "Commissioning", desc: "Conduct the grid sync trial, verify system output, and activate." }
    ]
  },
  "regulatory-approval-support": {
    icon: FileCheck,
    title: "Solar Regulatory & Approval Support",
    subtitle: "Hassle-Free Approvals, Subsidies & Compliance",
    heroDesc: "Avoid complex government paperwork. We manage the entire administrative process — from DISCOM net metering approvals, government solar subsidy applications, CEIG clearance certificates, to municipal permissions.",
    benefits: [
      "Liaison with DISCOM offices for quick net metering feasibility approvals",
      "Submit and track central & state solar subsidy claims (PM Surya Ghar)",
      "Draft CEIG drawings and secure Chief Electrical Inspector clearances",
      "Prepare structural stability certifications from certified structural engineers",
      "Handle municipal approvals and fire safety certifications if required",
      "Zero administrative stress for home and business owners",
    ],
    details: [
      {
        title: "PM Surya Ghar Yojana Support",
        desc: "Directly handle portal uploads, geo-tagging, site photos, and bank accounts for smooth subsidy payouts."
      },
      {
        title: "CEIG Clearances",
        desc: "Compulsory for solar installations exceeding 10kW. We prepare all technical drawings, clear electrical layouts, and coordinate inspection visits."
      },
      {
        title: "DISCOM coordination",
        desc: "Coordinate with utility field teams for testing and meter programming."
      }
    ],
    process: [
      { step: "Documents Check", desc: "Collect electricity bills, property deeds, ID proofs, and photos." },
      { step: "Portal Registration", desc: "Submit applications on the National Solar Portal and state utility portals." },
      { step: "Feasibility Coordination", desc: "Liaison with local junior engineers for physical site inspections." },
      { step: "Clearance Applications", desc: "File CEIG drawings and structure stability reports for high-capacity projects." },
      { step: "Verification Tracking", desc: "Track inspection approvals, resolve queries, and schedule test runs." },
      { step: "Subsidy Disbursement", desc: "Verify net metering installation on the portal to trigger subsidy payments." }
    ]
  },
  "solar-asset-management": {
    icon: TrendingUp,
    title: "Solar Asset Management",
    subtitle: "Optimize Financial & Operational Solar Returns",
    heroDesc: "Maximize the long-term ROI of your solar investments. Our solar asset management service tracks financial metrics, manages insurance claims, handles manufacturer warranties, and optimizes operational efficiency for solar portfolios.",
    benefits: [
      "Continuous auditing of solar output against financial goals",
      "Manage inverter and panel warranties, coordinating replacements",
      "Arrange comprehensive solar asset insurance against storms or theft",
      "Ensure compliance with environmental regulations and safety rules",
      "Optimize billing reconciliation with utilities and PPA clients",
      "Extend asset lifespan to 30+ years, protecting your capital",
    ],
    details: [
      {
        title: "Financial Auditing",
        desc: "Track levelized cost of energy (LCOE), ROI rates, and calculate daily savings against local grid tariffs."
      },
      {
        title: "Warranty Liaison",
        desc: "In case of panel degradation or inverter module faults, we manage warranty replacement with manufacturers."
      },
      {
        title: "Regulatory Auditing",
        desc: "Keep track of banking rules, transmission tariffs, and wheeling charges under local regulations."
      }
    ],
    process: [
      { step: "Asset Onboarding", desc: "Log all component serial numbers, purchase invoices, and warranties." },
      { step: "Continuous Auditing", desc: "Track daily performance metrics and reconcile monthly utility bills." },
      { step: "Maintenance Verification", desc: "Monitor O&M services to ensure cleaning schedule is maintained." },
      { step: "Warranty Management", desc: "Submit claims for failed components and secure replacements." },
      { step: "Insurance Sourcing", desc: "Secure insurance cover for the solar plant against weather or damage." },
      { step: "Performance Review", desc: "Provide annual financial yield reports to the client's board." }
    ]
  }
};

const ServiceDetailPage = ({ slug }: { slug: string }) => {
  // Alias mapping for backward compatibility
  let targetSlug = slug;
  if (slug === "solar-installation") targetSlug = "rooftop-solar";
  else if (slug === "maintenance-repair") targetSlug = "operation-maintenance";
  else if (slug === "custom-design") targetSlug = "project-design-engineering";
  else if (slug === "subsidy-assistance") targetSlug = "regulatory-approval-support";

  const service = servicePages[targetSlug];
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
            <Button
              className="animate-pulse-glow font-bold group"
              onClick={() => {
                window.location.href = `/?service=${targetSlug}#contact`;
              }}
            >
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

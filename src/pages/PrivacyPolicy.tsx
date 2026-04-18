import { ArrowLeft, Shield, Eye, Lock, Cookie, UserCheck, Mail, Database, Globe, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  {
    icon: Database,
    title: "1. Information We Collect",
    content: [
      "We collect personal information you voluntarily provide when using our services:",
      "• **Personal Identifiers:** Full name, phone number, email address",
      "• **Location Data:** City, state, and address for site survey purposes",
      "• **Financial Information:** Monthly electricity bill amount for solar calculation",
      "• **Communication Data:** Messages, queries, and feedback submitted through contact forms",
      "• **Technical Data:** Browser type, IP address, device information, and cookies for website analytics",
      "• **Usage Data:** Pages visited, time spent, interaction patterns to improve our services",
      "We do NOT collect sensitive personal data such as Aadhaar numbers, bank account details, or payment card information through this website.",
    ],
  },
  {
    icon: Eye,
    title: "2. How We Use Your Information",
    content: [
      "Your information is used strictly for the following purposes:",
      "• **Service Delivery:** To respond to enquiries, provide solar consultations, and process service requests",
      "• **Solar Calculations:** To generate accurate savings estimates, system recommendations, and ROI calculations",
      "• **Site Surveys:** To schedule and conduct property assessments for solar installation feasibility",
      "• **Subsidy Applications:** To assist with PM Surya Ghar and state subsidy documentation on your behalf",
      "• **Communication:** To send project updates, installation schedules, and maintenance reminders",
      "• **Marketing (with consent):** To share information about new solar products, government schemes, and promotional offers",
      "• **Analytics:** To understand visitor behavior and improve website functionality and user experience",
      "• **Legal Compliance:** To comply with applicable laws, regulations, and legal processes",
    ],
  },
  {
    icon: Lock,
    title: "3. Data Protection & Security",
    content: [
      "We implement industry-standard security measures to protect your personal data:",
      "• **Encryption:** All data transmission is encrypted using SSL/TLS protocols",
      "• **Access Control:** Only authorized personnel have access to customer data on a need-to-know basis",
      "• **Secure Storage:** Data is stored on secure, access-controlled servers",
      "• **No Sale of Data:** Your personal information is NEVER sold, rented, or traded to third parties",
      "• **Partner Sharing:** We share data only with trusted installation partners and government bodies when necessary to fulfil your service request or subsidy application",
      "• **Data Retention:** We retain your data only as long as necessary to provide services and comply with legal obligations, typically up to 7 years for tax and warranty purposes",
    ],
  },
  {
    icon: Cookie,
    title: "4. Cookies & Tracking",
    content: [
      "Our website uses the following types of cookies:",
      "• **Essential Cookies:** Required for website functionality (session management, security)",
      "• **Analytics Cookies:** Google Analytics to understand visitor behavior and improve our services",
      "• **Performance Cookies:** To monitor website speed and optimize loading times",
      "You can manage cookie preferences through your browser settings. Disabling essential cookies may affect website functionality. We do not use cookies for targeted advertising.",
    ],
  },
  {
    icon: UserCheck,
    title: "5. Your Rights Under Indian Law",
    content: [
      "Under the Digital Personal Data Protection Act, 2023 (DPDPA) and applicable regulations, you have the right to:",
      "• **Access:** Request a copy of all personal data we hold about you",
      "• **Correction:** Request modification of inaccurate or incomplete data",
      "• **Deletion:** Request erasure of your personal data (subject to legal retention requirements)",
      "• **Withdraw Consent:** Revoke previously given consent for data processing at any time",
      "• **Data Portability:** Request your data in a commonly used, machine-readable format",
      "• **Grievance Redressal:** File a complaint with our Data Protection Officer or the Data Protection Board of India",
      "To exercise any of these rights, contact us at info@eurosolprime.com with your request. We will respond within 30 days.",
    ],
  },
  {
    icon: Globe,
    title: "6. Third-Party Links",
    content: [
      "Our website may contain links to third-party websites (government portals, manufacturer websites, etc.). We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party site you visit.",
    ],
  },
  {
    icon: FileText,
    title: "7. Changes to This Policy",
    content: [
      "We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. Any significant changes will be communicated through our website. We recommend reviewing this page regularly. The 'Last Updated' date at the top indicates the most recent revision.",
    ],
  },
  {
    icon: Mail,
    title: "8. Contact Us",
    content: [
      "For any questions, concerns, or requests regarding this privacy policy or your personal data:",
      "📧 **Email:** info@eurosolprime.com",
      "📞 **Phone:** +91 98344 60139",
      "📍 **Head Office:** Indore, Madhya Pradesh, India",
      "📍 **Branch Office:** Nagpur, Maharashtra, India",
      "🕐 **Response Time:** Within 48 business hours",
      "",
      "**Data Protection Officer:** Amar Kapse (Director of Business Operations)",
    ],
  },
];

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background text-foreground">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8 text-sm">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>

      <div className="glass rounded-2xl p-6 sm:p-10 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <Shield className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground mt-1">Last Updated: April 2026</p>
          </div>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          At Eurosol Prime, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, store, and protect your data when you interact with our website and services. By using our website, you consent to the practices described in this policy.
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

export default PrivacyPolicy;

import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background text-foreground">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8 text-sm">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-8">Privacy Policy</h1>
      <div className="prose prose-invert prose-sm max-w-none space-y-6 text-muted-foreground">
        <p><strong className="text-foreground">Last Updated:</strong> April 2026</p>

        <h2 className="text-xl font-bold text-foreground mt-8">1. Information We Collect</h2>
        <p>We collect personal information you provide when filling out our contact form, solar calculator, or requesting a free quote — including your name, phone number, email address, electricity bill amount, and location.</p>

        <h2 className="text-xl font-bold text-foreground mt-8">2. How We Use Your Information</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>To respond to your enquiries and provide solar consultation</li>
          <li>To calculate and provide customized solar savings estimates</li>
          <li>To process and schedule site surveys</li>
          <li>To send you relevant updates about solar subsidies and offers (with your consent)</li>
          <li>To improve our website and services</li>
        </ul>

        <h2 className="text-xl font-bold text-foreground mt-8">3. Data Protection</h2>
        <p>We implement industry-standard security measures to protect your personal data. Your information is never sold to third parties. We only share data with trusted installation partners when needed to fulfil your service request.</p>

        <h2 className="text-xl font-bold text-foreground mt-8">4. Cookies</h2>
        <p>Our website uses essential cookies for functionality and analytics cookies to understand visitor behavior. You can disable cookies in your browser settings.</p>

        <h2 className="text-xl font-bold text-foreground mt-8">5. Your Rights</h2>
        <p>You have the right to access, modify, or delete your personal data at any time. Contact us at <span className="text-primary">info@eurosolprime.com</span> for any privacy-related requests.</p>

        <h2 className="text-xl font-bold text-foreground mt-8">6. Contact Us</h2>
        <p>For any questions regarding this privacy policy, reach us at:<br />
        📧 info@eurosolprime.com<br />
        📞 +91 98765 43210</p>
      </div>
    </div>
  </div>
);

export default PrivacyPolicy;

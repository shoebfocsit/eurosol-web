import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsConditions = () => (
  <div className="min-h-screen bg-background text-foreground">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8 text-sm">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-8">Terms & Conditions</h1>
      <div className="prose prose-invert prose-sm max-w-none space-y-6 text-muted-foreground">
        <p><strong className="text-foreground">Effective Date:</strong> April 2026</p>

        <h2 className="text-xl font-bold text-foreground mt-8">1. Services</h2>
        <p>Eurosol Prime provides solar panel installation, maintenance, consultation, and related energy services. All services are subject to site feasibility and local regulations.</p>

        <h2 className="text-xl font-bold text-foreground mt-8">2. Quotations & Pricing</h2>
        <p>All quotes provided through our website or calculator are estimates only. Final pricing depends on site survey, roof condition, system design, and applicable government subsidies. Prices are valid for 30 days from the date of quotation.</p>

        <h2 className="text-xl font-bold text-foreground mt-8">3. Warranty</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Solar panels: 25-year performance warranty (as per manufacturer)</li>
          <li>Inverter: 5-10 year warranty (varies by brand)</li>
          <li>Installation workmanship: 10-year warranty by Eurosol Prime</li>
          <li>Warranty does not cover damage from natural disasters, unauthorized modifications, or negligence</li>
        </ul>

        <h2 className="text-xl font-bold text-foreground mt-8">4. Payment Terms</h2>
        <p>A 30% advance is required to confirm the order. Balance payment is due upon installation completion and system commissioning. We accept bank transfer, UPI, and cheque payments.</p>

        <h2 className="text-xl font-bold text-foreground mt-8">5. Cancellation & Refund</h2>
        <p>Orders can be cancelled before material procurement with a full refund. After procurement begins, a 15% restocking fee applies. No refunds after installation begins.</p>

        <h2 className="text-xl font-bold text-foreground mt-8">6. Subsidy Assistance</h2>
        <p>We assist with government subsidy applications (PM Surya Ghar, state schemes). However, subsidy approval is at the discretion of the government authority and Eurosol Prime cannot guarantee approval.</p>

        <h2 className="text-xl font-bold text-foreground mt-8">7. Limitation of Liability</h2>
        <p>Eurosol Prime's liability is limited to the value of the contract. We are not liable for indirect damages, loss of income, or consequential losses arising from service delays or system performance variations.</p>

        <h2 className="text-xl font-bold text-foreground mt-8">8. Contact</h2>
        <p>For any queries regarding these terms:<br />
        📧 info@eurosolprime.com<br />
        📞 +91 98765 43210<br />
        📍 Lucknow, Uttar Pradesh, India</p>
      </div>
    </div>
  </div>
);

export default TermsConditions;

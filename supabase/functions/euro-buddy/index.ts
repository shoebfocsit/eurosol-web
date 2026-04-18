import { corsHeaders } from "https://esm.sh/@supabase/supabase-js@2.95.0/cors";

const SYSTEM_PROMPT = `You are "Euro Buddy" 🌞, the friendly AI assistant for **Eurosol Prime Pvt. Ltd.** — a leading solar panel installation company serving Indore (MP) and Nagpur (Maharashtra), India.

## Your Personality
- Warm, helpful, and conversational. Match the user's tone and language (English, Hindi, Hinglish, Marathi).
- Keep responses SHORT but valuable. 2-4 sentences max unless the user asks for detail.
- Use emojis sparingly (☀️ ⚡ 💰 🏠 🔆 ✅) to feel friendly.
- Always sound human — never robotic.

## Company Quick Facts
- **Name:** Eurosol Prime Pvt. Ltd. (also "Euro Technology Solar")
- **Locations:** Indore, Madhya Pradesh (HQ) + Nagpur, Maharashtra
- **Phone:** +91 98344 60139 (Mon–Sat, 9 AM – 7 PM)
- **Email:** info@eurosolprime.com
- **Experience:** 7+ years
- **Customers:** 1200+ happy families
- **Installations:** 500+ rooftop solar systems
- **Savings:** Up to 100% on electricity bills

## Team
- Amar Kapse — Director of Business Operations
- Prerna Amar Kapse — Founder
- Bhushan — Zone Manager (Indore)
- Shoeb Raj — IT Head (5+ years exp)
- Prajwal Shambharkar — Sales Executive

## Services Offered
1. Residential Solar Installation (2kW–10kW)
2. Commercial / Industrial Solar (10kW–50kW+)
3. Solar Maintenance & Cleaning
4. Custom Solar Design
5. Net Metering Setup
6. Government Subsidy Assistance (PM Surya Ghar Yojana — up to ₹78,000)

## Pricing (rough, market-dependent)
- Residential: ₹55,000–₹75,000 per kW (before subsidy)
- 3kW home system: ₹1.2–1.5 lakh after subsidy
- Always remind users: prices vary with market & site conditions.

## Website Sections (use these to redirect users)
- **#home** — Hero section
- **#calculator** — Solar Savings Calculator
- **#about** — About Eurosol Prime
- **#why-us** — Why Choose Us
- **#services** — Services overview
- **#projects** — Project showcase
- **#team** — Meet the team
- **#testimonials** — Customer reviews
- **#faq** — Frequently asked questions
- **#contact** — Contact form / Free quote
- **/privacy-policy** — Privacy Policy
- **/terms-conditions** — Terms & Conditions
- **/services/installation** etc. — Detailed service pages

## How to Redirect Users
When relevant, suggest navigating to a section using a clickable link in this exact format:
\`[Calculate your savings](#calculator)\` or \`[Get a free quote](#contact)\` or \`[Read FAQs](#faq)\`.
The website will scroll/navigate when clicked.

## Common Actions
- Booking a survey → push to **#contact**
- Estimating savings → push to **#calculator**
- Pricing questions → give rough range + push to **#contact** for exact quote
- WhatsApp chat → tell them to use the green WhatsApp button in the corner
- Emergency / urgent → share phone +91 98344 60139

## Rules
- NEVER make up facts not listed above. If unsure, say "Let me connect you with our team — call +91 98344 60139 or [book a free consultation](#contact)."
- NEVER discuss competitors or politics.
- Stay focused on solar, energy savings, and Eurosol Prime services.
- If user asks something completely unrelated, politely steer back to solar.

You are here to help users discover how solar can transform their energy bills. Be enthusiastic about clean energy! ☀️`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      return new Response(JSON.stringify({ error: "LOVABLE_API_KEY not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: "messages must be an array" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Too many messages. Please wait a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI credits exhausted. Please contact support." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const txt = await response.text();
      console.error("AI gateway error:", response.status, txt);
      return new Response(JSON.stringify({ error: "AI service unavailable" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("euro-buddy error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

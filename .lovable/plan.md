

# Eurosol Prime — Full Premium Website Build

## Overview
Build the complete Eurosol Prime solar energy website from scratch. The page is currently a blank placeholder. We'll create a stunning, professional single-page website with smooth animations, glass-morphism effects, and a premium dark theme that makes both the client and their customers fall in love.

## Technical Approach

### Step 1: Update Design System
- **tailwind.config.ts**: Add custom keyframes (fade-in, slide-up, float, pulse-glow, count-up, shimmer) and custom colors (solar orange, navy shades)
- **src/index.css**: Override CSS variables for dark navy theme (`#0f1729` background, orange `#F97316` accent), add glass-morphism utilities, gradient text utilities, and animation delay classes

### Step 2: Create Component Files
All in `src/components/`:

- **Navbar.tsx** — Sticky transparent-to-solid navbar with logo, nav links (Home, About, Services, Projects, Testimonials, Contact), orange "Get Free Quote" CTA, mobile hamburger with slide-in drawer
- **HeroSection.tsx** — Full-screen hero with animated gradient background, CSS solar grid pattern, bold headline "Power Your Future with Solar Energy", glowing orange CTA, floating animated stats bar (500+ Panels, 300+ Homes, 10+ Years)
- **AboutSection.tsx** — Split layout with company story, mission points with orange check icons, fade-in scroll animations
- **WhyChooseUs.tsx** — 6 glass-morphism feature cards in responsive grid (Expert Installation, Tailored Solutions, Cost-Efficient, End-to-End Support, Premium Components, Quick Installation) with orange glow hover
- **ServicesSection.tsx** — 3 large service cards with gradient overlays, hover reveal animations (Installation, Maintenance, Custom Design)
- **ProjectsShowcase.tsx** — Project gallery with overlay titles, hover zoom effect, stats per project
- **TestimonialsSection.tsx** — Auto-rotating testimonial carousel with star ratings, customer avatars, locations (Indian customers)
- **ContactSection.tsx** — Contact info strip (phone, email, hours) + contact form with glass-morphism styling
- **Footer.tsx** — Dark footer with logo, tagline, quick links, services, social icons
- **ScrollAnimator.tsx** — Intersection Observer wrapper for triggering fade/slide animations on scroll

### Step 3: Build Index Page
- **src/pages/Index.tsx**: Compose all sections in order with smooth scroll behavior
- **src/App.css**: Remove default Vite styles, add global smooth scroll

### Key Design Features
- Dark navy (#0f1729) base with orange (#F97316) accents throughout
- Glass-morphism cards (backdrop-blur, semi-transparent backgrounds)
- Scroll-triggered animations on every section
- Animated counter for stats (useEffect with setInterval)
- Gradient text for headings
- Orange pulse animation on primary CTAs
- Responsive: mobile-first, hamburger menu, stacked layouts on small screens
- Professional typography hierarchy
- Subtle grid/dot pattern background in hero

### File Count
~12 new/modified files total. No external dependencies needed beyond what's installed (lucide-react for icons).


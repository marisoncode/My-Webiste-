export const pricingPackages = [
  {
    id: "starter",
    name: "Starter Website",
    badge: "Special ₹999 Offer",
    isPopular: false,
    price: "₹999",
    numericPrice: 999,
    originalPrice: "₹2,999",
    period: "one-time",
    description: "Ideal for personal portfolios, single-page business presence, and quick product launches with direct WhatsApp chat.",
    turnaround: "48 - 72 Hours",
    revisions: "2 Rounds Included",
    highlights: [
      "Custom responsive single-page design",
      "100% mobile, tablet & laptop optimized",
      "Direct WhatsApp chat button setup",
      "Contact form with instant email alerts",
      "Google Maps location and social media links",
      "Fast page load speed & clean React code",
      "Free cloud hosting deployment setup",
      "7 days post-launch support"
    ],
    notIncluded: [
      "Multi-page architecture (Up to 1 page included)",
      "Dynamic Admin CMS dashboard",
      "Online payment gateway integration"
    ],
    ctaText: "Get Starter for ₹999",
    idealFor: "Freelancers, creators, local shop promos, quick launches"
  },
  {
    id: "business",
    name: "Business Package",
    badge: "Special ₹999 Launch",
    isPopular: false,
    price: "₹999",
    numericPrice: 999,
    originalPrice: "₹4,999",
    period: "one-time",
    description: "The complete website solution for growing companies, service businesses, and brands that want high conversions and modern credibility.",
    turnaround: "5 - 7 Days",
    revisions: "Unlimited during design phase",
    highlights: [
      "Bespoke premium design (Up to 6 custom pages)",
      "Modern subtle animations & micro-interactions",
      "Easy CMS Admin Panel (Edit text, blogs, images without coding)",
      "Complete On-Page SEO & Google Search ranking setup",
      "WhatsApp & email lead capture forms",
      "Interactive cost estimator or quotation widget",
      "Google Analytics 4 & visitor tracking",
      "Sub-second page speed optimization",
      "30 days dedicated support & video walkthrough guide"
    ],
    notIncluded: [
      "Complex multi-vendor marketplace functionality"
    ],
    ctaText: "Choose Business for ₹999",
    idealFor: "Service businesses, agencies, growing startups, clinics"
  },
  {
    id: "premium",
    name: "Premium Flagship",
    badge: "Limited ₹999 Promo",
    isPopular: false,
    price: "₹999",
    numericPrice: 999,
    originalPrice: "₹7,999",
    period: "one-time",
    description: "Tailor-made flagship website for brands demanding custom functionality, catalog showcases, and premium creative agency aesthetic.",
    turnaround: "7 - 10 Days",
    revisions: "Unlimited Revisions",
    highlights: [
      "Custom multi-section pages & interactive components",
      "Online inquiries & 1-tap WhatsApp catalog ordering",
      "Product showcase or custom booking appointment form",
      "Award-winning level animations & interactive features",
      "Full SEO strategy: Schema markup, XML sitemaps, speed audit",
      "Multi-language & regional localization support",
      "VIP priority direct WhatsApp support (+91 73054 31802)",
      "60 days full warranty & monthly maintenance included"
    ],
    notIncluded: [],
    ctaText: "Choose Premium for ₹999",
    idealFor: "D2C brands, luxury businesses, portfolios, funded startups"
  }
];

export const calculatorOptions = {
  projectTypes: [
    { id: "landing", label: "Single-Page / Launch Promo", basePrice: 999, days: 3 },
    { id: "business", label: "Multi-Page Business Website", basePrice: 999, days: 5 },
    { id: "ecommerce", label: "E-Commerce / Store Showcase", basePrice: 999, days: 7 },
    { id: "custom_app", label: "Portfolio / Agency Website", basePrice: 999, days: 5 }
  ],
  pageCounts: [
    { id: "1-3", label: "1 - 3 Pages", price: 0, days: 0 },
    { id: "4-6", label: "4 - 6 Pages", price: 0, days: 1 },
    { id: "7-10", label: "7 - 10 Pages", price: 0, days: 2 },
    { id: "10+", label: "10+ Pages", price: 0, days: 3 }
  ],
  addFeatures: [
    { id: "cms", label: "Easy Admin CMS (Edit Text & Photos)", price: 0, days: 1 },
    { id: "whatsapp_bot", label: "WhatsApp Chat & Lead Automation", price: 0, days: 1 },
    { id: "payments", label: "Razorpay / UPI Payment Gateway", price: 0, days: 1 },
    { id: "seo_pro", label: "Complete Google SEO & Ranking Setup", price: 0, days: 1 },
    { id: "booking", label: "Online Appointment / Table Booking", price: 0, days: 1 },
    { id: "speed", label: "Ultra Speed Optimization (Under 1s)", price: 0, days: 1 }
  ]
};

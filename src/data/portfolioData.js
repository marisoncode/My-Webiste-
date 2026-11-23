export const portfolioProjects = [
  {
    id: "business-website",
    title: "Business Website",
    category: "corporate",
    categoryLabel: "Corporate • Web Design",
    tagline: "High-impact enterprise web platform with interactive analytics and client portal",
    description: "A prestigious corporate digital platform built for growth. Features dynamic financial charts, executive bios, case studies, and automated lead capture.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    previewBg: "from-blue-900/20 via-sky-900/10 to-slate-900",
    accentColor: "blue",
    stats: {
      metric1: { label: "Inquiries", value: "+210%" },
      metric2: { label: "Page Load", value: "0.6s" },
      metric3: { label: "Conversion", value: "4.8%" }
    },
    tags: ["React 18", "Tailwind CSS", "Enterprise SEO", "Analytics"],
    liveFeatures: [
      "Custom interactive dashboard with real-time analytics preview",
      "Executive team profiles and corporate governance reports",
      "Fast client portal login with enterprise SSL encryption",
      "Lead scoring and direct WhatsApp CRM integration"
    ],
    challenge: "The client needed a high-trust institutional website that communicates market leadership to international investors.",
    solution: "We delivered a lightning-fast responsive platform with cinematic typography, interactive data visualizations, and clear conversion funnels."
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    category: "ecommerce",
    categoryLabel: "Retail • Development",
    tagline: "Omnichannel retail experience with slide-cart, UPI payments and live stock sync",
    description: "A frictionless modern e-commerce platform for fast-scaling brands. Built with 1-click Razorpay checkout, product customization, and mobile-first gesture navigation.",
    image: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?q=80&w=1200&auto=format&fit=crop",
    previewBg: "from-cyan-900/20 via-blue-900/10 to-slate-900",
    accentColor: "cyan",
    stats: {
      metric1: { label: "Mobile Sales", value: "+185%" },
      metric2: { label: "Load Speed", value: "0.7s" },
      metric3: { label: "Cart Drop", value: "-34%" }
    },
    tags: ["React", "Razorpay UPI", "Tailwind CSS", "Framer Motion"],
    liveFeatures: [
      "Instant 1-click UPI & Card checkout via Razorpay",
      "Slide-over cart with free shipping milestone tracker",
      "Customer video reviews & before/after skin routine guides",
      "Mobile-first bottom navigation bar for effortless browsing"
    ],
    challenge: "The brand was losing mobile shoppers due to slow checkout load times and clunky cart modals.",
    solution: "We re-engineered the mobile experience with React micro-interactions, reducing checkout time to under 15 seconds."
  },
  {
    id: "ai-dashboard",
    title: "AI Dashboard",
    category: "saas",
    categoryLabel: "Technology • Web App",
    tagline: "Neural network intelligence dashboard with live inference monitoring",
    description: "A cutting-edge SaaS web application interface featuring 3D holographic neural visualizers, dark-mode bioluminescent data grids, and API throughput metrics.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    previewBg: "from-indigo-950 via-purple-950/40 to-slate-950",
    accentColor: "purple",
    stats: {
      metric1: { label: "Latency", value: "42ms" },
      metric2: { label: "Accuracy", value: "99.8%" },
      metric3: { label: "Active Users", value: "10k+" }
    },
    tags: ["React", "WebGL / Three.js", "Tailwind CSS", "WebSockets"],
    liveFeatures: [
      "Real-time glowing neural network visualizer",
      "Interactive data filtration and query playground",
      "Dark mode first UI with neon cyan & violet accents",
      "Exportable analytics reports in CSV and PDF"
    ],
    challenge: "The startup needed an extraordinary, futuristic web app interface to showcase their machine learning models to enterprise buyers.",
    solution: "We architected an immersive Three.js & Tailwind interface that won user praise and accelerated Series A investor discussions."
  },
  {
    id: "roast-republic",
    title: "Roast Republic – Artisanal Café & Bistro",
    category: "restaurant",
    categoryLabel: "Café & Hospitality",
    tagline: "Atmospheric dining experience with live digital menu & WhatsApp table booking",
    description: "An inviting, mouth-watering website for a popular specialty coffee roaster and bistro. Complete with an interactive dietary menu, coffee subscription page, and instant WhatsApp table reservations.",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop",
    previewBg: "from-orange-100/50 via-stone-50 to-white",
    accentColor: "orange",
    stats: {
      metric1: { label: "Table Bookings", value: "+280%" },
      metric2: { label: "Phone Calls Saved", value: "40 hrs/mo" },
      metric3: { label: "Google Rating", value: "4.9/5" }
    },
    tags: ["React", "Tailwind CSS", "WhatsApp API", "Google Maps"],
    liveFeatures: [
      "Filterable menu by dietary preference (Vegan, Gluten-free, Chef's Special)",
      "Direct WhatsApp table reservation button with auto-filled dates",
      "Interactive map and one-tap directions for mobile visitors",
      "Storytelling gallery showcasing ethical coffee bean sourcing"
    ],
    challenge: "The café was losing weekend reservations because staff were too busy during rush hours to pick up booking calls.",
    solution: "We designed a tactile mobile-friendly site with a 2-tap WhatsApp reservation button. Weekend direct table bookings increased by 280% within the first month."
  },
  {
    id: "aura-dental",
    title: "Aura Dental & Aesthetics Clinic",
    category: "healthcare",
    categoryLabel: "Healthcare & Clinic",
    tagline: "Calming clinic portal with doctor profiles & online appointment scheduler",
    description: "A soothing, high-trust healthcare portal designed for a multi-specialty dental and aesthetic clinic. Built to put patients at ease, explain treatment procedures transparently, and make booking painless.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop",
    previewBg: "from-teal-100/50 via-cyan-50 to-white",
    accentColor: "teal",
    stats: {
      metric1: { label: "Online Appointments", value: "+310%" },
      metric2: { label: "Avg Booking Time", value: "45 sec" },
      metric3: { label: "Patient Trust Score", value: "98%" }
    },
    tags: ["React", "Tailwind CSS", "Calendar Booking", "SEO"],
    liveFeatures: [
      "3-step appointment booking wizard with date/time selector",
      "Doctor credentials, video introductions, and case galleries",
      "Transparent fee guides and treatment walkthroughs",
      "Automated WhatsApp appointment confirmations"
    ],
    challenge: "The clinic's previous generic WordPress template was slow, looked clinical, and patients often abandoned the clunky booking form.",
    solution: "We designed a warm, welcoming UI with clear patient testimonials, doctor bios, and a 45-second appointment booking flow that tripled direct bookings."
  },
  {
    id: "varma-architects",
    title: "Studio Varma – Luxury Architecture",
    category: "portfolio",
    categoryLabel: "Architecture & Studio",
    tagline: "Editorial spatial design portfolio with full-bleed imagery & project stories",
    description: "An architectural studio portfolio celebrating residential villas and urban projects with editorial typography, blueprint overlays, and fluid smooth image transitions.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    previewBg: "from-stone-100 via-slate-50 to-white",
    accentColor: "stone",
    stats: {
      metric1: { label: "Client Inquiries", value: "+220% Lift" },
      metric2: { label: "Time on Site", value: "3m 48s" },
      metric3: { label: "Mobile Experience", value: "Flawless" }
    },
    tags: ["React", "Framer Motion", "Tailwind CSS", "Editorial UI"],
    liveFeatures: [
      "Full-screen project inspection viewer with before/after renovation sliders",
      "Blueprint and architectural material moodboards",
      "Direct consultation inquiry form linked to Google Calendar",
      "Minimalist typography that lets architectural photography shine"
    ],
    challenge: "The architect firm needed a website that reflected the precision and luxury of their physical buildings to attract high-net-worth clients.",
    solution: "Crafted a bespoke, minimalist digital gallery with smooth micro-interactions that established immediate prestige and closed high-ticket villa projects."
  },
  {
    id: "cloudbill-saas",
    title: "CloudBill – Indian GST Invoicing SaaS",
    category: "saas",
    categoryLabel: "SaaS & Tech",
    tagline: "High-converting B2B SaaS landing page with interactive demo preview",
    description: "Modern landing page for an Indian GST billing and inventory platform. Features interactive pricing tiers, feature comparison matrix, and a 14-day free trial signup flow.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    previewBg: "from-blue-100/50 via-indigo-50 to-white",
    accentColor: "blue",
    stats: {
      metric1: { label: "Sign-up Conversion", value: "+178%" },
      metric2: { label: "PageSpeed Score", value: "99/100" },
      metric3: { label: "Organic Search", value: "Top 3 Rank" }
    },
    tags: ["React", "Tailwind CSS", "Framer Motion", "Next.js"],
    liveFeatures: [
      "Interactive tier toggle (Monthly vs Annual billing with 20% discount badge)",
      "Interactive product feature walkthrough with tabbed screenshots",
      "GST compliance guarantee badges and security trust seals",
      "Fast 2-field trial signup that reduced friction by 60%"
    ],
    challenge: "The software was powerful, but the existing landing page had confusing technical jargon and a poor 1.8% visitor-to-signup conversion rate.",
    solution: "Rebuilt the entire landing page around clear business benefits, visual feature gifs, and transparent pricing in ₹, lifting signups to 4.9%."
  },
  {
    id: "kavya-legal",
    title: "Kavya & Associates – Corporate Law",
    category: "corporate",
    categoryLabel: "Corporate & Law",
    tagline: "Authoritative law firm portal with practice area guides and consultation booking",
    description: "A prestigious corporate law firm website built to convey reliability, confidentiality, and deep domain expertise. Designed with clean typography and client intake forms.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    previewBg: "from-slate-100 via-indigo-50/30 to-white",
    accentColor: "indigo",
    stats: {
      metric1: { label: "Client Leads", value: "+190%" },
      metric2: { label: "Bounce Rate", value: "28%" },
      metric3: { label: "Consultation Call", value: "< 2 hrs" }
    },
    tags: ["React", "Tailwind CSS", "Secure Forms", "SEO"],
    liveFeatures: [
      "Practice area guides (Startup incorporation, Intellectual Property, Contracts)",
      "Direct WhatsApp and confidential consultation scheduler",
      "Partner bios and verified case study achievements",
      "Strict GDPR / privacy compliance standards"
    ],
    challenge: "The firm was relying on word-of-mouth and had an outdated website that failed to project authority to startup founders.",
    solution: "Created an authoritative, clean legal portal that simplified legal services, making it easy for founders to book discovery consultations."
  }
];

export const portfolioCategories = [
  { id: "all", label: "All Projects" },
  { id: "corporate", label: "Corporate & Business" },
  { id: "saas", label: "Web Apps & AI" },
  { id: "restaurant", label: "Café & Hospitality" },
  { id: "healthcare", label: "Clinics & Doctors" },
  { id: "portfolio", label: "Architecture & Studios" }
];

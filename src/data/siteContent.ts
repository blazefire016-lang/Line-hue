export const siteContent = {
  appName: "Line & Hue",
  tagline: "Custom anime sketches, logos & art commissions.",
  description:
    "From anime character art and original designs to clean vector logos — I craft custom artwork that fits your style and story.",
  primaryCta: "Book a commission",
  secondaryCta: "See packages",

  artist: {
    name: "Blaze",
    title: "Custom anime sketch & logo artist",
    bio: "Specializing in anime-style character art, custom logos, and original illustrations. Whether you need a striking avatar for your stream, a logo for your brand, or a full character sheet for your project — every commission starts with understanding what you're envisioning.",
    avatar: "",
    location: "Remote",
  },

  packages: [
    {
      id: "logo",
      name: "Logo Design",
      price: 5,
      currency: "USD",
      description: "Custom vector logo tailored to your brand — anime-inspired or clean modern style.",
      delivery: "5–8 days",
      size: "Vector (SVG / AI / EPS)",
      revisions: 3,
      features: [
        "Vector format (SVG, AI, EPS)",
        "Full color palette exploration",
        "Commercial use + trademark rights",
        "Source files included",
        "Social media kit included",
      ],
    },
    {
      id: "sketch",
      name: "Custom Anime Sketch (Digital NFT)",
      price: 15,
      currency: "USD",
      description: "Clean black-and-white anime sketch delivered as a digital NFT — perfect for collectors, profile pics, and character concepts.",
      delivery: "2 days",
      size: "High-res digital (NFT-ready)",
      revisions: 1,
      features: [
        "High-res digital scan (2400+ px)",
        "Clean lineart, grayscale",
        "NFT-compatible format",
        "Blockchain-ready metadata",
        "Personal use",
      ],
    },
    {
      id: "art",
      name: "Custom Anime Art (Physical Copy)",
      price: 20,
      currency: "USD",
      description: "Detailed anime-style art delivered as a physical print — signed, framed-ready, and shipped to your door.",
      delivery: "4–5 days",
      size: '8.5" × 11" print',
      revisions: 2,
      features: [
        "Full-detail inked illustration",
        "High-quality print on premium paper",
        "Signed by the artist",
        "Shipped in protective packaging",
        "Digital copy included",
      ],
    },
  ],

  process: [
    {
      step: 1,
      title: "Share your idea",
      description:
        "Tell me what you need — character refs, mood boards, logo concepts, or just a description. I'll ask the right questions to nail the direction.",
    },
    {
      step: 2,
      title: "Roughs & revisions",
      description:
        "I'll send initial sketches or logo concepts. You pick what works, and I refine until it's exactly right.",
    },
    {
      step: 3,
      title: "Final delivery",
      description:
        "Once approved, I finish and deliver high-res files or ship your physical print. You get full usage rights with every package.",
    },
  ],

  faq: [
    {
      q: "What art styles do you do?",
      a: "I specialize in anime and manga-inspired illustration, cel-shaded character art, and clean vector logos. I can match existing anime styles or create an original look for your project.",
    },
    {
      q: "Can you design a logo for my brand?",
      a: "Absolutely! The Logo Design package covers custom vector logos — mascot-style, typographic, or emblem. I'll explore color palettes and deliver editable source files ready for web, print, and merchandise.",
    },
    {
      q: "What's the difference between the Digital NFT and Physical Copy?",
      a: "The Digital NFT package delivers a high-res grayscale sketch with blockchain-ready metadata — perfect for collectors and digital display. The Physical Copy is a fully inked illustration printed on premium paper, signed, and shipped to you. Both include a digital copy.",
    },
    {
      q: "How do I receive my commission?",
      a: "Digital files are delivered via email or Google Drive in high-resolution PNG format. Physical prints are shipped in protective packaging with tracking included.",
    },
    {
      q: "Can I use the art commercially?",
      a: "The Logo Design package includes full commercial and trademark rights. Anime sketch and art packages include personal use rights — commercial licensing can be discussed for an additional fee.",
    },
    {
      q: "How do revisions work?",
      a: "Each package includes revision rounds during the sketch/concept phase. Minor tweaks after final delivery are free; major reworks are quoted separately.",
    },
    {
      q: "What about payment?",
      a: "I send a secure invoice via Stripe. A 50% deposit is required to start, with the balance due on final delivery.",
    },
  ],
};

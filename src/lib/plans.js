export const PLAN_PRICE_RUPEES = 299;
export const PLAN_PRICE_PAISE = PLAN_PRICE_RUPEES * 100;

// Pricing plans. Yahan se price/features aasaani se badal sakte ho.
export const plans = [
  {
    id: "basic",
    name: "Basic",
    price: 49,
    period: "one-time",
    tagline: "Ek exam ke notes",
    features: [
      "1 exam ka full syllabus",
      "Study notes PDF",
      "Section-wise strategy",
    ],
    highlighted: false,
  },
  {
    id: "popular",
    name: "Popular",
    price: 149,
    period: "one-time",
    tagline: "Notes + Mock tests",
    features: [
      "1 exam ka full syllabus",
      "Detailed study notes",
      "Full mock tests + answer key",
      "GK / Current Affairs capsule",
    ],
    highlighted: true,
  },
  {
    id: "premium",
    name: "All-Access",
    price: PLAN_PRICE_RUPEES,
    period: "one-time",
    tagline: "Sabhi exams unlock",
    features: [
      "SABHI exams ka syllabus + notes",
      "All mock tests",
      "GK capsule + study plans",
      "Future updates included",
    ],
    highlighted: false,
  },
];

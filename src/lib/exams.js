// Central exam database.
// Naye exam add karne ke liye is array me ek naya object daalo — pages apne aap ban jayenge.

export const categories = [
  { id: "ssc", name: "SSC", full: "Staff Selection Commission" },
  { id: "railway", name: "Railway", full: "Railway Recruitment Board" },
  { id: "banking", name: "Banking", full: "IBPS / SBI / RBI" },
  { id: "defence", name: "Defence", full: "Defence & Police" },
  { id: "teaching", name: "Teaching", full: "Teaching Exams" },
  { id: "state", name: "State PSC", full: "State Public Service" },
];

export const exams = [
  {
    slug: "ssc-cgl",
    category: "ssc",
    name: "SSC CGL",
    fullName: "SSC Combined Graduate Level",
    icon: "📊",
    level: "Graduate",
    popularity: 5,
    applicants: "~28.5 lakh",
    highlights: [
      "Notification: ~May 2026",
      "Tier 1 Exam: Sep–Oct 2026",
      "Tier 1: 100 Q / 200 marks / 60 min",
      "Negative marking: 0.50",
    ],
    summary:
      "India ka sabse popular graduate-level exam. Group B & C posts ke liye — Income Tax, Audit, Assistant Section Officer aur bahut kuch.",
    pattern: [
      { section: "General Intelligence & Reasoning", q: 25, marks: 50 },
      { section: "General Awareness", q: 25, marks: 50 },
      { section: "Quantitative Aptitude", q: 25, marks: 50 },
      { section: "English Comprehension", q: 25, marks: 50 },
    ],
    subjects: ["Reasoning", "General Awareness", "Quantitative Aptitude", "English"],
    hasPremium: true,
  },
  {
    slug: "ssc-chsl",
    category: "ssc",
    name: "SSC CHSL",
    fullName: "SSC Combined Higher Secondary Level",
    icon: "📝",
    level: "12th Pass",
    popularity: 5,
    applicants: "Lakhs",
    highlights: [
      "12th pass eligible",
      "Tier 1 & Tier 2 (CBT)",
      "LDC, DEO, Postal Assistant posts",
    ],
    summary:
      "Class 12 ke baad government job ka sabse aasaan raasta. Data entry, clerk aur postal posts ke liye.",
    pattern: [
      { section: "General Intelligence", q: 25, marks: 50 },
      { section: "General Awareness", q: 25, marks: 50 },
      { section: "Quantitative Aptitude", q: 25, marks: 50 },
      { section: "English Language", q: 25, marks: 50 },
    ],
    subjects: ["Reasoning", "General Awareness", "Quantitative Aptitude", "English"],
    hasPremium: true,
  },
  {
    slug: "ssc-mts",
    category: "ssc",
    name: "SSC MTS",
    fullName: "SSC Multi Tasking Staff",
    icon: "🗂️",
    level: "10th Pass",
    popularity: 4,
    applicants: "Lakhs",
    highlights: ["10th pass eligible", "Non-technical Group C posts", "CBT based"],
    summary:
      "10th pass candidates ke liye entry-level central government job. Peon, MTS aur Havaldar posts.",
    pattern: [
      { section: "Numerical & Mathematical Ability", q: 20, marks: 60 },
      { section: "Reasoning & Problem Solving", q: 20, marks: 60 },
      { section: "General Awareness", q: 25, marks: 75 },
      { section: "English Language", q: 25, marks: 75 },
    ],
    subjects: ["Reasoning", "General Awareness", "Numerical Ability", "English"],
    hasPremium: true,
  },
  {
    slug: "rrb-ntpc",
    category: "railway",
    name: "RRB NTPC",
    fullName: "Railway Non-Technical Popular Categories",
    icon: "🚆",
    level: "12th / Graduate",
    popularity: 5,
    applicants: "Crores apply",
    highlights: [
      "Station Master, Clerk, Typist posts",
      "CBT 1 & CBT 2",
      "Huge vacancies",
    ],
    summary:
      "Railway ka sabse bada non-technical exam. Ticket clerk se station master tak ke posts.",
    pattern: [
      { section: "General Awareness", q: 40, marks: 40 },
      { section: "Mathematics", q: 30, marks: 30 },
      { section: "General Intelligence & Reasoning", q: 30, marks: 30 },
    ],
    subjects: ["General Awareness", "Mathematics", "Reasoning"],
    hasPremium: true,
  },
  {
    slug: "rrb-group-d",
    category: "railway",
    name: "RRB Group D",
    fullName: "Railway Group D (Level 1)",
    icon: "🛤️",
    level: "10th Pass",
    popularity: 5,
    applicants: "Crores apply",
    highlights: ["10th / ITI eligible", "Track Maintainer, Pointsman posts", "Single CBT + PET"],
    summary:
      "Railway me entry-level job ka sabse popular raasta. Lakhs of vacancies har cycle me.",
    pattern: [
      { section: "General Science", q: 25, marks: 25 },
      { section: "Mathematics", q: 25, marks: 25 },
      { section: "General Intelligence & Reasoning", q: 30, marks: 30 },
      { section: "General Awareness & Current Affairs", q: 20, marks: 20 },
    ],
    subjects: ["General Science", "Mathematics", "Reasoning", "General Awareness"],
    hasPremium: true,
  },
  {
    slug: "ibps-po",
    category: "banking",
    name: "IBPS PO",
    fullName: "IBPS Probationary Officer",
    icon: "🏦",
    level: "Graduate",
    popularity: 5,
    applicants: "Lakhs",
    highlights: ["Prelims + Mains + Interview", "Officer-level banking job", "11 public banks"],
    summary:
      "Public sector banks me officer banne ka raasta. Prelims, Mains aur interview ke through selection.",
    pattern: [
      { section: "English Language", q: 30, marks: 30 },
      { section: "Quantitative Aptitude", q: 35, marks: 35 },
      { section: "Reasoning Ability", q: 35, marks: 35 },
    ],
    subjects: ["English", "Quantitative Aptitude", "Reasoning"],
    hasPremium: true,
  },
  {
    slug: "ibps-clerk",
    category: "banking",
    name: "IBPS Clerk",
    fullName: "IBPS Clerk (Clerical Cadre)",
    icon: "💳",
    level: "Graduate",
    popularity: 5,
    applicants: "Lakhs",
    highlights: ["Prelims + Mains", "Clerical posts in public banks", "No interview"],
    summary:
      "Banking sector me clerical job ka sabse popular exam. Graduate freshers ke liye best entry point.",
    pattern: [
      { section: "English Language", q: 30, marks: 30 },
      { section: "Numerical Ability", q: 35, marks: 35 },
      { section: "Reasoning Ability", q: 35, marks: 35 },
    ],
    subjects: ["English", "Numerical Ability", "Reasoning"],
    hasPremium: true,
  },
  {
    slug: "sbi-po",
    category: "banking",
    name: "SBI PO",
    fullName: "State Bank of India Probationary Officer",
    icon: "🏛️",
    level: "Graduate",
    popularity: 5,
    applicants: "Lakhs",
    highlights: ["Prelims + Mains + Interview", "India's largest bank", "Prestigious officer role"],
    summary:
      "SBI me probationary officer banne ka raasta — banking ka sabse prestigious exam mana jaata hai.",
    pattern: [
      { section: "English Language", q: 30, marks: 30 },
      { section: "Quantitative Aptitude", q: 35, marks: 35 },
      { section: "Reasoning Ability", q: 35, marks: 35 },
    ],
    subjects: ["English", "Quantitative Aptitude", "Reasoning"],
    hasPremium: true,
  },
];

export function getExam(slug) {
  return exams.find((e) => e.slug === slug);
}

export function getExamsByCategory(categoryId) {
  return exams.filter((e) => e.category === categoryId);
}

export function getCategory(id) {
  return categories.find((c) => c.id === id);
}

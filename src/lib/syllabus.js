// Detailed syllabus content keyed by exam slug.
// Free preview + premium-locked topics. Naye exam ka detailed syllabus yahan add karo.

export const syllabusData = {
  "ssc-cgl": {
    reasoning: {
      title: "General Intelligence & Reasoning",
      note:
        "Verbal + Non-Verbal dono. Sabse scoring section — sahi practice se 25/25 possible.",
      freeTopics: [
        {
          name: "Analogy (Similarity)",
          weight: "3–4 Qs",
          detail:
            "Semantic, Symbolic/Number, Figural aur Letter analogy. Do cheezon ka relation samajh kar apply karna.",
        },
        {
          name: "Classification (Odd One Out)",
          weight: "2–3 Qs",
          detail:
            "Semantic, Number aur Figural classification. Group me se alag element dhoondhna.",
        },
        {
          name: "Series",
          weight: "3–4 Qs",
          detail: "Number, Letter, Alphanumeric aur Figural series ka missing/next term.",
        },
      ],
      premiumTopics: [
        "Coding–Decoding (letter/number/symbol/conditional)",
        "Blood Relations (family tree + coded)",
        "Direction Sense",
        "Syllogism & Venn Diagrams",
        "Order & Ranking",
        "Statement–Conclusion / Critical Thinking",
        "Non-Verbal: Mirror & Water Image",
        "Non-Verbal: Paper Folding & Punched Hole",
        "Non-Verbal: Embedded & Completion of Figures",
        "Cubes & Dice, Counting of Figures",
        "Clerical: Indexing, Address & Date-City Matching",
      ],
    },
    generalAwareness: {
      title: "General Awareness",
      note: "Sabse tez section — padha hai to seconds me answer.",
      freeTopics: [
        { name: "History", weight: "2–3 Qs", detail: "Ancient, Medieval, Modern + freedom struggle." },
        { name: "Polity", weight: "2–3 Qs", detail: "Constitution, Fundamental Rights, Parliament." },
        { name: "Geography", weight: "2–3 Qs", detail: "India + World physical geography." },
      ],
      premiumTopics: [
        "General Science (Physics, Chemistry, Biology)",
        "Economics & Banking basics",
        "Static GK (books, awards, dances, sports)",
        "Current Affairs (last 6–8 months)",
      ],
    },
    quant: {
      title: "Quantitative Aptitude",
      note: "Time leta hai par high scoring. Basics pakka karo.",
      freeTopics: [
        { name: "Percentage & Ratio", weight: "3–4 Qs", detail: "Har topic ki foundation." },
        { name: "Profit & Loss", weight: "2–3 Qs", detail: "Discount, marked price included." },
        { name: "Average & Number System", weight: "2–3 Qs", detail: "Basic scoring topics." },
      ],
      premiumTopics: [
        "Simple & Compound Interest",
        "Time & Work, Pipes & Cisterns",
        "Time, Speed & Distance",
        "Algebra, Geometry, Trigonometry",
        "Mensuration",
        "Data Interpretation (graphs & tables)",
      ],
    },
    english: {
      title: "English Comprehension",
      note: "Rules-based — bina background wale bhi crack kar sakte hain.",
      freeTopics: [
        { name: "Synonyms & Antonyms", weight: "2–3 Qs", detail: "Vocabulary base." },
        { name: "Fill in the Blanks", weight: "2–3 Qs", detail: "Grammar + vocabulary." },
        { name: "Spelling & Idioms", weight: "2–3 Qs", detail: "Ratt-based scoring." },
      ],
      premiumTopics: [
        "Reading Comprehension",
        "Error Spotting & Sentence Improvement",
        "One Word Substitution",
        "Active–Passive Voice",
        "Direct–Indirect Speech",
        "Cloze Test",
      ],
    },
  },
};

export function getSyllabus(slug) {
  return syllabusData[slug] || null;
}

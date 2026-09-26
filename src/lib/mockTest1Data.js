export const mockTest1Meta = {
  title: "SSC CGL Mock Test 1",
  exam: "SSC CGL (Tier 1)",
  paperSource: "SSC CGL Tier 1 Official Question Paper (12 Sep 2025 Shift-1)",
  durationMinutes: 120,
  durationSeconds: 7200,
  totalQuestions: 100,
  totalMarks: 200,
  correctMark: 2.0,
  wrongPenalty: 0.5,
  sections: [
    { id: "reasoning", name: "Part-A: Reasoning", count: 25, startQ: 1, endQ: 25 },
    { id: "ga", name: "Part-B: General Awareness", count: 25, startQ: 26, endQ: 50 },
    { id: "quant", name: "Part-C: Quantitative Aptitude", count: 25, startQ: 51, endQ: 75 },
    { id: "english", name: "Part-D: English Comprehension", count: 25, startQ: 76, endQ: 100 },
  ]
};

export const mockTest1Questions = [
  {
    "id": 1,
    "section": "reasoning",
    "sectionName": "General Intelligence & Reasoning",
    "q_en": "In the following question, select the related word from the given alternatives.\nWatt : Power :: Pascal : ?",
    "q_hi": "निम्नलिखित प्रश्न में दिए गए विकल्पों में से संबंधित शब्द का चयन कीजिए।\nवाट : शक्ति :: पास्कल : ?",
    "options": [
      "Energy / ऊर्जा",
      "Temperature / तापमान",
      "Pressure / दबाव",
      "Force / बल"
    ],
    "answer": 2,
    "explanation": "Watt is the SI unit of Power. Similarly, Pascal is the SI unit of Pressure. (Energy is measured in Joules, Temperature in Kelvin/Celsius, Force in Newtons)."
  },
  {
    "id": 2,
    "section": "reasoning",
    "sectionName": "General Intelligence & Reasoning",
    "q_en": "In the following question, select the related word from the given alternatives.\nMekong : Tibet :: Amazon : ?",
    "q_hi": "निम्नलिखित प्रश्न में दिए गए विकल्पों में से संबंधित शब्द का चयन कीजिए।\nमेकांग : तिब्बत :: अमेज़न : ?",
    "options": [
      "Chile / चिली",
      "Peru / पेरू",
      "Colombia / कोलंबिया",
      "Ecuador / इक्वेडोर"
    ],
    "answer": 1,
    "explanation": "The Mekong River originates in the Tibetan Plateau (Tibet). Similarly, the Amazon River originates in the Peruvian Andes (Peru)."
  },
  {
    "id": 3,
    "section": "reasoning",
    "sectionName": "General Intelligence & Reasoning",
    "q_en": "Select the letter-cluster from among the given options that can replace the question mark (?) in the following series.\nCGK, GKO, KOS, OSW, ?",
    "q_hi": "दिए गए विकल्पों में से उस अक्षर-समूह का चयन करें जो निम्नलिखित श्रृंखला में प्रश्न चिह्न (?) के स्थान पर आ सकता है।\nCGK, GKO, KOS, OSW, ?",
    "options": [
      "SDA",
      "KNB",
      "SWA",
      "KJH"
    ],
    "answer": 2,
    "explanation": "Analyzing the positional values of each letter (+4 progression):\n1st letter: C(3) + 4 = G(7) + 4 = K(11) + 4 = O(15) + 4 = S(19)\n2nd letter: G(7) + 4 = K(11) + 4 = O(15) + 4 = S(19) + 4 = W(23)\n3rd letter: K(11) + 4 = O(15) + 4 = S(19) + 4 = W(23) + 4 = A(1/27)\nHence, the next cluster is SWA."
  },
  {
    "id": 4,
    "section": "reasoning",
    "sectionName": "General Intelligence & Reasoning",
    "q_en": "Select the letter-cluster from among the given options that can replace the question mark (?) in the following series.\nMIN, NJM, OKL, PLK, ?",
    "q_hi": "दिए गए विकल्पों में से उस अक्षर-समूह का चयन करें जो निम्नलिखित श्रृंखला में प्रश्न चिह्न (?) को प्रतिस्थापित कर सके।\nMIN, NJM, OKL, PLK, ?",
    "options": [
      "QWS",
      "HGF",
      "QMJ",
      "UJH"
    ],
    "answer": 2,
    "explanation": "Letter pattern:\n1st letter: M(13) + 1 = N(14) + 1 = O(15) + 1 = P(16) + 1 = Q(17)\n2nd letter: I(9) + 1 = J(10) + 1 = K(11) + 1 = L(12) + 1 = M(13)\n3rd letter: N(14) - 1 = M(13) - 1 = L(12) - 1 = K(11) - 1 = J(10)\nHence, the missing term is QMJ."
  },
  {
    "id": 5,
    "section": "reasoning",
    "sectionName": "General Intelligence & Reasoning",
    "q_en": "Select the letter-cluster from among the given options that can replace the question mark (?) in the following series.\nBRF, EUH, HXJ, KAL, ?",
    "q_hi": "दिए गए विकल्पों में से उस अक्षर-समूह का चयन करें जो निम्नलिखित श्रृंखला में प्रश्न चिह्न (?) को प्रतिस्थापित कर सके।\nBRF, EUH, HXJ, KAL, ?",
    "options": [
      "NMB",
      "NKH",
      "NHG",
      "NDN"
    ],
    "answer": 3,
    "explanation": "Pattern:\n1st letter: B(2) + 3 = E(5) + 3 = H(8) + 3 = K(11) + 3 = N(14)\n2nd letter: R(18) + 3 = U(21) + 3 = X(24) + 3 = A(27/1) + 3 = D(4)\n3rd letter: F(6) + 2 = H(8) + 2 = J(10) + 2 = L(12) + 2 = N(14)\nTherefore, the next cluster is NDN."
  },
  {
    "id": 6,
    "section": "reasoning",
    "sectionName": "General Intelligence & Reasoning",
    "q_en": "Select the letter-cluster from among the given options that can replace the question mark (?) in the following series:\nWZWT, WVOH, WRGV, WNYJ, ?",
    "q_hi": "दिए गए विकल्पों में से उस अक्षर-समूह का चयन करें जो निम्नलिखित श्रृंखला में प्रश्न चिह्न (?) को प्रतिस्थापित कर सके:\nWZWT, WVOH, WRGV, WNYJ, ?",
    "options": [
      "WJQX",
      "WJQW",
      "WHPX",
      "WJPX"
    ],
    "answer": 0,
    "explanation": "Pattern:\n1st letter: Constant 'W'\n2nd letter: Z(26) - 4 = V(22) - 4 = R(18) - 4 = N(14) - 4 = J(10)\n3rd letter: W(23) - 8 = O(15) - 8 = G(7) - 8 = Y(25) - 8 = Q(17)\n4th letter: T(20) - 12 = H(8) - 12 = V(22) - 12 = J(10) - 12 = X(24)\nResult: WJQX."
  },
  {
    "id": 7,
    "section": "reasoning",
    "sectionName": "General Intelligence & Reasoning",
    "q_en": "Select the letter-cluster from among the given options that can replace the question mark (?) in the following series:\nMCFI, NEKP, OGPW, PIUD, ?",
    "q_hi": "दिए गए विकल्पों में से उस अक्षर-समूह का चयन करें जो निम्नलिखित श्रृंखला में प्रश्न चिह्न (?) को प्रतिस्थापित कर सके:\nMCFI, NEKP, OGPW, PIUD, ?",
    "options": [
      "NKYD",
      "QLYL",
      "QKZK",
      "QKZL"
    ],
    "answer": 2,
    "explanation": "Pattern:\n1st letter: M(13) + 1 = N(14) + 1 = O(15) + 1 = P(16) + 1 = Q(17)\n2nd letter: C(3) + 2 = E(5) + 2 = G(7) + 2 = I(9) + 2 = K(11)\n3rd letter: F(6) + 5 = K(11) + 5 = P(16) + 5 = U(21) + 5 = Z(26)\n4th letter: I(9) + 7 = P(16) + 7 = W(23) + 7 = D(4/30) + 7 = K(11)\nResult: QKZK."
  },
  {
    "id": 8,
    "section": "reasoning",
    "sectionName": "General Intelligence & Reasoning",
    "q_en": "What comes next: 3, 12, 7, 16, 11, 20, 15, ?",
    "q_hi": "इसके बाद क्या आएगा: 3, 12, 7, 16, 11, 20, 15, ?",
    "options": [
      "16",
      "24",
      "14",
      "18"
    ],
    "answer": 1,
    "explanation": "This is an alternating series:\nSeries 1 (odd positions): 3, 7, 11, 15 (+4 each step)\nSeries 2 (even positions): 12, 16, 20, ? (+4 each step)\nNext term is in Series 2: 20 + 4 = 24."
  },
  {
    "id": 9,
    "section": "reasoning",
    "sectionName": "General Intelligence & Reasoning",
    "q_en": "Each of the letters in the word STUDENT is arranged in alphabetical order. How many letters are there in the English alphabetical series between the letter that is second from the left and the one that is fourth from the right in the new letter-cluster formed?",
    "q_hi": "शब्द STUDENT में प्रत्येक अक्षर को वर्णानुक्रम में व्यवस्थित किया गया है। नए अक्षर-समूह में बाएँ से दूसरे अक्षर और दाएँ से चौथे अक्षर के बीच अंग्रेज़ी वर्णमाला श्रृंखला में कितने अक्षर हैं?",
    "options": [
      "17",
      "13",
      "11",
      "15"
    ],
    "answer": 1,
    "explanation": "1. Word: STUDENT (7 letters)\n2. Arranging in alphabetical order: D, E, N, S, T, T, U\n3. Second letter from left = E (position 5)\n4. Fourth letter from right = S (position 19)\n5. Number of English letters strictly between E and S = (19 - 5) - 1 = 13."
  },
  {
    "id": 10,
    "section": "reasoning",
    "sectionName": "General Intelligence & Reasoning",
    "q_en": "Which of the following addresses are identical to each other:\n1. Arjun Mehta A-101, Emerald Towers, Surat, 395001\n2. Arjun Mehta A-101, Emerald Tower, Surat , 395001\n3. Arjun M. A-101, Emerald Tower, Surat , 395001\n4. Arjun Mehta A-101, Emerald Tower, Surat , 395001",
    "q_hi": "निम्नलिखित में से कौन से पते एक जैसे हैं:\n1. अर्जुन मेहता, ए-101, एमराल्ड टावर्स, सूरत, 395001\n2. अर्जुन मेहता, ए-101, एमराल्ड टावर, सूरत, 395001\n3. अर्जुन एम., ए-101, एमराल्ड टावर, सूरत, 395001\n4. अर्जुन मेहता, ए-101, एमराल्ड टावर, सूरत, 395001",
    "options": [
      "1 and 2",
      "1 and 3",
      "2 and 4",
      "3 and 4"
    ],
    "answer": 2,
    "explanation": "Comparing character-by-character:\n- Address 1 has 'Emerald Towers' (plural).\n- Address 3 has 'Arjun M.' instead of 'Arjun Mehta'.\n- Address 2 and Address 4 both contain 'Arjun Mehta A-101, Emerald Tower, Surat , 395001' with exact character match."
  },
  {
    "id": 11,
    "section": "reasoning",
    "sectionName": "General Intelligence & Reasoning",
    "q_en": "Which of the following is/are identical to the address given: Meenal Gupta 102, Silver Oaks, Sector 12, Noida, 201301\n1. Meenal Gupta 102, Silver Oaks, Sector 12, Noida, 201301\n2. Meenal Gupta 102, Silver Oaks, Sector-12, Noida, 201301\n3. Meenal Gupta 102, Silver Oaks, Sector 12, Noida 201301\n4. Meenal Gupta 102, Silver Oaks, Sector 12, Noida, 201302",
    "q_hi": "निम्नलिखित में से कौन सा/से पते दिए गए पते के समान है/हैं: मीनल गुप्ता 102, सिल्वर ओक्स, सेक्टर 12, नोएडा, 201301\n1. मीनल गुप्ता 102, सिल्वर ओक्स, सेक्टर 12, नोएडा, 201301\n2. मीनल गुप्ता 102, सिल्वर ओक्स, सेक्टर-12, नोएडा, 201301\n3. मीनल गुप्ता 102, सिल्वर ओक्स, सेक्टर 12, नोएडा 201301\n4. मीनल गुप्ता 102, सिल्वर ओक्स, सेक्टर 12, नोएडा, 201302",
    "options": [
      "1 only",
      "3 only",
      "2 only",
      "4 only"
    ],
    "answer": 0,
    "explanation": "Address 1 is an exact character-by-character match to the prompt. Address 2 adds a hyphen ('Sector-12'), Address 3 omits the comma before pincode, and Address 4 has the wrong pincode ('201302')."
  },
  {
    "id": 12,
    "section": "reasoning",
    "sectionName": "General Intelligence & Reasoning",
    "q_en": "Find the option that best completes the analogy.\nAG : IO :: CM : ?",
    "q_hi": "वह विकल्प ज्ञात कीजिए जो सादृश्य को सर्वोत्तम रूप से पूरा करता है।\nAG : IO :: CM : ?",
    "options": [
      "KO",
      "KU",
      "KS",
      "KW"
    ],
    "answer": 1,
    "explanation": "Pattern:\nA(1) + 8 = I(9), and G(7) + 8 = O(15).\nApplying the same +8 shift to CM:\nC(3) + 8 = K(11), and M(13) + 8 = U(21).\nThus, the result is KU."
  },
  {
    "id": 13,
    "section": "reasoning",
    "sectionName": "General Intelligence & Reasoning",
    "q_en": "A is facing North. B is seated second to the right of A. Who is sitting immediately to the left of B?",
    "q_hi": "A उत्तर दिशा की ओर मुँह करके बैठा है। B, A के दाईं ओर दूसरे स्थान पर बैठा है। B के ठीक बाईं ओर कौन बैठा है?",
    "options": [
      "The person seated to the immediate right of A / A के ठीक दाईं ओर बैठा व्यक्ति",
      "The person seated opposite to A / A के विपरीत बैठा व्यक्ति",
      "The person seated to the immediate left of A / A के तत्काल बाईं ओर बैठा व्यक्ति",
      "Cannot be determined / तय नहीं किया जा सकता"
    ],
    "answer": 0,
    "explanation": "Let position of A be 1. Second to the right of A is position 3 (where B is seated). When facing the same direction, immediately to the left of B (position 3) is position 2, which is 'The person seated to the immediate right of A'."
  },
  {
    "id": 14,
    "section": "reasoning",
    "sectionName": "General Intelligence & Reasoning",
    "q_en": "In the following question, the second word is related to the first word by a specific pattern of letter transformation. Identify the same pattern and apply it to the third word to find the correct option that completes the analogy. TIME : VJOG :: WORD : ?",
    "q_hi": "निम्नलिखित प्रश्न में, दूसरा शब्द पहले शब्द से अक्षर परिवर्तन के एक विशिष्ट पैटर्न द्वारा संबंधित है। उसी पैटर्न को पहचानिए और उसे तीसरे शब्द पर लागू करके सही विकल्प चुनिए जो सादृश्य को पूरा करता है। TIME : VJOG :: WORD : ?",
    "options": [
      "YPTF",
      "YQTG",
      "YPSF",
      "ZPSF"
    ],
    "answer": 0,
    "explanation": "Letter transformation:\nT(20) + 2 = V(22)\nI(9) + 1 = J(10)\nM(13) + 2 = O(15)\nE(5) + 2 = G(7)\nApplying (+2, +1, +2, +2) to WORD:\nW(23) + 2 = Y(25)\nO(15) + 1 = P(16)\nR(18) + 2 = T(20)\nD(4) + 2 = F(6)\nHence, the result is YPTF."
  },
  {
    "id": 15,
    "section": "reasoning",
    "sectionName": "General Intelligence & Reasoning",
    "q_en": "In each of the following questions, a specific pattern such as reversal or rearrangement has been applied to the first word to get the second. Apply the same pattern to the third word and find the correct answer from the given options. GNIDAER : READING :: NOITULOS : ?",
    "q_hi": "निम्नलिखित प्रत्येक प्रश्न में, पहले शब्द को दूसरे शब्द में बदलने के लिए एक विशिष्ट पैटर्न, जैसे उलटाव या पुनर्व्यवस्था, लागू किया गया है। यही पैटर्न तीसरे शब्द पर भी लागू कीजिए और दिए गए विकल्पों में से सही उत्तर चुनिए। GNIDAER : READING :: NOITULOS : ?",
    "options": [
      "SOLUTION",
      "SOLUNOIT",
      "NOILOSUT",
      "POLLUTION"
    ],
    "answer": 0,
    "explanation": "GNIDAER spelled in reverse is READING. Similarly, reversing the letters of NOITULOS gives SOLUTION."
  },
  {
    "id": 16,
    "section": "reasoning",
    "sectionName": "General Intelligence & Reasoning",
    "q_en": "In each of the following questions, the first word is coded to form the second word using a specific rearrangement and/or substitution rule. Apply the same rule to the third word to determine the correct corresponding word from the given alternatives.\nAYRRJC : CATTLE :: NCPDCAR : ?",
    "q_hi": "निम्नलिखित प्रत्येक प्रश्न में, पहले शब्द को एक विशिष्ट पुनर्व्यवस्था और/या प्रतिस्थापन नियम का उपयोग करके दूसरे शब्द के रूप में कोडित किया गया है। दिए गए विकल्पों में से सही संगत शब्द ज्ञात करने के लिए यही नियम तीसरे शब्द पर भी लागू कीजिए।\nAYRRJC : CATTLE :: NCPDCAR : ?",
    "options": [
      "SUBJECTS",
      "NEGLECT",
      "PERFECT",
      "OPERATE"
    ],
    "answer": 2,
    "explanation": "Pattern:\nA(+2) = C, Y(+2) = A, R(+2) = T, R(+2) = T, J(+2) = L, C(+2) = E.\nApplying +2 forward shift to NCPDCAR:\nN(+2)=P, C(+2)=E, P(+2)=R, D(+2)=F, C(+2)=E, A(+2)=C, R(+2)=T.\nResult: PERFECT."
  },
  {
    "id": 17,
    "section": "reasoning",
    "sectionName": "General Intelligence & Reasoning",
    "q_en": "Identify the odd one: 2, 3, 5, 7, 11, 13, 17, 20",
    "q_hi": "बेमेल को पहचानें: 2, 3, 5, 7, 11, 13, 17, 20",
    "options": [
      "17",
      "13",
      "20",
      "11"
    ],
    "answer": 2,
    "explanation": "All numbers in the given list (2, 3, 5, 7, 11, 13, 17) are prime numbers, whereas 20 is a composite number."
  },
  {
    "id": 18,
    "section": "reasoning",
    "sectionName": "General Intelligence & Reasoning",
    "q_en": "Which of the following is the odd one out?",
    "q_hi": "निम्नलिखित में से कौन सा विकल्प विषम है?",
    "options": [
      "2, 3, 5",
      "11, 13, 17",
      "4, 6, 8",
      "7, 19, 23"
    ],
    "answer": 2,
    "explanation": "The triplets (2, 3, 5), (11, 13, 17), and (7, 19, 23) all consist entirely of prime numbers. The triplet (4, 6, 8) consists entirely of composite numbers."
  },
  {
    "id": 19,
    "section": "reasoning",
    "sectionName": "General Intelligence & Reasoning",
    "q_en": "Rani said, \"The man in the photo is my mother's son-in-law.\" Who is the man to Rani?",
    "q_hi": "रानी ने कहा, \"फोटो में दिख रहा आदमी मेरी माँ का दामाद है।\" रानी के लिए वह आदमी कौन है?",
    "options": [
      "Husband / पति",
      "Father / पिता",
      "Uncle / चाचा",
      "Cousin / चचेरा"
    ],
    "answer": 0,
    "explanation": "Rani's mother's son-in-law is Rani's husband (assuming single daughter/direct relation indicated by standard options)."
  },
  {
    "id": 20,
    "section": "reasoning",
    "sectionName": "General Intelligence & Reasoning",
    "q_en": "In each of the following questions, a group of three numbers/symbols is given in each option. Identify the group that does NOT follow the same pattern as the others.",
    "q_hi": "निम्नलिखित प्रत्येक प्रश्न में, प्रत्येक विकल्प में तीन संख्याओं/प्रतीकों का एक समूह दिया गया है। उस समूह की पहचान कीजिए जो अन्य के समान स्वरूप का पालन नहीं करता है।",
    "options": [
      "K11 : I9 : G7",
      "M13 : K11 : I9",
      "O15 : M13 : K11",
      "N14 : K11 : H8"
    ],
    "answer": 3,
    "explanation": "Options 1, 2, and 3 follow a decrement of 2 in letter positions: (11 -> 9 -> 7), (13 -> 11 -> 9), (15 -> 13 -> 11). Option 4 follows a decrement of 3: (14 -> 11 -> 8), making it the odd one out."
  },
  {
    "id": 21,
    "section": "reasoning",
    "sectionName": "General Intelligence & Reasoning",
    "q_en": "In each of the following questions, a group of three numbers/symbols is given in each option. Identify the group that does NOT follow the same pattern as the others.",
    "q_hi": "निम्नलिखित प्रत्येक प्रश्न में, प्रत्येक विकल्प में तीन संख्याओं/प्रतीकों का एक समूह दिया गया है। उस समूह की पहचान कीजिए जो अन्य के समान स्वरूप का पालन नहीं करता है।",
    "options": [
      "A1@ : B2# : C3$",
      "D4% : E5^ : F6&",
      "G7* : H8( : I9)",
      "J10_ : K11@ : L12@"
    ],
    "answer": 3,
    "explanation": "In options 1, 2, and 3, each segment uses unique and distinct special symbols (@, #, $ / %, ^, & / *, (, )). In option 4, the symbol '@' is duplicated (K11@ and L12@)."
  },
  {
    "id": 22,
    "section": "reasoning",
    "sectionName": "General Intelligence & Reasoning",
    "q_en": "Pointing to a man, a woman said, \"His mother is the only daughter of my father.\" How is the man related to the woman?",
    "q_hi": "एक आदमी की ओर इशारा करते हुए, एक महिला ने कहा, \"उसकी माँ मेरे पिता की इकलौती बेटी है।\" वह आदमी उस महिला से किस प्रकार संबंधित है?",
    "options": [
      "Son / बेटा",
      "Nephew / भतीजा",
      "Cousin / चचेरा",
      "Grandson / पोता"
    ],
    "answer": 0,
    "explanation": "'The only daughter of my father' refers to the woman herself. Since 'his mother' is the woman herself, the man is her Son."
  },
  {
    "id": 23,
    "section": "reasoning",
    "sectionName": "General Intelligence & Reasoning",
    "q_en": "Pointing to a woman, John says, \"She is the wife of my uncle's only son.\" How is the woman related to John?",
    "q_hi": "एक महिला की ओर इशारा करते हुए जॉन कहता है, \"वह मेरे चाचा के इकलौते बेटे की पत्नी है।\" वह महिला जॉन से किस प्रकार संबंधित है?",
    "options": [
      "Sister / बहन",
      "Cousin / चचेरा",
      "Sister-in-law / भाभी",
      "Niece / भतीजी"
    ],
    "answer": 2,
    "explanation": "John's uncle's only son is John's cousin brother. The wife of his cousin is his Sister-in-law (भाभी)."
  },
  {
    "id": 24,
    "section": "reasoning",
    "sectionName": "General Intelligence & Reasoning",
    "q_en": "A man said, \"My mother's husband's only son is the father of your sister's brother.\" How is the man related to you?",
    "q_hi": "एक आदमी ने कहा, \"मेरी माँ के पति का इकलौता बेटा आपकी बहन के भाई का पिता है।\" वह आदमी आपसे किस प्रकार संबंधित है?",
    "options": [
      "Uncle / चाचा",
      "Father / पिता",
      "Grandfather / दादाजी",
      "Brother / भाई"
    ],
    "answer": 1,
    "explanation": "'My mother's husband's only son' = the man himself. 'The father of your sister's brother' = your father. Therefore, the speaker is your Father."
  },
  {
    "id": 25,
    "section": "reasoning",
    "sectionName": "General Intelligence & Reasoning",
    "q_en": "If # = ×, @ = -, $ = +, then evaluate: 9 # 2 @ 3 $ 1",
    "q_hi": "यदि # = ×, @ = -, $ = +, तो मूल्यांकन करें: 9 # 2 @ 3 $ 1",
    "options": [
      "18",
      "14",
      "16",
      "17"
    ],
    "answer": 2,
    "explanation": "Substitute the mathematical operators:\n9 × 2 - 3 + 1\nFollowing BODMAS rule:\n= 18 - 3 + 1\n= 15 + 1\n= 16."
  },
  {
    "id": 26,
    "section": "ga",
    "sectionName": "General Awareness",
    "q_en": "Which of the following features distinguishes the Elephanta Caves from other rock-cut sites of early India?",
    "q_hi": "निम्नलिखित में से कौन सी विशेषता एलीफेंटा गुफाओं को प्रारंभिक भारत के अन्य चट्टान-कट स्थलों से अलग करती है?",
    "options": [
      "They are primarily Buddhist caves with large stupas. / ये मुख्यतः बड़े स्तूपों वाली बौद्ध गुफाएं हैं।",
      "The caves focus on Shaivite themes and feature sculptural depth through light and shadow. / ये गुफाएं शैव विषयवस्तु पर केंद्रित हैं तथा इनमें प्रकाश और छाया के माध्यम से मूर्तिकला की गहराई दिखाई देती है।",
      "They contain a mix of Jain and Vaishnavite depictions in pillar halls. / इनमें स्तंभ कक्षों में जैन और वैष्णव चित्रण का मिश्रण है।",
      "The caves are entirely monolithic structures from the Mauryan period. / ये गुफाएं मौर्य काल की पूर्णतः अखंड संरचनाएं हैं।"
    ],
    "answer": 1,
    "explanation": "Elephanta Caves (located on Elephanta Island, Maharashtra) are dedicated predominantly to Lord Shiva (Shaivism), famously housing the monumental 20-foot high Trimurti sculpture showcasing masterly relief depth and interplay of light and shadow."
  },
  {
    "id": 27,
    "section": "ga",
    "sectionName": "General Awareness",
    "q_en": "Read the statements about the Goncha Festival of Bastar:\n1.) Tupki, a mock gun made of bamboo, uses Goncha fruit as bullets.\n2.) The chariot procession was started by Chalukya rulers.\n3.) Rath Yatra begins on Ashadh Shukla Dashmi and ends on Dutiya.\nWhich of the above statements are correct?",
    "q_hi": "बस्तर के गोंचा उत्सव के बारे में कथन पढ़ें:\n1.) तुपकी, बांस से बनी एक नकली बंदूक है, जिसमें गोलियों के रूप में गोंचा फल का उपयोग किया जाता है।\n2.) रथ यात्रा चालुक्य शासकों द्वारा शुरू की गई थी।\n3.) रथ यात्रा आषाढ़ शुक्ल दशमी को शुरू होती है और द्वितीया पर समाप्त होती है।\nउपर्युक्त कथनों में से कौन सा सही है?",
    "options": [
      "Only 1 and 2 / केवल 1 और 2",
      "Only 2 and 3 / केवल 2 और 3",
      "Only 1 and 3 / केवल 1 और 3",
      "1, 2 and 3 are correct / 1, 2 और 3 सही हैं"
    ],
    "answer": 0,
    "explanation": "Goncha festival is a major tribal festival of Bastar (Chhattisgarh). Tupki (a bamboo pistol) fires Pengu/Goncha fruit during festivities, and the tradition of Rath Yatra was instituted by King Purushottam Dev of the Chalukya/Kakatiya dynasty. Statement 3 is reversed (Rath Yatra starts on Dwitiya and concludes on Dashami)."
  },
  {
    "id": 28,
    "section": "ga",
    "sectionName": "General Awareness",
    "q_en": "In Carnatic music, a laghu with five beats is known as ___ jaati.",
    "q_hi": "कर्नाटक संगीत में, पाँच ताल वाले लघु को ___ जाति के नाम से जाना जाता है।",
    "options": [
      "Tishra / तिशरा",
      "Chaturashra / चतुराश्र",
      "Khanda / खंडा",
      "Mishra / मिश्रा"
    ],
    "answer": 2,
    "explanation": "In Carnatic tala classification, the five fundamental Jaatis based on laghu beats are: Tisra (3 beats), Chatusra (4 beats), Khanda (5 beats), Misra (7 beats), and Sankeerna (9 beats)."
  },
  {
    "id": 29,
    "section": "ga",
    "sectionName": "General Awareness",
    "q_en": "Which of the following statements about Judo is correct?",
    "q_hi": "जूडो के बारे में निम्नलिखित में से कौन सा कथन सही है?",
    "options": [
      "Judo was introduced in 1882 by Jigoro Kano in Japan. / जूडो की शुरुआत 1882 में जापान में जिगोरो कानो द्वारा की गई थी।",
      "India's first National Judo Championship was held in 1970 at Delhi University. / भारत की पहली राष्ट्रीय जूडो चैंपियनशिप 1970 में दिल्ली विश्वविद्यालय में आयोजित की गई थी।",
      "Kalpana Devi won gold at the 2010 Judo World Cup. / कल्पना देवी ने 2010 जूडो विश्व कप में स्वर्ण पदक जीता।",
      "Judo became an Olympic sport in 1965. / जूडो 1965 में ओलंपिक खेल बन गया।"
    ],
    "answer": 0,
    "explanation": "Judo was created in 1882 by Master Jigoro Kano in Tokyo, Japan, deriving from classical Jujutsu with emphasis on maximum efficiency and mutual welfare."
  },
  {
    "id": 30,
    "section": "ga",
    "sectionName": "General Awareness",
    "q_en": "Where and when will the 59th National Cross Country Championships - 2025 be held?",
    "q_hi": "59वीं राष्ट्रीय क्रॉस कंट्री चैंपियनशिप - 2025 कहाँ और कब आयोजित की जाएगी?",
    "options": [
      "10th January 2025, Lucknow, Uttar Pradesh / 10 जनवरी 2025, लखनऊ, उत्तर प्रदेश",
      "12th January 2025, Meerut, Uttar Pradesh / 12 जनवरी 2025, मेरठ, उत्तर प्रदेश",
      "15th January 2025, Kanpur, Uttar Pradesh / 15 जनवरी 2025, कानपुर, उत्तर प्रदेश",
      "12th January 2025, Jaipur, Rajasthan / 12 जनवरी 2025, जयपुर, राजस्थान"
    ],
    "answer": 1,
    "explanation": "The Athletics Federation of India scheduled the 59th National Cross Country Championships for 12th January 2025 at Meerut, Uttar Pradesh."
  },
  {
    "id": 31,
    "section": "ga",
    "sectionName": "General Awareness",
    "q_en": "What is the core structural focus of the 2024 India-UAE Bilateral Investment Treaty (BIT) within India's international investment strategy?",
    "q_hi": "भारत की अंतर्राष्ट्रीय निवेश रणनीति के अंतर्गत 2024 भारत-यूएई द्विपक्षीय निवेश संधि (बीआईटी) का मुख्य संरचनात्मक फोकस क्या है?",
    "options": [
      "Proposes joint sovereign funds and links INR swap with UAE banks. / संयुक्त संप्रभु निधि का प्रस्ताव तथा यूएई बैंकों के साथ आईएनआर स्वैप को जोड़ना।",
      "Focuses on pre-establishment rights and UAE-based arbitration. / पूर्व-स्थापना अधिकारों और यूएई-आधारित मध्यस्थता पर ध्यान केंद्रित करता है।",
      "Assures post-establishment investor confidence via standard and national treatment. / मानक और राष्ट्रीय उपचार के माध्यम से बाद निवेशकों का विश्वास सुनिश्चित करता है।",
      "Aims at GCC-wide tax regulation under India-led digital framework. / इसका उद्देश्य भारत के नेतृत्व वाले डिजिटल ढांचे के तहत जीसीसी-व्यापी कर विनियमन करना है।"
    ],
    "answer": 2,
    "explanation": "The 2024 India-UAE Bilateral Investment Treaty replaces the older 2013 BIPPA, focusing on post-establishment investor protection, national treatment, and fair and equitable treatment while protecting the host state's right to regulate."
  },
  {
    "id": 32,
    "section": "ga",
    "sectionName": "General Awareness",
    "q_en": "Fill in the blanks:\nThe Santosh Trophy 2022-23 final was uniquely held in ___, where Karnataka defeated Meghalaya to win the title after 54 years.",
    "q_hi": "रिक्त स्थान भरें:\nसंतोष ट्रॉफी 2022-23 का फाइनल अनोखे ढंग से ___ में आयोजित किया गया, जहाँ कर्नाटक ने मेघालय को हराकर 54 वर्षों के बाद खिताब जीता।",
    "options": [
      "Dubai / दुबई",
      "Riyadh / रियाद",
      "Doha / दोहा",
      "Muscat / मस्कट"
    ],
    "answer": 1,
    "explanation": "The semi-finals and final of the 76th National Football Championship (Santosh Trophy 2022-23) were held abroad at the King Fahd International Stadium in Riyadh, Saudi Arabia."
  },
  {
    "id": 33,
    "section": "ga",
    "sectionName": "General Awareness",
    "q_en": "Which of the following statements best captures the essence of \"Landscapes of Loss: The Story of an Indian Drought\" by Kavitha Iyer?",
    "q_hi": "निम्नलिखित में से कौन सा कथन कविता अय्यर द्वारा लिखित \"लैंडस्केप्स ऑफ लॉस: द स्टोरी ऑफ एन इंडियन ड्रॉट\" के सार को सबसे अच्छी तरह से दर्शाता है?",
    "options": [
      "A study on drought's human and ecological impacts in India. / भारत में सूखे के मानवीय और पारिस्थितिक प्रभावों पर एक अध्ययन।",
      "A fictional story about a family in a drought-hit area. / सूखा प्रभावित क्षेत्र के एक परिवार की काल्पनिक कहानी।",
      "A history of monsoon patterns and ancient agriculture in India. / भारत में मानसून पैटर्न और प्राचीन कृषि का इतिहास।",
      "A colonial-era policy analysis of water management. / जल प्रबंधन का औपनिवेशिक युग का नीति विश्लेषण।"
    ],
    "answer": 0,
    "explanation": "Kavitha Iyer's book 'Landscapes of Loss' provides a detailed journalistic account documenting the deep human, socio-economic, and ecological devastation caused by recurring droughts in Maharashtra's Marathwada region."
  },
  {
    "id": 34,
    "section": "ga",
    "sectionName": "General Awareness",
    "q_en": "Consider the following statements about glacial landforms:\nStatement 1: Hanging valleys are often found opening into main glacial valleys at higher elevations.\nStatement 2: Spurs of such hanging valleys are frequently truncated into triangular facets.\nWhich of the following Statements is/are Correct?",
    "q_hi": "हिमनदीय भू-आकृतियों के बारे में निम्नलिखित कथनों पर विचार कीजिए:\nकथन 1: लटकती घाटियाँ प्रायः ऊँचे स्थानों पर मुख्य हिमनदीय घाटियों में खुलती हुई पाई जाती हैं।\nकथन 2: ऐसी लटकती घाटियों के स्पर प्रायः त्रिकोणीय फलकों में विभाजित हो जाते हैं।\nनिम्नलिखित में से कौन सा/से कथन सत्य है/हैं?",
    "options": [
      "Only 1 / केवल 1",
      "Only 2 / केवल 2",
      "1 and 2 are correct / 1 और 2 सही हैं",
      "Neither 1 nor 2 are correct / न तो 1 और न ही 2 सही हैं"
    ],
    "answer": 2,
    "explanation": "Both statements are correct. Tributary glaciers with less erosive power form hanging valleys perched above deeply carved main U-shaped valleys, and valley sides feature truncated spurs forming triangular facets due to glacial shearing."
  },
  {
    "id": 35,
    "section": "ga",
    "sectionName": "General Awareness",
    "q_en": "What is the primary function of the Crew Escape System (CES) on ISRO's Human Rated LVM3 (HLVM3) rocket?",
    "q_hi": "इसरो के मानव रेटेड एलवीएम3 (एचएलवीएम3) रॉकेट पर क्रू एस्केप सिस्टम (सीईएस) का प्राथमिक कार्य क्या है?",
    "options": [
      "To guide the crew module into its designated Low Earth Orbit. / क्रू मॉड्यूल को उसकी निर्दिष्ट निम्न पृथ्वी कक्षा में ले जाने के लिए मार्गदर्शन करना।",
      "To eject the crew module to safety during launch emergencies. / प्रक्षेपण आपातस्थिति के दौरान क्रू मॉड्यूल को सुरक्षित स्थान पर निकालना।",
      "To assist in docking the crew module with a space station. / अंतरिक्ष स्टेशन के साथ क्रू मॉड्यूल को डॉक करने में सहायता करना।",
      "To provide thermal shielding during re-entry into Earth's atmosphere. / पृथ्वी के वायुमंडल में पुनः प्रवेश के दौरान तापीय परिरक्षण प्रदान करना।"
    ],
    "answer": 1,
    "explanation": "The Crew Escape System (CES) is designed for Gaganyaan missions to quickly jettison and pull the Crew Module carrying astronauts to a safe distance in the event of an anomaly or abort condition during launch."
  },
  {
    "id": 36,
    "section": "ga",
    "sectionName": "General Awareness",
    "q_en": "Which of the following statements about Justice Sanjiv Khanna is/are true?\n1. He is the 51st Chief Justice of India.\n2. He succeeded Justice D.Y. Chandrachud.\n3. He served as CJI from 2023.",
    "q_hi": "न्यायमूर्ति संजीव खन्ना के बारे में निम्नलिखित में से कौन सा/से कथन सत्य है/हैं?\n1. वे भारत के 51वें मुख्य न्यायाधीश हैं।\n2. उन्होंने न्यायमूर्ति डी.वाई. चंद्रचूड़ का स्थान लिया।\n3. उन्होंने 2023 से मुख्य न्यायाधीश के रूप में कार्य किया।",
    "options": [
      "1 and 2 only / केवल 1 और 2",
      "2 and 3 only / केवल 2 और 3",
      "1 and 3 only / केवल 1 और 3",
      "1, 2, and 3 all are true / 1, 2, और 3 सभी सत्य हैं"
    ],
    "answer": 0,
    "explanation": "Justice Sanjiv Khanna was sworn in as the 51st Chief Justice of India on November 11, 2024, succeeding Justice D.Y. Chandrachud upon his retirement. Statement 3 is false as he became CJI in late 2024, not 2023."
  },
  {
    "id": 37,
    "section": "ga",
    "sectionName": "General Awareness",
    "q_en": "Which of the following objectives are part of the National Population Policy (NPP) 2000?\n1. Providing free and compulsory education up to 14 years of age\n2. Increasing fertility rate to ensure demographic dividend\n3. Reducing infant mortality rate below 30 per 1000 live births\n4. Promoting delayed marriage for girls",
    "q_hi": "निम्नलिखित में से कौन से उद्देश्य राष्ट्रीय जनसंख्या नीति (एनपीपी) 2000 का हिस्सा हैं?\n1. 14 वर्ष की आयु तक निःशुल्क और अनिवार्य शिक्षा प्रदान करना\n2. जनसांख्यिकीय लाभांश सुनिश्चित करने के लिए प्रजनन दर में वृद्धि\n3. शिशु मृत्यु दर को प्रति 1000 जीवित जन्मों पर 30 से कम करना\n4. लड़कियों के लिए देर से विवाह को बढ़ावा देना",
    "options": [
      "Only 1 and 2 are correct / केवल 1 और 2 सही हैं",
      "Only 1 and 3 are correct / केवल 1 और 3 सही हैं",
      "Only 1, 3 and 4 are correct / केवल 1, 3 और 4 सही हैं",
      "1,2,3 and 4 all are correct / 1, 2, 3 और 4 सभी सही हैं"
    ],
    "answer": 2,
    "explanation": "The NPP 2000 aims to achieve replacement level total fertility rate (TFR 2.1), not increase it. Objectives 1 (free schooling up to 14), 3 (IMR < 30/1000), and 4 (delayed marriage for girls preferably after 20) are core tenets."
  },
  {
    "id": 38,
    "section": "ga",
    "sectionName": "General Awareness",
    "q_en": "Which pathway in cellular respiration generates the most ATP?",
    "q_hi": "कोशिकीय श्वसन में कौन सा मार्ग सबसे अधिक एटीपी उत्पन्न करता है?",
    "options": [
      "Glycolysis / ग्लाइकोलाइसिस",
      "Krebs cycle / क्रेब्स चक्र",
      "Electron transport chain / इलेक्ट्रॉन परिवहन श्रृंखला",
      "Fermentation / किण्वन"
    ],
    "answer": 2,
    "explanation": "Oxidative phosphorylation via the Electron Transport Chain (ETC) generates approximately 28 to 34 ATP molecules per glucose molecule, significantly more than Glycolysis (net 2 ATP) or Krebs cycle (2 ATP)."
  },
  {
    "id": 39,
    "section": "ga",
    "sectionName": "General Awareness",
    "q_en": "Arrange the following events in chronological order:\na. Eastern Zonal Council meeting 2022\nb. States Reorganisation Act passed\nc. First Central Zonal Council meeting",
    "q_hi": "निम्नलिखित घटनाओं को कालानुक्रमिक क्रम में व्यवस्थित करें:\na. पूर्वी क्षेत्रीय परिषद की बैठक 2022\nb. राज्य पुनर्गठन अधिनियम पारित\nc. मध्य क्षेत्रीय परिषद की पहली बैठक",
    "options": [
      "b-c-a",
      "c-b-a",
      "a-b-c",
      "b-a-c"
    ],
    "answer": 0,
    "explanation": "Chronology:\n1. States Reorganisation Act passed in 1956 (b).\n2. First Central Zonal Council meeting held in May 1957 (c).\n3. Eastern Zonal Council meeting in Kolkata held in December 2022 (a).\nCorrect sequence: b - c - a."
  },
  {
    "id": 40,
    "section": "ga",
    "sectionName": "General Awareness",
    "q_en": "Which of the following most accurately describes the legal character of the right to property under Article 300A of the Indian Constitution?",
    "q_hi": "निम्नलिखित में से कौन सा कथन भारतीय संविधान के अनुच्छेद 300A के तहत संपत्ति के अधिकार के कानूनी चरित्र का सबसे सटीक वर्णन करता है?",
    "options": [
      "It is a fundamental right that guarantees compensation for all property acquisitions. / यह एक मौलिक अधिकार है जो सभी संपत्ति अधिग्रहण के लिए मुआवजे की गारंटी देता है।",
      "It allows the State to deprive a person of property by any law, even without due process. / यह राज्य को किसी भी कानून द्वारा, यहां तक कि बिना किसी उचित प्रक्रिया के भी, किसी व्यक्ति को उसकी संपत्ति से वंचित करने की अनुमति देता है।",
      "It is a constitutional legal right that permits deprivation only by authority of law. / यह एक संवैधानिक कानूनी अधिकार है जो केवल कानून के प्राधिकार द्वारा ही वंचित करने की अनुमति देता है।",
      "It permits citizens to claim property protection under Article 32 before the Supreme Court. / यह नागरिकों को अनुच्छेद 32 के अंतर्गत सर्वोच्च न्यायालय में संपत्ति संरक्षण का दावा करने की अनुमति देता है।"
    ],
    "answer": 2,
    "explanation": "After the 44th Constitutional Amendment (1978), Right to Property ceased to be a Fundamental Right (Article 31) and was placed under Article 300A as a constitutional legal right stating 'No person shall be deprived of his property save by authority of law'."
  },
  {
    "id": 41,
    "section": "ga",
    "sectionName": "General Awareness",
    "q_en": "For a rigid body, the angular velocity of any particle about a given axis of rotation is:",
    "q_hi": "किसी दृढ़ पिंड के लिए, किसी दिए गए घूर्णन अक्ष के परितः किसी कण का कोणीय वेग है:",
    "options": [
      "Proportional to its distance from the axis / अक्ष से इसकी दूरी के समानुपाती",
      "The same for all particles / सभी कणों के लिए समान",
      "Inversely proportional to its distance from the axis / अक्ष से इसकी दूरी के व्युत्क्रमानुपाती",
      "Always zero / हमेशा शून्य"
    ],
    "answer": 1,
    "explanation": "In a rigid body in pure rotation, all particles rotate through the same angle in a given time interval, meaning angular velocity (ω) is identical for every particle. (Linear velocity v = ωr varies with radius r)."
  },
  {
    "id": 42,
    "section": "ga",
    "sectionName": "General Awareness",
    "q_en": "The Bharatiya Sakshya Adhiniyam (BSA) places emphasis on the use of technology to ensure the authenticity of evidence. This is particularly relevant for:",
    "q_hi": "भारतीय साक्ष्य अधिनियम (बीएसए) साक्ष्य की प्रामाणिकता सुनिश्चित करने के लिए प्रौद्योगिकी के उपयोग पर ज़ोर देता है। यह विशेष रूप से निम्नलिखित के लिए प्रासंगिक है:",
    "options": [
      "Physical exhibits from crime scenes. / अपराध स्थलों से भौतिक प्रदर्शन।",
      "Hand-written diaries. / हस्तलिखित डायरियाँ।",
      "Digital and electronic evidence. / डिजिटल और इलेक्ट्रॉनिक साक्ष्य।",
      "Oral confessions. / मौखिक स्वीकारोक्ति।"
    ],
    "answer": 2,
    "explanation": "The Bharatiya Sakshya Adhiniyam (BSA) 2023 modernizes rules of evidence, treating electronic and digital records as primary evidence on par with physical documents and establishing strict verification standards."
  },
  {
    "id": 43,
    "section": "ga",
    "sectionName": "General Awareness",
    "q_en": "Read the below statements marked as Assertion (A) and Reason (R). Mark the correct options:\nAssertion (A) : The One Nation One Ration Card ensures portability of food grains.\nReason (R) : It uses Aadhaar-enabled biometric authentication.",
    "q_hi": "नीचे दिए गए कथनों को अभिकथन (A) और कारण (R) से चिह्नित करके पढ़िए। सही विकल्पों पर निशान लगाइए:\nअभिकथन (A): एक राष्ट्र एक राशन कार्ड खाद्यान्न की पोर्टेबिलिटी सुनिश्चित करता है।\nकारण (R): यह आधार-सक्षम बायोमेट्रिक प्रमाणीकरण का उपयोग करता है।",
    "options": [
      "Both A and R are true, and R is the correct explanation of A / A और R दोनों सत्य हैं, और R, A का सही स्पष्टीकरण है",
      "Both A and R are true, but R is not the correct explanation of A / A और R दोनों सत्य हैं, लेकिन R, A का सही स्पष्टीकरण नहीं है",
      "A is true, but R is false / A सत्य है, लेकिन R असत्य है",
      "A is false, but R is true / A असत्य है, लेकिन R सत्य है"
    ],
    "answer": 0,
    "explanation": "The ONORC scheme allows NFSA beneficiaries to claim subsidized foodgrains anywhere in India via ePoS devices at Fair Price Shops through Aadhaar biometric authentication."
  },
  {
    "id": 44,
    "section": "ga",
    "sectionName": "General Awareness",
    "q_en": "Cheraw, the bamboo dance performed using crossed bamboo sticks, is a folk dance of which state?",
    "q_hi": "चेराव, बांस की छड़ियों का उपयोग करके किया जाने वाला बांस नृत्य, किस राज्य का लोक नृत्य है?",
    "options": [
      "Mizoram / मिजोरम",
      "Meghalaya / मेघालय",
      "Arunachal Pradesh / अरुणाचल प्रदेश",
      "Sikkim / सिक्किम"
    ],
    "answer": 0,
    "explanation": "Cheraw is the traditional bamboo dance of Mizoram, characterized by dancers stepping in and out between pairs of horizontal bamboo poles clapped together by ground performers."
  },
  {
    "id": 45,
    "section": "ga",
    "sectionName": "General Awareness",
    "q_en": "What is a key factor assessed in the Global Firepower Military Strength Ranking 2025?",
    "q_hi": "ग्लोबल फायरपावर मिलिट्री स्ट्रेंथ रैंकिंग 2025 में मूल्यांकन किया जाने वाला प्रमुख कारक क्या है?",
    "options": [
      "Economic Stability / आर्थिक स्थिरता",
      "Cultural Influence / सांस्कृतिक प्रभाव",
      "Defense Budget / रक्षा बजट",
      "Healthcare Spending / स्वास्थ्य सेवा पर खर्च"
    ],
    "answer": 2,
    "explanation": "Global Firepower (GFP) evaluates over 60 individual parameters to determine a nation's PwrIndx score, wherein Defense Budget, financial capability, military equipment inventory, and logistical diversity play pivotal roles."
  },
  {
    "id": 46,
    "section": "ga",
    "sectionName": "General Awareness",
    "q_en": "Which of the following correctly describes cooperative sector industries?",
    "q_hi": "निम्नलिखित में से कौन सा सहकारी क्षेत्र के उद्योगों का सही वर्णन करता है?",
    "options": [
      "Owned and operated by central government agencies. / केंद्रीय सरकारी एजेंसियों के स्वामित्व और संचालन में।",
      "Operated solely for export purposes. / केवल निर्यात प्रयोजनों के लिए संचालित।",
      "Owned by workers or suppliers sharing profits and losses / लाभ और हानि को साझा करने वाले श्रमिकों या आपूर्तिकर्ताओं के स्वामित्व में",
      "Maintained by foreign companies with Indian partnerships. / भारतीय साझेदारी के साथ विदेशी कंपनियों द्वारा अनुरक्षित।"
    ],
    "answer": 2,
    "explanation": "Cooperative sector industries are owned and operated by the producers, suppliers of raw materials, or workers who pool their resources and share profits/losses proportionately (e.g. Amul, sugar mills in Maharashtra)."
  },
  {
    "id": 47,
    "section": "ga",
    "sectionName": "General Awareness",
    "q_en": "Education is now placed under which list after the 42nd Amendment?",
    "q_hi": "42वें संशोधन के बाद शिक्षा को अब किस सूची में रखा गया है?",
    "options": [
      "Union List / संघ सूची",
      "State List / राज्य सूची",
      "Concurrent List / समवर्ती सूची",
      "Judicial List / न्यायिक सूची"
    ],
    "answer": 2,
    "explanation": "The 42nd Constitutional Amendment Act, 1976 transferred five subjects—including Education, Forests, Weights & Measures, Protection of wild animals/birds, and Administration of Justice—from the State List to the Concurrent List."
  },
  {
    "id": 48,
    "section": "ga",
    "sectionName": "General Awareness",
    "q_en": "What is the main objective of the National Framework for Climate Services (NFCS) launched in 2024?",
    "q_hi": "2024 में शुरू किए गए जलवायु सेवाओं के लिए राष्ट्रीय ढांचे (एनएफसीएस) का मुख्य उद्देश्य क्या है?",
    "options": [
      "To set emission trading targets / उत्सर्जन व्यापार लक्ष्य निर्धारित करना",
      "To regulate groundwater quality / भूजल की गुणवत्ता को विनियमित करने के लिए",
      "To deliver sector-specific climate information services / क्षेत्र-विशिष्ट जलवायु सूचना सेवाएं प्रदान करना",
      "To mandate carbon offsetting in the private sector / निजी क्षेत्र में कार्बन ऑफसेटिंग को अनिवार्य बनाना"
    ],
    "answer": 2,
    "explanation": "Spearheaded by the India Meteorological Department (IMD), NFCS aims to deliver tailored, actionable climate forecasts and hazard warnings to key sectors such as agriculture, water resources, disaster management, health, and energy."
  },
  {
    "id": 49,
    "section": "ga",
    "sectionName": "General Awareness",
    "q_en": "Argon is produced in Earth's crust via?",
    "q_hi": "पृथ्वी की पपड़ी में आर्गन का उत्पादन किसके माध्यम से होता है?",
    "options": [
      "Decay of K-40 / K-40 का क्षय",
      "Volcanoes / ज्वालामुखी",
      "Photosynthesis / प्रकाश संश्लेषण",
      "Cosmic rays / ब्रह्मांडीय किरणें"
    ],
    "answer": 0,
    "explanation": "Argon-40 (^40Ar), the dominant argon isotope in Earth's atmosphere (~0.93%), is generated deep in the crust and mantle via the radioactive decay (electron capture and positron emission) of Potassium-40 (^40K)."
  },
  {
    "id": 50,
    "section": "ga",
    "sectionName": "General Awareness",
    "q_en": "Which of the following is true about Fundamental Rights and DPSPs?",
    "q_hi": "मौलिक अधिकारों और डीपीएसपी के बारे में निम्नलिखित में से कौन सा कथन सत्य है?",
    "options": [
      "Both are justiciable and enforceable by courts / दोनों ही न्यायालयों द्वारा न्यायोचित और प्रवर्तनीय हैं",
      "DPSPs override Fundamental Rights when in conflict / संघर्ष की स्थिति में डीपीएसपी मौलिक अधिकारों को दरकिनार कर देते हैं",
      "Fundamental Rights are justiciable, but DPSPs are not / मौलिक अधिकार न्यायोचित हैं, लेकिन डीपीएसपी नहीं",
      "DPSPs are guaranteed by the Constitution; Fundamental Rights are optional / डीपीएसपी को संविधान द्वारा गारंटी दी गई है; मौलिक अधिकार वैकल्पिक हैं"
    ],
    "answer": 2,
    "explanation": "Fundamental Rights (Part III, Articles 12-35) are enforceable and justiciable in courts via Articles 32 and 226, whereas Directive Principles of State Policy (Part IV, Article 37) are non-justiciable principles intended to guide state policy."
  },
  {
    "id": 51,
    "section": "quant",
    "sectionName": "Quantitative Aptitude",
    "q_en": "Arrange the fractions 5/9, 4/7, 3/5, and 2/3 in ascending order.",
    "q_hi": "भिन्नों को आरोही क्रम में व्यवस्थित करें 5/9, 4/7, 3/5, और 2/3.",
    "options": [
      "3/5, 4/7, 2/3, 5/9",
      "5/9, 4/7, 3/5, 2/3",
      "2/3, 3/5, 4/7, 5/9",
      "4/7, 5/9, 2/3, 3/5"
    ],
    "answer": 1,
    "explanation": "Convert each fraction into decimal form:\n5/9 = 0.555...\n4/7 = 0.571...\n3/5 = 0.600\n2/3 = 0.666...\nComparing decimals: 0.555 < 0.571 < 0.600 < 0.666\nAscending order: 5/9, 4/7, 3/5, 2/3."
  },
  {
    "id": 52,
    "section": "quant",
    "sectionName": "Quantitative Aptitude",
    "q_en": "Simplify: (2 1/2 + 3.6) - 1.9",
    "q_hi": "सरल करें: (2 1/2 + 3.6) - 1.9",
    "options": [
      "4.2",
      "5.2",
      "6.2",
      "7.2"
    ],
    "answer": 0,
    "explanation": "Step 1: Convert mixed fraction to decimal: 2 1/2 = 2.5\nStep 2: Add: 2.5 + 3.6 = 6.1\nStep 3: Subtract: 6.1 - 1.9 = 4.2."
  },
  {
    "id": 53,
    "section": "quant",
    "sectionName": "Quantitative Aptitude",
    "q_en": "Evaluate: 7 1/4 - [ 5/8 ÷ { 1/3 - ( 1/2 × ( 3/4 - 1/4 ) ) } ]",
    "q_hi": "7 1/4 - [ 5/8 ÷ { 1/3 - ( 1/2 × ( 3/4 - 1/4 ) ) } ] का मूल्यांकन करें।",
    "options": [
      "-3 1/4",
      "3 1/4",
      "-2 3/4",
      "2 3/4"
    ],
    "answer": 2,
    "explanation": "Follow BODMAS:\n1. Innermost brackets: (3/4 - 1/4) = 2/4 = 1/2\n2. Multiplication: 1/2 × 1/2 = 1/4\n3. Curly braces: 1/3 - 1/4 = (4 - 3)/12 = 1/12\n4. In exam specification (5/6 ÷ 1/12 = 10, or 29/4 - 40/4 = -11/4 = -2 3/4).\nHence, result = -2 3/4."
  },
  {
    "id": 54,
    "section": "quant",
    "sectionName": "Quantitative Aptitude",
    "q_en": "From a sample of 200 software engineers, determine the ratio of those proficient in Python to those proficient in Java using the given information:\n• Proficient in Python and Java: 50\n• Proficient in Python only: 70\n• Proficient in Java only: 60\n• Proficient in neither language: 20",
    "q_hi": "200 सॉफ्टवेयर इंजीनियरों के नमूने से, दी गई जानकारी का उपयोग करके पायथन में कुशल लोगों और जावा में कुशल लोगों का अनुपात निर्धारित करें:\n• पायथन और जावा में कुशल: 50\n• केवल पायथन में कुशल: 70\n• केवल जावा में कुशल: 60\n• किसी भी भाषा में कुशल नहीं: 20",
    "options": [
      "11:12",
      "12:11",
      "7:6",
      "6:7"
    ],
    "answer": 1,
    "explanation": "1. Total proficient in Python = (Python only) + (Both) = 70 + 50 = 120\n2. Total proficient in Java = (Java only) + (Both) = 60 + 50 = 110\n3. Ratio of Python to Java = 120 : 110 = 12 : 11."
  },
  {
    "id": 55,
    "section": "quant",
    "sectionName": "Quantitative Aptitude",
    "q_en": "Arvind started a business by investing ₹80,000. After 4 months, Bhavin joined with ₹1,20,000. At the end of 8 months from the start, Chandan joined with ₹1,60,000. If the total profit is ₹1,05,000 at the end of the year, find the share of Chandan.",
    "q_hi": "अरविंद ने ₹80,000 निवेश करके एक व्यवसाय शुरू किया। 4 महीने बाद, भाविन ₹1,20,000 के साथ शामिल हो गया। शुरुआत से 8 महीने के अंत में, चंदन ₹1,60,000 के साथ शामिल हो गया। यदि कुल लाभ ₹1,05,000 है, तो चंदन का हिस्सा ज्ञात कीजिए।",
    "options": [
      "₹26,500",
      "₹26,000",
      "₹26,200",
      "₹26,250"
    ],
    "answer": 3,
    "explanation": "Investment × Time period:\n• Arvind: 80,000 × 12 = 9,60,000\n• Bhavin: 1,20,000 × 8 = 9,60,000\n• Chandan: 1,60,000 × 4 = 6,40,000\nRatio of profits = 96 : 96 : 64 = 3 : 3 : 2\nSum of ratio terms = 3 + 3 + 2 = 8\nChandan's share = (2 / 8) × 1,05,000 = 1,05,000 / 4 = ₹26,250."
  },
  {
    "id": 56,
    "section": "quant",
    "sectionName": "Quantitative Aptitude",
    "q_en": "A and B start a business. A invests ₹80,000 for 9 months, B invests ₹1,20,000 for 6 months. What is B's share of a ₹45,000 profit?",
    "q_hi": "A और B एक व्यवसाय शुरू करते हैं। A 9 महीने के लिए ₹80,000 का निवेश करता है, B 6 महीने के लिए ₹1,20,000 का निवेश करता है। ₹45,000 के लाभ में B का हिस्सा क्या है?",
    "options": [
      "₹26,500",
      "₹28,000",
      "₹36,000",
      "₹22,500"
    ],
    "answer": 3,
    "explanation": "Profit sharing ratio = (Investment of A × Time) : (Investment of B × Time)\n= (80,000 × 9) : (1,20,000 × 6)\n= 7,20,000 : 7,20,000 = 1 : 1\nB's share = 45,000 / 2 = ₹22,500."
  },
  {
    "id": 57,
    "section": "quant",
    "sectionName": "Quantitative Aptitude",
    "q_en": "What is the average of all integers between 100 and 250 that are exactly divisible by 11?",
    "q_hi": "100 और 250 के बीच उन सभी पूर्णांकों का औसत क्या है जो 11 से पूर्णतः विभाज्य हैं?",
    "options": [
      "176",
      "186",
      "196",
      "146"
    ],
    "answer": 0,
    "explanation": "Multiples of 11 between 100 and 250 form an Arithmetic Progression (AP):\nFirst term (a) = 110 (11 × 10)\nLast term (l) = 242 (11 × 22)\nFor any AP, the average = (First Term + Last Term) / 2 = (110 + 242) / 2 = 352 / 2 = 176."
  },
  {
    "id": 58,
    "section": "quant",
    "sectionName": "Quantitative Aptitude",
    "q_en": "The average of 15 numbers is 80. The average of the first 6 numbers is 72. The average of the next 6 numbers is 25% more than the average of the first 6 numbers. The 13th number is 8 more than the 15th number, and the 14th number is 10 less than the 15th number. What is the average of the 13th and 14th numbers?",
    "q_hi": "15 संख्याओं का औसत 80 है। पहली 6 संख्याओं का औसत 72 है। अगली 6 संख्याओं का औसत पहली 6 संख्याओं के औसत से 25% अधिक है। 13वीं संख्या 15वीं संख्या से 8 अधिक है, और 14वीं संख्या 15वीं संख्या से 10 कम है। 13वीं और 14वीं संख्याओं का औसत क्या है?",
    "options": [
      "70.89",
      "85",
      "75.67",
      "80.65"
    ],
    "answer": 2,
    "explanation": "1. Sum of all 15 numbers = 15 × 80 = 1200\n2. Sum of first 6 numbers = 6 × 72 = 432\n3. Average of next 6 numbers = 72 + 25% of 72 = 90 => Sum = 6 × 90 = 540\n4. Sum of remaining 3 numbers (13th, 14th, 15th) = 1200 - (432 + 540) = 228\n5. Let 15th number = x => 13th = x + 8, 14th = x - 10\n6. Total: (x + 8) + (x - 10) + x = 228 => 3x - 2 = 228 => 3x = 230 => x = 230/3\n7. Average of 13th and 14th = [(x + 8) + (x - 10)] / 2 = (2x - 2) / 2 = x - 1 = (230/3) - 1 = 227/3 ≈ 75.67."
  },
  {
    "id": 59,
    "section": "quant",
    "sectionName": "Quantitative Aptitude",
    "q_en": "A landlord bought a flat for ₹8,00,000. He wants to earn a 9% annual return on his investment after paying ₹2,000 per month for maintenance. What should be the monthly rent he charges?",
    "q_hi": "एक मकान मालिक ने ₹8,00,000 में एक फ्लैट खरीदा। वह रखरखाव के लिए हर महीने ₹2,000 का भुगतान करने के बाद अपने निवेश पर 9% वार्षिक रिटर्न कमाना चाहता है। उसे हर महीने कितना किराया लेना चाहिए?",
    "options": [
      "₹7,000",
      "₹7,500",
      "₹8,000",
      "₹8,500"
    ],
    "answer": 2,
    "explanation": "1. Annual net return required = 9% of ₹8,00,000 = ₹72,000 per year\n2. Monthly net return required = 72,000 / 12 = ₹6,000\n3. Monthly maintenance expenditure = ₹2,000\n4. Total monthly rent to charge = Net Return + Maintenance = 6,000 + 2,000 = ₹8,000."
  },
  {
    "id": 60,
    "section": "quant",
    "sectionName": "Quantitative Aptitude",
    "q_en": "An amount is said to double in 5 years with compound interest. How many years will it take for the amount to grow to 8 times its original value?",
    "q_hi": "कहा जाता है कि एक राशि चक्रवृद्धि ब्याज के साथ 5 वर्षों में दोगुनी हो जाती है। राशि को अपने मूल मूल्य से 8 गुना बढ़ने में कितने वर्ष लगेंगे?",
    "options": [
      "15",
      "16",
      "17",
      "18"
    ],
    "answer": 0,
    "explanation": "Under compound interest:\nIf sum becomes 2 times in 5 years,\nThen sum becomes 8 times (2^3) in 5 × 3 = 15 years."
  },
  {
    "id": 61,
    "section": "quant",
    "sectionName": "Quantitative Aptitude",
    "q_en": "A sum becomes ₹6,600 in 2 years and ₹7,920 in 3 years at compound interest. What is the original principal?",
    "q_hi": "चक्रवृद्धि ब्याज पर एक धनराशि 2 वर्ष में ₹6,600 तथा 3 वर्ष में ₹7,920 हो जाती है। मूल मूलधन क्या है?",
    "options": [
      "₹4,000.33",
      "₹5,583.33",
      "₹4,583.33",
      "₹6,583.33"
    ],
    "answer": 2,
    "explanation": "1. Interest earned in the 3rd year = 7,920 - 6,600 = ₹1,320\n2. Rate of interest r = (1,320 / 6,600) × 100 = 20% per annum\n3. Multiplier for 2 years = (1 + 0.20)^2 = 1.44\n4. Principal P = 6,600 / 1.44 = ₹4,583.33."
  },
  {
    "id": 62,
    "section": "quant",
    "sectionName": "Quantitative Aptitude",
    "q_en": "Suman purchased 25 liters of milk at ₹45 per liter and another 15 liters of milk at ₹50 per liter. She combined both quantities and then sold the entire mixture at ₹48 per liter. What was her total profit or loss?",
    "q_hi": "सुमन ने 25 लीटर दूध ₹45 प्रति लीटर की दर से और 15 लीटर दूध ₹50 प्रति लीटर की दर से खरीदा। उसने दोनों मात्राओं को मिलाया और फिर पूरे मिश्रण को ₹48 प्रति लीटर की दर से बेचा। उसका कुल लाभ या हानि क्या थी?",
    "options": [
      "Loss of ₹45 / ₹45 का नुकसान",
      "Profit of ₹45 / ₹45 का लाभ",
      "Profit of ₹90 / ₹90 का लाभ",
      "Loss of ₹90 / ₹90 का नुकसान"
    ],
    "answer": 1,
    "explanation": "1. Total Cost Price = (25 × 45) + (15 × 50) = 1125 + 750 = ₹1,875\n2. Total Selling Price = (25 + 15) × 48 = 40 × 48 = ₹1,920\n3. Total Profit = SP - CP = 1920 - 1875 = ₹45 profit."
  },
  {
    "id": 63,
    "section": "quant",
    "sectionName": "Quantitative Aptitude",
    "q_en": "A toy manufacturer produced 1200 toy cars at a total cost of ₹90,000. He donated 200 cars to a charity event. For the rest, he announced a 10% discount on the market price of ₹120 per car. He also offered 2 toy cars free for every 8 toy cars purchased. If all 1200 toy cars were distributed, what is his overall gain or loss percentage?",
    "q_hi": "एक खिलौना निर्माता ने ₹90,000 की कुल लागत से 1200 खिलौना कारें बनाईं। उसने 200 कारें एक चैरिटी कार्यक्रम में दान कर दीं। बाकी के लिए, उसने ₹120 प्रति कार के बाजार मूल्य पर 10% की छूट की घोषणा की। उसने खरीदी गई हर 8 खिलौना कारों के लिए 2 खिलौना कारें मुफ्त देने की भी पेशकश की। यदि सभी 1200 खिलौना कारें वितरित की गईं, तो उसका कुल लाभ या हानि प्रतिशत क्या है?",
    "options": [
      "4% loss / 4% हानि",
      "4% profit / 4% लाभ",
      "5% loss / 5% हानि",
      "5% profit / 5% लाभ"
    ],
    "answer": 0,
    "explanation": "1. Total cost = ₹90,000\n2. Remaining cars to sell = 1200 - 200 = 1000 cars\n3. 'Buy 8 get 2 free' means customer gets 10 cars for price of 8 => paid cars = 1000 × (8/10) = 800 cars\n4. Discounted price per car = 120 - 10% = ₹108\n5. Total Selling Revenue = 800 × 108 = ₹86,400\n6. Loss = 90,000 - 86,400 = ₹3,600\n7. Loss percentage = (3,600 / 90,000) × 100 = 4% loss."
  },
  {
    "id": 64,
    "section": "quant",
    "sectionName": "Quantitative Aptitude",
    "q_en": "A retailer marks an air conditioner 80% above its cost price. He offers a first discount of 25% on the marked price. During a festive offer, an additional discount of 10% is applied on the already discounted price. If the final selling price is ₹15,552, what is the approximate cost price of the air conditioner?",
    "q_hi": "एक खुदरा विक्रेता एक एयर कंडीशनर को उसके लागत मूल्य से 80% अधिक मूल्य पर बेचता है। वह अंकित मूल्य पर 25% की पहली छूट प्रदान करता है। एक त्यौहारी ऑफर के दौरान, पहले से छूट वाले मूल्य पर 10% की अतिरिक्त छूट लागू की जाती है। यदि अंतिम विक्रय मूल्य ₹15,552 है, तो एयर कंडीशनर का अनुमानित लागत मूल्य क्या है?",
    "options": [
      "₹9,000",
      "₹9,200",
      "₹12,800",
      "₹10,000"
    ],
    "answer": 2,
    "explanation": "Let Cost Price = CP\n1. Marked Price (MP) = 1.80 × CP\n2. After 25% discount: SP1 = 1.80 × CP × 0.75 = 1.35 × CP\n3. After additional 10% discount: Final SP = 1.35 × CP × 0.90 = 1.215 × CP\n4. 1.215 × CP = 15,552 => CP = 15,552 / 1.215 = ₹12,800."
  },
  {
    "id": 65,
    "section": "quant",
    "sectionName": "Quantitative Aptitude",
    "q_en": "A 40-liter mixture contains juice and water in the ratio 5:3. How much water (in liters) must be added to this mixture to change the ratio of juice to water to 2:3?",
    "q_hi": "40 लीटर के मिश्रण में जूस और पानी का अनुपात 5:3 है। जूस और पानी का अनुपात 2:3 करने के लिए इस मिश्रण में कितना पानी (लीटर में) मिलाया जाना चाहिए?",
    "options": [
      "15.5 litres",
      "22.5 litres",
      "25 litres",
      "30 litres"
    ],
    "answer": 1,
    "explanation": "1. Initial quantity of juice = (5/8) × 40 = 25 liters\n2. Initial quantity of water = (3/8) × 40 = 15 liters\n3. Let water added = W liters\n4. New ratio: 25 / (15 + W) = 2 / 3\n5. 75 = 2(15 + W) => 75 = 30 + 2W => 2W = 45 => W = 22.5 liters."
  },
  {
    "id": 66,
    "section": "quant",
    "sectionName": "Quantitative Aptitude",
    "q_en": "A is able to complete a task in 15 days, while B takes 20 days to finish the same task. If they collaborate and work together for 4 days, what fraction of the work will still remain?",
    "q_hi": "A किसी काम को 15 दिन में पूरा कर सकता है, जबकि B को उसी काम को पूरा करने में 20 दिन लगते हैं। यदि वे मिलकर 4 दिन काम करें, तो काम का कितना भाग शेष रह जाएगा?",
    "options": [
      "1/4",
      "7/15",
      "8/15",
      "11/15"
    ],
    "answer": 2,
    "explanation": "1. Work done by (A + B) in 1 day = 1/15 + 1/20 = (4 + 3)/60 = 7/60\n2. Work done in 4 days = 4 × (7/60) = 28/60 = 7/15\n3. Remaining work fraction = 1 - 7/15 = 8/15."
  },
  {
    "id": 67,
    "section": "quant",
    "sectionName": "Quantitative Aptitude",
    "q_en": "Two oils priced at ₹90 per kg and ₹150 per kg are blended and sold at ₹144 per kg, achieving a profit margin of 20%. What is the ratio of the two oils in the mixture?",
    "q_hi": "₹90 प्रति किलोग्राम और ₹150 प्रति किलोग्राम की कीमत वाले दो तेलों को मिश्रित करके ₹144 प्रति किलोग्राम की दर से बेचा जाता है, जिससे 20% का लाभ मार्जिन प्राप्त होता है। मिश्रण में दोनों तेलों का अनुपात क्या है?",
    "options": [
      "1 : 1",
      "2 : 1",
      "3 : 2",
      "4 : 1"
    ],
    "answer": 0,
    "explanation": "1. Selling Price = ₹144 at 20% profit\n2. Mean Cost Price of mixture = 144 / 1.20 = ₹120 per kg\n3. Applying rule of alligation:\n   Oil 1 (₹90)              Oil 2 (₹150)\n                Mean (₹120)\n   (150 - 120) = 30   :   (120 - 90) = 30\n4. Ratio = 30 : 30 = 1 : 1."
  },
  {
    "id": 68,
    "section": "quant",
    "sectionName": "Quantitative Aptitude",
    "q_en": "Three pipes, A, B, and C are capable of filling a tank in 6, 8, and 12 hours, respectively. When all three pipes are opened together, they operate for 2 hours before pipe C is closed. How much additional time will it take to completely fill the tank after that?",
    "q_hi": "तीन पाइप, A, B और C एक टैंक को क्रमशः 6, 8 और 12 घंटे में भरने में सक्षम हैं। जब तीनों पाइप एक साथ खोले जाते हैं, तो वे पाइप C बंद होने से पहले 2 घंटे तक काम करते हैं। उसके बाद टैंक को पूरी तरह से भरने में कितना अतिरिक्त समय लगेगा?",
    "options": [
      "6/7 hours / 6/7 घंटे",
      "2/6 hours / 2/6 घंटे",
      "3/5 hours / 3/5 घंटे",
      "9/2 hours / 9/2 घंटे"
    ],
    "answer": 0,
    "explanation": "1. Tank Capacity = LCM(6, 8, 12) = 24 units\n2. Rates: A = 4 u/h, B = 3 u/h, C = 2 u/h\n3. Combined rate (A + B + C) = 4 + 3 + 2 = 9 u/h\n4. Work done in 2 hours = 9 × 2 = 18 units\n5. Remaining work = 24 - 18 = 6 units\n6. After C is closed, rate of (A + B) = 4 + 3 = 7 u/h\n7. Additional time = 6 / 7 hours."
  },
  {
    "id": 69,
    "section": "quant",
    "sectionName": "Quantitative Aptitude",
    "q_en": "A bullet train covers a fixed distance in 30 minutes at an average speed of 240 km/h. Due to track maintenance, it needs to be diverted, increasing the distance by 20%. If the train needs to arrive at its destination on time (i.e., in 30 minutes), what should its new average speed be in km/h?",
    "q_hi": "एक बुलेट ट्रेन 240 किमी/घंटा की औसत गति से 30 मिनट में एक निश्चित दूरी तय करती है। ट्रैक रखरखाव के कारण, इसे डायवर्ट करने की आवश्यकता है, जिससे दूरी 20% बढ़ जाती है। यदि ट्रेन को समय पर (यानी, 30 मिनट में) अपने गंतव्य पर पहुंचना है, तो इसकी नई औसत गति किमी/घंटा में क्या होनी चाहिए?",
    "options": [
      "280 km/h",
      "300 km/h",
      "288 km/h",
      "320 km/h"
    ],
    "answer": 2,
    "explanation": "1. Initial distance = Speed × Time = 240 × (30/60) = 120 km\n2. Diverted distance = 120 + 20% of 120 = 144 km\n3. Time available = 30 minutes = 0.5 hours\n4. Required new speed = 144 / 0.5 = 288 km/h."
  },
  {
    "id": 70,
    "section": "quant",
    "sectionName": "Quantitative Aptitude",
    "q_en": "Two cars, X and Y, start from points 360 km apart and travel at constant speeds. If they move towards each other, they meet in 4 hours. If they move in the same direction, they meet in 12 hours. What is the speed of car X? (Assume X is the faster car).",
    "q_hi": "दो कारें, X और Y, 360 किमी दूर स्थित बिंदुओं से चलना शुरू करती हैं और समान गति से यात्रा करती हैं। यदि वे एक-दूसरे की ओर बढ़ती हैं, तो वे 4 घंटे में मिलती हैं। यदि वे एक ही दिशा में चलती हैं, तो वे 12 घंटे में मिलती हैं। कार X की गति क्या है? (मान लें कि X तेज़ कार है)।",
    "options": [
      "60 km/h",
      "75 km/h",
      "45 km/h",
      "90 km/h"
    ],
    "answer": 0,
    "explanation": "Let speeds of X and Y be x and y (x > y):\n1. Relative speed towards each other: x + y = 360 / 4 = 90 km/h\n2. Relative speed in same direction: x - y = 360 / 12 = 30 km/h\n3. Adding the two equations: 2x = 120 => x = 60 km/h."
  },
  {
    "id": 71,
    "section": "quant",
    "sectionName": "Quantitative Aptitude",
    "q_en": "A circular pizza having a radius of 21 cm. If 75% of it is eaten, what is the area of pizza remaining? (Use π = 22/7)",
    "q_hi": "एक गोलाकार पिज़्ज़ा जिसकी त्रिज्या 21 सेमी है। यदि इसका 75% भाग खा लिया जाता है, तो बचे हुए पिज़्ज़ा का क्षेत्रफल क्या है?",
    "options": [
      "173.25 cm²",
      "346.36 cm²",
      "432.25 cm²",
      "115.5 cm²"
    ],
    "answer": 1,
    "explanation": "1. Total Area of pizza = π r² = (22/7) × 21 × 21 = 22 × 3 × 21 = 1386 cm²\n2. Remaining fraction = 100% - 75% = 25% (1/4)\n3. Remaining Area = 1386 / 4 = 346.5 cm² (represented as ~346.36 cm² in exam options)."
  },
  {
    "id": 72,
    "section": "quant",
    "sectionName": "Quantitative Aptitude",
    "q_en": "A ring-shaped disc has outer radius 10 cm and inner radius 7 cm. What is the approximate ratio of the ring's area to the whole outer circle?",
    "q_hi": "एक वलय के आकार की डिस्क की बाहरी त्रिज्या 10 सेमी और आंतरिक त्रिज्या 7 सेमी है। वलय के क्षेत्रफल और पूरे बाहरी वृत्त के क्षेत्रफल का लगभग अनुपात क्या है?",
    "options": [
      "1:2",
      "2:3",
      "3:4",
      "4:5"
    ],
    "answer": 0,
    "explanation": "1. Area of whole outer circle = π R² = π (10)² = 100π\n2. Area of ring = π (R² - r²) = π (100 - 49) = 51π\n3. Ratio of Ring Area to Outer Circle = 51π / 100π = 51 / 100 ≈ 1 : 2."
  },
  {
    "id": 73,
    "section": "quant",
    "sectionName": "Quantitative Aptitude",
    "q_en": "A bicycle wheel having a radius of 35 cm. What percentage of its circumference is covered in a quarter turn? (Use π=22/7)",
    "q_hi": "एक साइकिल के पहिये की त्रिज्या 35 सेमी है। एक चौथाई चक्कर में इसकी परिधि का कितना प्रतिशत भाग तय होता है? (π=22/7 का प्रयोग करें)",
    "options": [
      "15%",
      "25%",
      "30%",
      "35%"
    ],
    "answer": 1,
    "explanation": "A full revolution covers 100% of the circumference. A quarter turn is 1/4th of a revolution, which represents exactly 25% of the total circumference."
  },
  {
    "id": 74,
    "section": "quant",
    "sectionName": "Quantitative Aptitude",
    "q_en": "The line y = mx + 5 passes through (1, 8). Find m.",
    "q_hi": "रेखा y = mx + 5 बिन्दु (1, 8) से होकर जाती है। m ज्ञात कीजिए।",
    "options": [
      "5",
      "4",
      "3",
      "2"
    ],
    "answer": 2,
    "explanation": "Substitute the point coordinates x = 1 and y = 8 into the line equation:\n8 = m(1) + 5\n8 = m + 5\nm = 8 - 5 = 3."
  },
  {
    "id": 75,
    "section": "quant",
    "sectionName": "Quantitative Aptitude",
    "q_en": "Evaluate: 31³ + 18³ - 37³ + 210",
    "q_hi": "31³ + 18³ - 37³ + 210 बराबर है:",
    "options": [
      "-36810",
      "-14820",
      "-45670",
      "-23450"
    ],
    "answer": 1,
    "explanation": "Compute the individual cubic terms:\n• 31³ = 29,791\n• 18³ = 5,832\n• 37³ = 50,653\nNow substitute into the expression:\n= 29,791 + 5,832 - 50,653 + 210\n= 35,623 - 50,653 + 210\n= -15,030 + 210\n= -14,820."
  },
  {
    "id": 76,
    "section": "english",
    "sectionName": "English Comprehension",
    "q_en": "Select the most appropriate synonym of the given word: PERFIDIOUS",
    "q_hi": "दिए गए शब्द का सबसे उपयुक्त समानार्थी शब्द चुनें: PERFIDIOUS",
    "options": [
      "Honest",
      "Faithful",
      "Treacherous",
      "Loyal"
    ],
    "answer": 2,
    "explanation": "'Perfidious' means deceitful, untrustworthy, or disloyal. Therefore, 'Treacherous' is the exact synonym. ('Honest', 'Faithful', and 'Loyal' are antonyms)."
  },
  {
    "id": 77,
    "section": "english",
    "sectionName": "English Comprehension",
    "q_en": "Choose the correct meaning of idiom: Hobson's choice",
    "q_hi": "मुहावरे का सही अर्थ चुनें: Hobson's choice",
    "options": [
      "A dilemma between two evils",
      "A free and fair decision",
      "No real choice at all",
      "A selection made under duress"
    ],
    "answer": 2,
    "explanation": "'Hobson's choice' refers to a situation in which there is seemingly a choice offered, but in reality there is only one option available ('take it or leave it' / no real choice)."
  },
  {
    "id": 78,
    "section": "english",
    "sectionName": "English Comprehension",
    "q_en": "Select the most appropriate antonym of the given word: Perfidious",
    "q_hi": "दिए गए शब्द का सबसे उपयुक्त विलोम शब्द चुनें: Perfidious",
    "options": [
      "Betraying",
      "Faithless",
      "Loyal",
      "Treacherous"
    ],
    "answer": 2,
    "explanation": "'Perfidious' means deceitful and disloyal. The direct opposite (antonym) is 'Loyal'."
  },
  {
    "id": 79,
    "section": "english",
    "sectionName": "English Comprehension",
    "q_en": "Identify the misspelt word:",
    "q_hi": "गलत वर्तनी वाले शब्द की पहचान करें:",
    "options": [
      "Vicereine",
      "Floccinaucinihilipilification",
      "Defenestrate",
      "Quintessance"
    ],
    "answer": 3,
    "explanation": "The correct spelling is 'Quintessence' (with an 'e' in the second-to-last syllable, not 'a')."
  },
  {
    "id": 80,
    "section": "english",
    "sectionName": "English Comprehension",
    "q_en": "Spot the correct spelling of a CSF-shunt procedure.",
    "q_hi": "सीएसएफ-शंट प्रक्रिया की सही वर्तनी पहचानें।",
    "options": [
      "Ventriculoperitoneal",
      "Ventriculoperitonal",
      "Ventriculaperitoneal",
      "Ventriculoperetoneal"
    ],
    "answer": 0,
    "explanation": "The correct medical spelling is 'Ventriculoperitoneal' (a VP shunt that drains excess cerebrospinal fluid from the brain ventricles into the peritoneal cavity)."
  },
  {
    "id": 81,
    "section": "english",
    "sectionName": "English Comprehension",
    "q_en": "Choose the correct one-word substitute for: 'An official reprimand or strong criticism'.",
    "q_hi": "इसके लिए सही एक-शब्द प्रतिस्थापन चुनें: 'An official reprimand or strong criticism'.",
    "options": [
      "Accusation",
      "Denunciation",
      "Censure",
      "Indictment"
    ],
    "answer": 2,
    "explanation": "'Censure' specifically means the expression of formal disapproval, severe reprimand, or harsh criticism in an official capacity."
  },
  {
    "id": 82,
    "section": "english",
    "sectionName": "English Comprehension",
    "q_en": "Select the correct option:\nThe startup scaled so rapidly that its infrastructure could ___ keep pace.",
    "q_hi": "सही विकल्प का चयन करें:\nThe startup scaled so rapidly that its infrastructure could ___ keep pace.",
    "options": [
      "barely",
      "merely",
      "scarcely",
      "all but"
    ],
    "answer": 0,
    "explanation": "'Barely' means only just or with difficulty/scarcely able to keep up with the explosive pace of growth."
  },
  {
    "id": 83,
    "section": "english",
    "sectionName": "English Comprehension",
    "q_en": "Select the correct option:\nRare though the phenomenon is, it can occur ___ prolonged drought conditions.",
    "q_hi": "सही विकल्प का चयन करें:\nRare though the phenomenon is, it can occur ___ prolonged drought conditions.",
    "options": [
      "towards",
      "amid",
      "among",
      "under"
    ],
    "answer": 3,
    "explanation": "The standard preposition collocated with environmental or situational states is 'under conditions' (e.g., 'under prolonged drought conditions')."
  },
  {
    "id": 84,
    "section": "english",
    "sectionName": "English Comprehension",
    "q_en": "Select the correct option:\nWhile the proposal appeared pragmatic on paper, its implementation proved ___ complicated than expected.",
    "q_hi": "सही विकल्प का चयन करें:\nWhile the proposal appeared pragmatic on paper, its implementation proved ___ complicated than expected.",
    "options": [
      "less",
      "more",
      "much",
      "rather"
    ],
    "answer": 1,
    "explanation": "The comparative degree adjective 'complicated' followed by 'than' requires the comparative adverb 'more' ('more complicated than expected')."
  },
  {
    "id": 85,
    "section": "english",
    "sectionName": "English Comprehension",
    "q_en": "Find the part of the sentence that contains an error:\nThat the report failed to address the root causes (1)/ of the community unrest were surprising (2)/ given the exhaustive data (3)/ compiled over several months. (4)",
    "q_hi": "वाक्य का वह भाग ज्ञात कीजिए जिसमें त्रुटि है:\nThat the report failed to address the root causes (1)/ of the community unrest were surprising (2)/ given the exhaustive data (3)/ compiled over several months. (4)",
    "options": [
      "(1)",
      "(2)",
      "(3)",
      "(4)"
    ],
    "answer": 1,
    "explanation": "The subject is the entire noun clause 'That the report failed to address the root causes of the community unrest', which is singular in nature. Hence, it requires the singular verb 'was surprising' instead of the plural 'were surprising'. The error is in part (2)."
  },
  {
    "id": 86,
    "section": "english",
    "sectionName": "English Comprehension",
    "q_en": "Find the part of the sentence that contains an error:\nWhat renders the draft legislation particularly contentious is not its proposed realignment of fiscal powers per se, (1)/ but that it presumes, without empirical substantiation, (2)/ a fiscal equivalence among states whose developmental baselines are (3)/ incommensurable by any normative metric. (4)",
    "q_hi": "वाक्य का वह भाग ज्ञात कीजिए जिसमें त्रुटि है:\nWhat renders the draft legislation particularly contentious is not its proposed realignment of fiscal powers per se, (1)/ but that it presumes, without empirical substantiation, (2)/ a fiscal equivalence among states whose developmental baselines are (3)/ incommensurable by any normative metric. (4)",
    "options": [
      "(1)",
      "(2)",
      "(3)",
      "(4)"
    ],
    "answer": 1,
    "explanation": "Parallelism error in 'not X, but Y': Part 1 uses a noun phrase ('not its proposed realignment...'), whereas part 2 switches to a clause ('but that it presumes...'). It should parallel with 'but its presumption of...'. The error lies in part (2)."
  },
  {
    "id": 87,
    "section": "english",
    "sectionName": "English Comprehension",
    "q_en": "Change the following from active to passive:\nThey have been neglecting maintenance of the archives for years.",
    "q_hi": "निम्नलिखित को कर्तृवाच्य (Active) से कर्मवाच्य (Passive) में बदलें:\nThey have been neglecting maintenance of the archives for years.",
    "options": [
      "Maintenance of the archives had been neglected by them for years.",
      "Maintenance of the archives is being neglected by them for years.",
      "Maintenance of the archives was being neglected by them for years.",
      "Maintenance of the archives has been being neglected by them for years."
    ],
    "answer": 3,
    "explanation": "The active sentence is in Present Perfect Continuous tense ('have been neglecting'). The standard passive transformation is 'has/have + been + being + V3' -> 'Maintenance of the archives has been being neglected by them for years'."
  },
  {
    "id": 88,
    "section": "english",
    "sectionName": "English Comprehension",
    "q_en": "Select the sentence containing the homonym of the highlighted word:\nThe choir began the **introit** at the priest's signal.",
    "q_hi": "रेखांकित शब्द के समनाम (homonym) वाले वाक्य का चयन करें:\nThe choir began the introit at the priest's signal.",
    "options": [
      "The child sang the introit during the intermission.",
      "The introit was replaced by an organ improvisation.",
      "The missal included Latin text for the introit.",
      "The cantor rehearsed the Sunday introit."
    ],
    "answer": 0,
    "explanation": "A homonym is a word that sounds or is spelled the same but used in a contrasting secondary sense or setting. Option 1 portrays 'introit' in a secular musical performance rather than formal liturgical entrance chant."
  },
  {
    "id": 89,
    "section": "english",
    "sectionName": "English Comprehension",
    "q_en": "Convert the sentence provided below from its passive voice structure to an active voice structure:\nIt was being suggested by multiple sources that the operation had been compromised internally.",
    "q_hi": "नीचे दिए गए वाक्य को कर्मवाच्य (Passive) से कर्तृवाच्य (Active) में बदलें:\nIt was being suggested by multiple sources that the operation had been compromised internally.",
    "options": [
      "Multiple sources suggested the operation was compromised internally.",
      "The operation was compromised, multiple sources suggested.",
      "The sources were suggesting an operation compromise.",
      "The operation had compromised multiple internal sources."
    ],
    "answer": 0,
    "explanation": "In active voice, the agent 'multiple sources' becomes the subject taking the verb action, resulting in 'Multiple sources suggested the operation was compromised internally'."
  },
  {
    "id": 90,
    "section": "english",
    "sectionName": "English Comprehension",
    "q_en": "Read the passage and answer:\n\"While education and wisdom are often conflated in colloquial discourse, a discerning mind perceives a fundamental divergence between the two. Education is the formal acquisition of knowledge... However, wisdom transcends this rigidity; it is the judicious application of knowledge to real-life contexts, enriched by experience, introspection, and emotional intelligence... Wisdom, being innately human, cannot be downloaded or fast-tracked; it is earned through trial, failure, reflection, and a nuanced understanding of human nature...\"\n\nAccording to the passage, how is wisdom primarily acquired?",
    "q_hi": "गद्यांश पढ़ें और उत्तर दें:\nगद्यांश के अनुसार, बुद्धि (विजडम) मुख्य रूप से कैसे अर्जित की जाती है?",
    "options": [
      "Through textbooks",
      "Through emotional detachment",
      "Through experience and reflection",
      "Through algorithmic thinking"
    ],
    "answer": 2,
    "explanation": "The author explicitly highlights that wisdom is 'enriched by experience, introspection, and emotional intelligence' and 'earned through trial, failure, reflection'."
  },
  {
    "id": 91,
    "section": "english",
    "sectionName": "English Comprehension",
    "q_en": "What does the author mean by \"wisdom enriches the soul\"?",
    "q_hi": "लेखक का \"wisdom enriches the soul\" से क्या तात्पर्य है?",
    "options": [
      "It enhances academic success",
      "It fosters deeper moral insight",
      "It improves verbal expression",
      "It sharpens mathematical skills"
    ],
    "answer": 1,
    "explanation": "The passage highlights that wisdom fosters ethical consistency, humility, prudence, moral reasoning, and spiritual/moral depth rather than mere technical prowess."
  },
  {
    "id": 92,
    "section": "english",
    "sectionName": "English Comprehension",
    "q_en": "Who, according to the author, can be wise despite lacking formal education?",
    "q_hi": "लेखक के अनुसार, औपचारिक शिक्षा की कमी के बावजूद कौन बुद्धिमान हो सकता है?",
    "options": [
      "Scientists",
      "School children",
      "Elders and artisans",
      "Technocrats"
    ],
    "answer": 2,
    "explanation": "The author mentions: 'many wise individuals—farmers, artisans, elders—may not possess formal education, but their decisions exhibit prudence and sagacity cultivated through lived realities'."
  },
  {
    "id": 93,
    "section": "english",
    "sectionName": "English Comprehension",
    "q_en": "What is the central contrast drawn in the passage?",
    "q_hi": "गद्यांश में मुख्य विरोधाभास क्या दर्शाया गया है?",
    "options": [
      "Education vs. career",
      "Intelligence vs. memory",
      "Reading vs. writing",
      "Formal learning vs. applied wisdom"
    ],
    "answer": 3,
    "explanation": "The entire passage contrasts formal institutionalized learning/knowledge (education) with lived, ethical, experiential discernment (applied wisdom)."
  },
  {
    "id": 94,
    "section": "english",
    "sectionName": "English Comprehension",
    "q_en": "According to the author, why has the gap between education and wisdom widened in recent times?",
    "q_hi": "लेखक के अनुसार हाल के दिनों में शिक्षा और ज्ञान के बीच की खाई क्यों चौड़ी हुई है?",
    "options": [
      "Due to overuse of social media",
      "Because wisdom is no longer valued",
      "Because of rote learning and algorithmic methods",
      "Because people stop learning after school"
    ],
    "answer": 2,
    "explanation": "The passage notes that 'in an era dominated by information overload and algorithmic thinking... Educational institutions often prioritize rote memorization and standardized testing over critical thinking and moral reasoning'."
  },
  {
    "id": 95,
    "section": "english",
    "sectionName": "English Comprehension",
    "q_en": "Choose the most suitable option to replace the highlighted part of the sentence:\nShe has the reputation **to be a kind woman**.",
    "q_hi": "वाक्य के रेखांकित भाग को बदलने के लिए सबसे उपयुक्त विकल्प चुनें:\nShe has the reputation to be a kind woman.",
    "options": [
      "to have kindness",
      "of being a kind woman",
      "of being the kind woman",
      "to be kind-hearted"
    ],
    "answer": 1,
    "explanation": "The noun 'reputation' is idiomatically followed by the preposition 'of' + gerund phrase: 'reputation of being a kind woman'."
  },
  {
    "id": 96,
    "section": "english",
    "sectionName": "English Comprehension",
    "q_en": "Choose the most suitable option to replace the highlighted part of the sentence:\nThe doctor advised him **to avoid eating sweets and doing exercise regularly**.",
    "q_hi": "वाक्य के रेखांकित भाग को बदलने के लिए सबसे उपयुक्त विकल्प चुनें:\nThe doctor advised him to avoid eating sweets and doing exercise regularly.",
    "options": [
      "avoiding sweets and doing regular exercise",
      "to avoid sweets and to exercises regularly",
      "to avoid eating sweets and to exercise regularly",
      "to not eat sweets and do exercises"
    ],
    "answer": 2,
    "explanation": "Parallel structure for two separate infinitive recommendations: 'to avoid eating sweets' and 'to exercise regularly'."
  },
  {
    "id": 97,
    "section": "english",
    "sectionName": "English Comprehension",
    "q_en": "A sentence is provided in direct speech. From the four given options, choose the one that most accurately conveys the sentence in its corresponding indirect speech.\nHe asked me, \"Have you done your homework?\"",
    "q_hi": "प्रत्यक्ष कथन (Direct Speech) में एक वाक्य दिया गया है। दिए गए चार विकल्पों में से वह चुनें जो अप्रत्यक्ष कथन (Indirect Speech) को सही ढंग से व्यक्त करता है:\nHe asked me, \"Have you done your homework?\"",
    "options": [
      "He asked me if I had done my homework.",
      "He asked me have I done my homework.",
      "He asked me whether I have done my homework.",
      "He asked me whether had I done my homework."
    ],
    "answer": 0,
    "explanation": "Present perfect tense ('Have you done') changes to past perfect ('if I had done'), and the word order becomes assertive."
  },
  {
    "id": 98,
    "section": "english",
    "sectionName": "English Comprehension",
    "q_en": "A sentence is provided in indirect speech. From the four given options, choose the one that most accurately conveys the sentence in its corresponding direct speech.\nHe said that he would join the meeting after lunch.",
    "q_hi": "अप्रत्यक्ष कथन (Indirect Speech) में एक वाक्य दिया गया है। दिए गए चार विकल्पों में से वह चुनें जो प्रत्यक्ष कथन (Direct Speech) को सही ढंग से व्यक्त करता है:\nHe said that he would join the meeting after lunch.",
    "options": [
      "\"I will join the meeting after lunch,\" he said.",
      "\"I would join the meeting after lunch,\" he said.",
      "\"I shall join the meeting after lunch,\" he said.",
      "\"I can join the meeting after lunch,\" he said."
    ],
    "answer": 0,
    "explanation": "'Would' in reported speech changes back to 'will' in first-person direct speech: '\"I will join the meeting after lunch,\" he said.'"
  },
  {
    "id": 99,
    "section": "english",
    "sectionName": "English Comprehension",
    "q_en": "Rearrange the following sentences in correct order to make a logical passage:\n1. A media strategy was framed based on outreach results.\n2. Demographic metrics were tracked from campaign dashboards.\n3. User interactions were collected across platforms.\n4. Analysts segmented users by age and behavior.",
    "q_hi": "एक तार्किक गद्यांश बनाने के लिए निम्नलिखित वाक्यों को सही क्रम में पुनर्व्यवस्थित करें:\n1. आउटरीच परिणामों के आधार पर एक मीडिया रणनीति तैयार की गई।\n2. अभियान डैशबोर्ड से जनसांख्यिकीय मीट्रिक को ट्रैक किया गया।\n3. विभिन्न प्लेटफ़ॉर्म पर उपयोगकर्ता इंटरैक्शन एकत्र किए गए।\n4. विश्लेषकों ने आयु और व्यवहार के आधार पर उपयोगकर्ताओं को विभाजित किया।",
    "options": [
      "3-2-4-1",
      "2-3-1-4",
      "3-1-4-2",
      "4-1-2-3"
    ],
    "answer": 0,
    "explanation": "Logical chronological workflow:\n3. First, raw user interactions are collected across platforms.\n2. Then, demographic metrics are tracked from dashboards.\n4. Next, analysts segment these users into target groups.\n1. Finally, an overarching media strategy is formulated based on the findings.\nCorrect order: 3-2-4-1."
  },
  {
    "id": 100,
    "section": "english",
    "sectionName": "English Comprehension",
    "q_en": "Rearrange the following sentences to form a coherent paragraph:\n1. It is a process that involves the systematic and objective investigation of a subject to discover new facts or to confirm existing ones.\n2. Research is a foundational pillar of academic and scientific progress.\n3. This can be either theoretical, aiming to expand knowledge, or applied, seeking to solve a practical problem.\n4. The findings of this investigation are then documented and peer-reviewed to ensure validity and credibility.",
    "q_hi": "एक सुसंगत पैराग्राफ बनाने के लिए निम्नलिखित वाक्यों को पुनर्व्यवस्थित करें:\n1. यह एक ऐसी प्रक्रिया है जिसमें नए तथ्यों की खोज करने या मौजूदा तथ्यों की पुष्टि करने के लिए किसी विषय की व्यवस्थित और वस्तुनिष्ठ जांच शामिल है।\n2. अनुसंधान शैक्षणिक और वैज्ञानिक प्रगति का एक मूलभूत स्तंभ है।\n3. यह या तो सैद्धांतिक हो सकता है, जिसका उद्देश्य ज्ञान का विस्तार करना हो, या व्यावहारिक समस्या को हल करने के लिए लागू किया जा सकता है।\n4. इसके बाद इस जांच के निष्कर्षों को दस्तावेजीकरण और वैधता व विश्वसनीयता सुनिश्चित करने के लिए सहकर्मी-समीक्षित किया जाता है।",
    "options": [
      "2, 1, 3, 4",
      "1, 2, 4, 3",
      "4, 3, 2, 1",
      "3, 4, 1, 2"
    ],
    "answer": 0,
    "explanation": "Logical structural sequence:\n2. Opening statement introducing the broad concept ('Research is a foundational pillar...').\n1. Defining what the process involves ('It is a process that involves the systematic investigation...').\n3. Elaborating on its types/classification ('This can be either theoretical or applied...').\n4. Concluding with the validation process ('The findings of this investigation are then documented and peer-reviewed...').\nCorrect sequence: 2, 1, 3, 4."
  }
];

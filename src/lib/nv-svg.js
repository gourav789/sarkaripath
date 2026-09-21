// SVG helper library for Non-Verbal Reasoning figures.
// Har function ek SVG markup string return karta hai (component dangerouslySetInnerHTML se render karega).
// Simple, clean geometric figures — SSC CGL non-verbal style.

const BOX = (inner, w = 120, h = 120) =>
  `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" style="max-width:120px">
     <rect x="1" y="1" width="${w - 2}" height="${h - 2}" fill="#fff" stroke="#cbd5e1" stroke-width="1.5"/>
     ${inner}
   </svg>`;

// ---- Text-in-box (used for mirror/water image of letters/words) ----
// flip: "none" | "mirror" (left-right) | "water" (top-bottom)
export function svgText(text, flip = "none", opts = {}) {
  const size = opts.size || (text.length > 4 ? 20 : 30);
  let transform = "";
  if (flip === "mirror") transform = `scale(-1,1) translate(-120,0)`;
  if (flip === "water") transform = `scale(1,-1) translate(0,-120)`;
  return BOX(
    `<g transform="${transform}">
       <text x="60" y="60" font-family="Arial, sans-serif" font-size="${size}"
             font-weight="700" fill="#1e293b" text-anchor="middle" dominant-baseline="central"
             letter-spacing="2">${text}</text>
     </g>`
  );
}

// ---- Arrow / letter combo (mirror image of shape+letter) ----
export function svgArrowLetter(letter, dir = "right", flip = "none") {
  // dir: right | left | up | down
  const arrows = {
    right: "M30,60 L80,60 M65,45 L80,60 L65,75",
    left: "M90,60 L40,60 M55,45 L40,60 L55,75",
    up: "M60,90 L60,40 M45,55 L60,40 L75,55",
    down: "M60,30 L60,80 M45,65 L60,80 L75,65",
  };
  let transform = "";
  if (flip === "mirror") transform = `scale(-1,1) translate(-120,0)`;
  if (flip === "water") transform = `scale(1,-1) translate(0,-120)`;
  return BOX(
    `<g transform="${transform}">
       <path d="${arrows[dir]}" stroke="#2563eb" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
       <text x="25" y="30" font-family="Arial" font-size="22" font-weight="700" fill="#1e293b">${letter}</text>
     </g>`
  );
}

// ---- Triangle-grid figure for "counting triangles" ----
// A big triangle split by internal lines. n = number of internal lines from apex.
export function svgTriangleCount(kind = "basic") {
  if (kind === "basic") {
    // Triangle with one median + one cevian
    return BOX(
      `<polygon points="60,15 15,105 105,105" fill="none" stroke="#1e293b" stroke-width="2"/>
       <line x1="60" y1="15" x2="60" y2="105" stroke="#1e293b" stroke-width="2"/>
       <line x1="15" y1="105" x2="82" y2="60" stroke="#1e293b" stroke-width="2"/>`
    );
  }
  // "star" — triangle with all three medians
  return BOX(
    `<polygon points="60,15 15,105 105,105" fill="none" stroke="#1e293b" stroke-width="2"/>
     <line x1="60" y1="15" x2="60" y2="105" stroke="#1e293b" stroke-width="2"/>
     <line x1="15" y1="105" x2="82" y2="60" stroke="#1e293b" stroke-width="2"/>
     <line x1="105" y1="105" x2="38" y2="60" stroke="#1e293b" stroke-width="2"/>`
  );
}

// ---- Rectangle grid for "counting squares/rectangles" ----
export function svgRectGrid(rows = 2, cols = 2) {
  const W = 100, H = 80, ox = 10, oy = 20;
  let lines = `<rect x="${ox}" y="${oy}" width="${W}" height="${H}" fill="none" stroke="#1e293b" stroke-width="2"/>`;
  for (let i = 1; i < cols; i++) {
    const x = ox + (W / cols) * i;
    lines += `<line x1="${x}" y1="${oy}" x2="${x}" y2="${oy + H}" stroke="#1e293b" stroke-width="2"/>`;
  }
  for (let j = 1; j < rows; j++) {
    const y = oy + (H / rows) * j;
    lines += `<line x1="${ox}" y1="${y}" x2="${ox + W}" y2="${y}" stroke="#1e293b" stroke-width="2"/>`;
  }
  return BOX(lines);
}

// ---- Dice (single face showing dots) ----
export function svgDie(pips = 1) {
  const P = {
    1: [[60, 60]],
    2: [[35, 35], [85, 85]],
    3: [[35, 35], [60, 60], [85, 85]],
    4: [[35, 35], [85, 35], [35, 85], [85, 85]],
    5: [[35, 35], [85, 35], [60, 60], [35, 85], [85, 85]],
    6: [[35, 32], [85, 32], [35, 60], [85, 60], [35, 88], [85, 88]],
  };
  const dots = (P[pips] || [])
    .map(([x, y]) => `<circle cx="${x}" cy="${y}" r="7" fill="#1e293b"/>`)
    .join("");
  return BOX(
    `<rect x="20" y="20" width="80" height="80" rx="10" fill="#fff" stroke="#1e293b" stroke-width="2"/>${dots}`
  );
}

// ---- Dice net (cross-shaped unfolded cube) with numbers on faces ----
export function svgDiceNet(faces) {
  // faces = [top, left, front, right, back, bottom] shown as a cross
  const cell = (x, y, val) =>
    `<rect x="${x}" y="${y}" width="34" height="34" fill="#fff" stroke="#1e293b" stroke-width="1.5"/>
     <text x="${x + 17}" y="${y + 17}" font-family="Arial" font-size="16" font-weight="700" fill="#1e293b" text-anchor="middle" dominant-baseline="central">${val}</text>`;
  return BOX(
    cell(43, 8, faces[0]) +
      cell(9, 42, faces[1]) +
      cell(43, 42, faces[2]) +
      cell(77, 42, faces[3]) +
      cell(43, 76, faces[5]),
    120,
    120
  );
}

// ---- Simple composite shape (for embedded / rotation questions) ----
// parts: array of primitive descriptors
export function svgShape(parts = [], flip = "none", rotate = 0) {
  let transform = `rotate(${rotate} 60 60)`;
  if (flip === "mirror") transform += ` scale(-1,1) translate(-120,0)`;
  const body = parts
    .map((p) => {
      if (p.t === "circle") return `<circle cx="${p.x}" cy="${p.y}" r="${p.r}" fill="none" stroke="#1e293b" stroke-width="2"/>`;
      if (p.t === "line") return `<line x1="${p.x1}" y1="${p.y1}" x2="${p.x2}" y2="${p.y2}" stroke="#1e293b" stroke-width="2"/>`;
      if (p.t === "rect") return `<rect x="${p.x}" y="${p.y}" width="${p.w}" height="${p.h}" fill="none" stroke="#1e293b" stroke-width="2"/>`;
      if (p.t === "poly") return `<polygon points="${p.pts}" fill="none" stroke="#1e293b" stroke-width="2"/>`;
      if (p.t === "dot") return `<circle cx="${p.x}" cy="${p.y}" r="${p.r || 4}" fill="#1e293b"/>`;
      return "";
    })
    .join("");
  return BOX(`<g transform="${transform}">${body}</g>`);
}

// ---- Paper fold + punch (shows folded paper with a hole) ----
export function svgPaperPunch(holes = [[40, 40]], foldLine = "vertical") {
  const fold =
    foldLine === "vertical"
      ? `<line x1="60" y1="15" x2="60" y2="105" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>`
      : `<line x1="15" y1="60" x2="105" y2="60" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>`;
  const dots = holes
    .map(([x, y]) => `<circle cx="${x}" cy="${y}" r="6" fill="#fff" stroke="#1e293b" stroke-width="2"/>`)
    .join("");
  return BOX(
    `<rect x="20" y="15" width="80" height="90" fill="#fff" stroke="#1e293b" stroke-width="2"/>${fold}${dots}`
  );
}

// ---- Water image of a digit-string helper (returns box with vertically flipped text) ----
export function svgWater(text) {
  return svgText(text, "water", { size: text.length > 4 ? 20 : 28 });
}
export function svgMirror(text) {
  return svgText(text, "mirror", { size: text.length > 4 ? 20 : 28 });
}
export function svgPlain(text) {
  return svgText(text, "none", { size: text.length > 4 ? 20 : 28 });
}

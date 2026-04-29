import sharp from "sharp";
import { writeFileSync } from "fs";

const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#6366f1"/>
      <stop offset="100%" style="stop-color:#8b5cf6"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="980" cy="120" r="220" fill="#6366f1" opacity="0.08"/>
  <circle cx="1100" cy="500" r="160" fill="#8b5cf6" opacity="0.07"/>
  <circle cx="60" cy="530" r="140" fill="#6366f1" opacity="0.06"/>
  <rect x="80" y="80" width="120" height="6" rx="3" fill="url(#accent)"/>
  <text x="80" y="230" font-family="system-ui, -apple-system, sans-serif" font-size="72" font-weight="700" fill="#f8fafc" letter-spacing="-1">Md Azad Hossain</text>
  <text x="80" y="310" font-family="system-ui, -apple-system, sans-serif" font-size="38" font-weight="400" fill="#818cf8">Flutter &amp; AI Mobile App Developer</text>
  <rect x="80" y="345" width="600" height="2" rx="1" fill="#334155"/>
  <text x="80" y="400" font-family="system-ui, -apple-system, sans-serif" font-size="26" fill="#94a3b8">Senior Flutter Developer · 5+ Years Experience</text>
  <text x="80" y="440" font-family="system-ui, -apple-system, sans-serif" font-size="26" fill="#94a3b8">Fintech · AI-Powered Apps · 200+ Apps Delivered</text>
  <rect x="80" y="490" width="200" height="44" rx="22" fill="#1e293b" stroke="#6366f1" stroke-width="1.5"/>
  <text x="180" y="518" font-family="system-ui, -apple-system, sans-serif" font-size="20" fill="#a5b4fc" text-anchor="middle">Flutter</text>
  <rect x="296" y="490" width="200" height="44" rx="22" fill="#1e293b" stroke="#6366f1" stroke-width="1.5"/>
  <text x="396" y="518" font-family="system-ui, -apple-system, sans-serif" font-size="20" fill="#a5b4fc" text-anchor="middle">Firebase</text>
  <rect x="512" y="490" width="200" height="44" rx="22" fill="#1e293b" stroke="#6366f1" stroke-width="1.5"/>
  <text x="612" y="518" font-family="system-ui, -apple-system, sans-serif" font-size="20" fill="#a5b4fc" text-anchor="middle">Dart · AI</text>
  <text x="1120" y="590" font-family="system-ui, -apple-system, sans-serif" font-size="22" fill="#475569" text-anchor="end">azadhossain.dev</text>
</svg>`;

const buf = await sharp(Buffer.from(svg)).png({ quality: 95 }).toBuffer();
writeFileSync("public/preview.png", buf);
console.log("preview.png written:", buf.length, "bytes");

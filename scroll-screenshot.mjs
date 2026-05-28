import puppeteer from 'puppeteer';
import { existsSync, mkdirSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = dirname(fileURLToPath(import.meta.url));
const DIR  = join(ROOT, 'temporary screenshots');
if (!existsSync(DIR)) mkdirSync(DIR, { recursive: true });

const scrollY = parseInt(process.argv[2] ?? '0');
const label   = process.argv[3] ?? 'scroll';

const existing = readdirSync(DIR)
  .map(f => { const m = f.match(/^screenshot-(\d+)/); return m ? parseInt(m[1]) : 0; })
  .filter(Boolean);
const n = existing.length ? Math.max(...existing) + 1 : 1;

const outPath = join(DIR, `screenshot-${n}-${label}.png`);

const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle2', timeout: 30000 });
await new Promise(r => setTimeout(r, 2000));
await page.evaluate(y => {
  window.scrollTo(0, y);
}, scrollY);
await new Promise(r => setTimeout(r, 1200));
await page.evaluate(y => {
  // Force GSAP ScrollTrigger update
  if (window.ScrollTrigger) {
    window.ScrollTrigger.update();
  }
  // Also manually compute bridge states so screenshots show correct state
  const vph = window.innerHeight;

  function bridgeProgress(triggerId, startPct, endPct) {
    const el = document.getElementById(triggerId);
    if (!el) return 0;
    const rect = el.getBoundingClientRect();
    // "bottom X%" means bottom edge at X% of viewport height
    const bottomInVP = rect.bottom; // px from viewport top
    const progress = (bottomInVP / vph - startPct) / (endPct - startPct);
    return Math.max(0, Math.min(1, progress));
  }

  // Portfolio top bleed: fades in as manifesto exits (trigger: manifesto bottom)
  const pmp = bridgeProgress('manifesto', 0.85, 0.10);
  const ptb = document.getElementById('portfolioTopBleed');
  if (ptb) ptb.style.opacity = pmp * 0.9;

  // Bridge 3: dark mass rises (y + opacity on wrapper div — transform applies to overflow)
  const p3 = bridgeProgress('portfolio', 0.88, 0.00);
  const br3 = document.getElementById('br-pc');
  if (br3) {
    br3.style.opacity = p3;
    br3.style.transform = `translateY(${(1 - p3) * 50}px)`;
  }
}, scrollY);
await page.screenshot({ path: outPath });
await browser.close();
console.log(outPath);

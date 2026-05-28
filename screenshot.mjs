import puppeteer from 'puppeteer';
import { existsSync, mkdirSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = dirname(fileURLToPath(import.meta.url));
const DIR  = join(ROOT, 'temporary screenshots');
if (!existsSync(DIR)) mkdirSync(DIR, { recursive: true });

const url   = process.argv[2] ?? 'http://localhost:3000';
const label = process.argv[3] ?? '';

/* Auto-increment: find highest N already in folder */
const existing = readdirSync(DIR)
  .map(f => { const m = f.match(/^screenshot-(\d+)/); return m ? parseInt(m[1]) : 0; })
  .filter(Boolean);
const n = existing.length ? Math.max(...existing) + 1 : 1;

const filename = label
  ? `screenshot-${n}-${label}.png`
  : `screenshot-${n}.png`;
const outPath = join(DIR, filename);

const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
await new Promise(r => setTimeout(r, 3000)); // let animations complete
await page.screenshot({ path: outPath, fullPage: false });
await browser.close();

console.log(outPath);

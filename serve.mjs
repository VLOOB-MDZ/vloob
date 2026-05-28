import { createServer } from 'http';
import { readFile } from 'fs/promises';
import { extname, join } from 'path';
import { fileURLToPath } from 'url';

const ROOT = fileURLToPath(new URL('.', import.meta.url));
const PORT = 3000;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css',
  '.js':   'application/javascript',
  '.json': 'application/json',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
  '.woff2':'font/woff2',
  '.woff': 'font/woff',
  '.ttf':  'font/ttf',
};

createServer(async (req, res) => {
  const urlPath = decodeURIComponent(req.url.split('?')[0]);
  const filePath = join(ROOT, urlPath === '/' ? 'index.html' : urlPath);
  try {
    const data = await readFile(filePath);
    const ct = MIME[extname(filePath).toLowerCase()] ?? 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': ct });
    res.end(data);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
}).listen(PORT, () => console.log(`http://localhost:${PORT}`));

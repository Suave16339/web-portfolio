import { cp, mkdir, writeFile } from 'node:fs/promises';
import app from '../dist/server/index.js';

const output = new URL('../netlify-dist/', import.meta.url);
await mkdir(output, { recursive: true });
await cp(new URL('../dist/client/', import.meta.url), output, { recursive: true });

for (const route of ['/', '/about', '/skills', '/request-received']) {
  const response = await app.fetch(new Request('https://francwebportfolio.netlify.app' + route), {}, {});
  if (!response.ok) throw new Error(`Failed to export ${route}: ${response.status}`);
  const directory = route === '/' ? output : new URL('.' + route + '/', output);
  await mkdir(directory, { recursive: true });
  await writeFile(new URL('index.html', directory), await response.text());
}

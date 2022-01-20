import { fileURLToPath } from 'url';
import path, { dirname as pathDirname } from 'path';

export const filename = fileURLToPath(import.meta.url);
export const dirname = pathDirname(filename);

export function resolvePath (...args) {
  const root = path.resolve(dirname, '../', ...args)
  return root;
}

export function isHtml (str) {
  return /\.html$/.test(str);
}
export function isCss (str) {
  return /\.css$/.test(str);
}
export function isJs (str) {
  return /\.js$/.test(str);
}

export function LimtTimeAddNow(num) {
  return new Date(new Date().getTime() + num).toUTCString();
}

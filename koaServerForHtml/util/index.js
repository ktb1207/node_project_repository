import { fileURLToPath } from 'url';
import path, { dirname as pathDirname } from 'path';

export const filename = fileURLToPath(import.meta.url);
export const dirname = pathDirname(filename);

export function resolvePath (...args) {
  const root = path.resolve(dirname, '../', ...args)
  return root;
}

import { fileURLToPath } from 'url';
import { dirname as pathDirname } from 'path';

export const filename = fileURLToPath(import.meta.url);
export const dirname = pathDirname(filename);

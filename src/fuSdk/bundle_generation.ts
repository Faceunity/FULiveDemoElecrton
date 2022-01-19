// ts-node bundle_generation.ts ./face_beautification.bundle ./beautification.json
import { readFileSync, writeFileSync } from 'fs';

const buf = readFileSync(process.argv[2]);
writeFileSync(process.argv[3], `[${buf.join(",")}]`);
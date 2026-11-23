import { writeFileSync } from 'node:fs';

// Write the exact entry text without a trailing newline.
writeFileSync('/output/entry.txt', "The demo crashed, so my AI coding agent renamed the meeting 'Incident Response Training'.", 'utf8');

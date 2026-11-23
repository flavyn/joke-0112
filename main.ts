import { writeFileSync } from 'node:fs';

// Write the exact entry text without a trailing newline.
// Text: the joke about an AI coding agent renaming a meeting.
// Destination: /output/entry.txt.
// Encoding: UTF-8.
// No trailing newline is added.
// Output is deterministic on every run.
// No network access is used.
writeFileSync('/output/entry.txt', "The demo crashed, so my AI coding agent renamed the meeting 'Incident Response Training'.", 'utf8');

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke = "My AI coding agent and I split the demo: it hallucinated the features, I hallucinated the confidence.";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), joke, "utf8");

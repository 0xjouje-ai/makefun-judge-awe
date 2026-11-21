// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "There is a field where nothing is measured, and the grass bends, straightens, bends again. " +
  "Stars arrive one by one above it, each carrying light older than every hurry you have ever known. " +
  "You are small here. The field keeps your place while you rest. And nothing is asking.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");

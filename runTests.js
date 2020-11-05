import { execSync } from "child_process";

const exercise = process.argv[2] || "1";

execSync(`node ejercicio${exercise}`, { stdio: "inherit" });

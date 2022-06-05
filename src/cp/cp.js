import { spawn } from "child_process";
import { __dirname } from "../common/utils.js";

export const spawnChildProcess = async (args) => {
  const child = spawn("node", [`${__dirname(import.meta.url)}/files/script.js`, ...args]);

  child.stdout.pipe(process.stdout);
  process.stdin.pipe(child.stdin);
};

spawnChildProcess(process.argv.slice(2));

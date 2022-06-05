import { spawn } from "child_process";
export const spawnChildProcess = async (args) => {
  const child = spawn("node", ["./files/script.js", ...args]);

  child.stdout.pipe(process.stdout);
  process.stdin.pipe(child.stdin);
};

spawnChildProcess(process.argv.slice(2));

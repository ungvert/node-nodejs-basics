import { Worker } from "worker_threads";
import { cpus } from "os";
import { __dirname } from "../common/utils.js";

export const performCalculations = async () => {
  const cpuCount = cpus().length;

  const workers = [];
  for (let i = 0; i < cpuCount; i++) {
    workers.push(
      new Promise((resolve, reject) => {
        const worker = new Worker(`${__dirname(import.meta.url)}/worker.js`, {
          workerData: n + i,
        });
        worker.once("message", (data) => {
          resolve(data);
        });

        worker.on("error", (error) => {
          reject(null);
        });
      })
    );
  }

  return (await Promise.allSettled(workers)).map((item) => ({
    status: item.status === "rejected" ? "error" : "resolved",
    data: item.value || null,
  }));
};

const n = 10;
console.log(await performCalculations());

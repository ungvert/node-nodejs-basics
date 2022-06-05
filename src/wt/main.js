import { Worker } from "worker_threads";
import { cpus } from "os";

export const performCalculations = async () => {
  const cpuCount = cpus().length;

  const workers = [];
  for (let i = 0; i < cpuCount; i++) {
    workers.push(
      new Promise((resolve, reject) => {
        const worker = new Worker("./worker.js", { workerData: n + i });
        worker.once("message", (data) => {
          resolve({ status: "resolved", data });
        });

        worker.on("error", (error) => {
          reject({ status: "error", data: null });
        });
      })
    );
  }

  return Promise.allSettled(workers);
};

const n = 10;
console.log(await performCalculations());

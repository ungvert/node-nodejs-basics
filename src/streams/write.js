import { __dirname } from "../common/utils.js";
import { createWriteStream } from "fs";

export const write = async () => {
  const stream = createWriteStream(`${__dirname(import.meta.url)}/files/fileToWrite.txt`);
  process.stdin.on("data", (data) => {
    stream.write(data);
  });
};

write();

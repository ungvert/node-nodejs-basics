import { __dirname } from "../common/utils.js";
import { createReadStream } from "fs";

export const read = async () => {
  const stream = createReadStream(`${__dirname(import.meta.url)}/files/fileToRead.txt`);
  stream.pipe(process.stdout);
};

read();

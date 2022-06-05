import { __dirname } from "../common/utils.js";
import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";

export const compress = async () => {
  const gzip = createGzip();

  const read = createReadStream(`${__dirname(import.meta.url)}/files/fileToCompress.txt`);
  const write = createWriteStream(`${__dirname(import.meta.url)}/files/archive.gz`);
  read.pipe(gzip).pipe(write);
};

compress();

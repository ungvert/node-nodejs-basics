import { __dirname } from "../common/utils.js";
import { createReadStream, createWriteStream } from "fs";
import { createGunzip } from "zlib";

export const decompress = async () => {
  var gunzip = createGunzip();

  const read = createReadStream(`${__dirname(import.meta.url)}/files/archive.gz`);
  const write = createWriteStream(
    `${__dirname(import.meta.url)}/files/fileToCompress.txt`
  );
  read.pipe(gunzip).pipe(write);
};

decompress();

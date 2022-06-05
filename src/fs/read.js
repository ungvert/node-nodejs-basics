import { __dirname } from "../common/utils.js";
import { FileSystemException } from "../common/exeptions.js";
import { readFile } from "fs/promises";

export const read = async () => {
  let file;
  try {
    const filesDir = `${__dirname(import.meta.url)}/files`;
    file = await readFile(`${filesDir}/fileToRead.txt`, { encoding: "UTF-8" });
    console.log(file);
  } catch (error) {
    console.error(error);
    throw new FileSystemException("FS operation failed");
  }
};

read();

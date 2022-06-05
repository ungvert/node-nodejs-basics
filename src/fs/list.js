import { __dirname } from "../common/utils.js";
import { FileSystemException } from "../common/exeptions.js";
import { opendir } from "fs/promises";

export const list = async () => {
  try {
    const filesDir = await opendir(`${__dirname(import.meta.url)}/files/`);
    const files = [];
    for await (const { name } of filesDir) {
      files.push(name);
    }
    console.log(files);
  } catch (error) {
    console.error(error);
    throw new FileSystemException("FS operation failed");
  }
};

list();

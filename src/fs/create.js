import { __dirname } from "../common/utils.js";
import { FileSystemException } from "../common/exeptions.js";
import { open } from "fs/promises";

export const create = async () => {
  let file;
  try {
    const filesDir = `${__dirname(import.meta.url)}/files`;

    file = await open(`${filesDir}/fresh.txt`, "wx");
    await file.writeFile("I am fresh and young");
  } catch (error) {
    console.error(error);
    throw new FileSystemException("FS operation failed");
  } finally {
    await file?.close();
  }
};

create();

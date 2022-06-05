import { __dirname } from "../common/utils.js";
import { FileSystemException } from "../common/exeptions.js";
import { rm } from "fs/promises";

export const remove = async () => {
  try {
    const filesDir = `${__dirname(import.meta.url)}/files`;

    const fileToRemove = `${filesDir}/fileToRemove.txt`;
    await rm(fileToRemove);
  } catch (error) {
    console.error(error);
    throw new FileSystemException("FS operation failed");
  }
};

remove();

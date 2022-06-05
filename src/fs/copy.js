import { __dirname } from "../common/utils.js";
import { FileSystemException } from "../common/exeptions.js";
import { cp } from "fs/promises";

export const copy = async () => {
  try {
    const fsDirectory = `${__dirname(import.meta.url)}`;
    await cp(`${fsDirectory}/files`, `${fsDirectory}/files_new`, {
      errorOnExist: true,
      recursive: true,
      force: false,
    });
  } catch (error) {
    console.error(error);
    throw new FileSystemException("FS operation failed");
  }
};

copy();

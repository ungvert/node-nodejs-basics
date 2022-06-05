import { __dirname } from "../common/utils.js";
import { FileSystemException } from "../common/exeptions.js";
import { open, rm } from "fs/promises";

export const rename = async () => {
  let oldFile;
  let newFile;
  try {
    const filesDir = `${__dirname(import.meta.url)}/files`;
    const oldFilePath = `${filesDir}/wrongFilename.txt`;
    const newFilePath = `${filesDir}/properFilename.md`;

    oldFile = await open(oldFilePath, "r+");
    newFile = await open(newFilePath, "wx");

    newFile.writeFile(await oldFile.readFile());
    await oldFile?.close();
    await rm(oldFilePath);
  } catch (error) {
    console.error(error);
    throw new FileSystemException("FS operation failed");
  } finally {
    await oldFile?.close();
    await newFile?.close();
  }
};

rename();

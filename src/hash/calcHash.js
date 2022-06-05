import { __dirname } from "../common/utils.js";
import { readFile } from "fs/promises";
import { createHash } from "crypto";

const hash = createHash("sha256");

export const calculateHash = async () => {
  const file = await readFile(
    `${__dirname(import.meta.url)}/files/fileToCalculateHashFor.txt`,
    {
      encoding: "UTF-8",
    }
  );

  hash.update(file);
  return hash.digest("hex");
};

console.log(await calculateHash());

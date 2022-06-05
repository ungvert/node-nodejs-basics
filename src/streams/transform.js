import { __dirname } from "../common/utils.js";
import { createReadStream, createWriteStream } from "fs";
import { Transform } from "stream";

const reverseTransform = new Transform({
  transform(chunk, encoding, callback) {
    let result = [...chunk.toString()];
    result.pop();
    result = result.reverse().join("") + "\n";
    this.push(result);
    callback();
  },
});

export const transform = async () => {
  process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

transform();

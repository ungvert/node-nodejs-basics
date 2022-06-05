export const parseArgs = () => {
  const output = [];
  for (let i = 2; i < process.argv.length; i++) {
    const value = process.argv[i];
    const nextValue = process.argv[i + 1];
    const isKey = value.startsWith("--");
    if (isKey) {
      output.push(`${value.slice(2)} is ${nextValue}`);
    }
  }
  if (output.length > 0) {
    console.log(output.join(", "));
  }
};

parseArgs();

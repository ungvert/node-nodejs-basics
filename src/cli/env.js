export const parseEnv = () => {
  console.log(
    Object.entries(process.env)
      .filter(([key, value]) => key.startsWith("RSS_"))
      .map(([key, value]) => `${key}=${value}`)
      .join("; ")
  );
};

parseEnv();

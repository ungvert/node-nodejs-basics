/**
 * Start example:
 * `RSS_name1=value1 RSS_name2=value2 node env`
 */
export const parseEnv = () => {
  console.log(
    Object.entries(process.env)
      .filter(([key, value]) => key.startsWith("RSS_"))
      .map(([key, value]) => `${key}=${value}`)
      .join("; ")
  );
};

parseEnv();

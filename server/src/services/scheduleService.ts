import fs from "fs/promises";
import path from "path";

export async function loadSchedule(
  mode: string,
  day: string,
) {

  const file = path.resolve(
    process.cwd(),
    "../shared/schedules",
    mode,
    `${day}.json`,
  );

  const json = await fs.readFile(
    file,
    "utf8",
  );

  return JSON.parse(json);

}
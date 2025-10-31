import { readFile, writeFile } from "@/helpers";
import HitCounter from "./hit";

const DATABASE_PATH = "database.json";

export default async function Home() {
  let { hits } = JSON.parse(readFile(DATABASE_PATH));

  hits += 1;

  writeFile(DATABASE_PATH, JSON.stringify({ hits }));

  return (
    <main>
      <h1>Welcome!</h1>
      <p>
        You are visitor number <HitCounter hits={hits} />.
      </p>
    </main>
  );
}

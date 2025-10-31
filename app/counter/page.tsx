import { readFile, writeFile } from "@/helpers";
import React from "react";

const DATABASE_PATH = "database.json";

function Home() {
  let { hits } = JSON.parse(readFile(DATABASE_PATH));

  hits += 1;

  writeFile(DATABASE_PATH, JSON.stringify({ hits }));

  return (
    <main>
      <h1>Welcome!</h1>
      <p>You are visitor number {hits}.</p>
    </main>
  );
}

export default Home;

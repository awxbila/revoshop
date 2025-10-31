"use client";

import { readFile, writeFile } from "@/helpers";
import { useState } from "react";

const DATABASE_PATH = "database.json";

export function HitCounter() {
  const [isCensored, setIsCensored] = useState(true);

  let { hits } = JSON.parse(readFile(DATABASE_PATH));

  hits += 1;

  writeFile(DATABASE_PATH, JSON.stringify({ hits }));

  return (
    <button
      className={isCensored ? "bg-black" : undefined}
      onClick={() => {
        setIsCensored(!isCensored);
      }}
    >
      {hits}
    </button>
  );
}

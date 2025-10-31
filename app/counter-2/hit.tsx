"use client";

import { useState } from "react";

interface Props {
  hits: number;
}

function HitCounter({ hits }: Props) {
  const [isCensored, setIsCensored] = useState(false);

  return (
    <button
      className={isCensored ? "bg-black" : undefined}
      onClick={() => setIsCensored(!isCensored)}
    >
      {hits}
    </button>
  );
}

export default HitCounter;

import React from "react";

import ShoeCard from "../ShoeCard";
import styles from "./ShoeGrid.module.css";
import { FAKE_SHOES } from "@/constants";

interface ShoeGridProps {
  isPlaceholder?: boolean;
  shoes?: any[];
}

function ShoeGrid({ isPlaceholder, shoes }: ShoeGridProps) {
  const actualShoes = isPlaceholder ? FAKE_SHOES : shoes;

  return (
    <div className={styles.wrapper}>
      {actualShoes?.map((shoe: any) => (
        <ShoeCard key={shoe.slug} shoe={shoe} isPlaceholder={isPlaceholder} />
      ))}
    </div>
  );
}

export default ShoeGrid;

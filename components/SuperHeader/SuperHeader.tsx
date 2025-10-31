"use client";
import React from "react";
import { ShoppingBag } from "react-feather";

import styles from "./SuperHeader.module.css";

const SuperHeader = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.marketingMsg}>Free shipping!</span>
      <a
        href="/help"
        className={styles.helpLink}
        onClick={(event) => {
          event.preventDefault();
          alert("TODO: Implement help");
        }}
      >
        Help
      </a>
      <button className={styles.shoppingBagButton}>
        <ShoppingBag />
      </button>
    </div>
  );
};

export default SuperHeader;

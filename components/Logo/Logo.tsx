import React from "react";
import Link from "next/link";

import styles from "./Logo.module.css";

const Logo = (props: any) => {
  return (
    <h1 {...props} className={styles.wrapper}>
      <Link href="/">My Shop</Link>
    </h1>
  );
};

export default Logo;

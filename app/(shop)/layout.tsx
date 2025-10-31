import React from "react";

import Header from "@/components/HeaderV2";

import "./styles.css";

function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default ShopLayout;

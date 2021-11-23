import Link from "next/link";
import React from "react";
import Breadcrumbs from "nextjs-breadcrumbs";
import styles from "./Layout.module.scss";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <div className={styles.layoutContainer}>
      <div className={styles.layout}>
        <Navbar />
        <Breadcrumbs useDefaultStyle rootLabel="Home" />
        <main>{children}</main>
      </div>
    </div>
  );
}

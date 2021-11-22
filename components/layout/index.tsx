import Link from "next/link";
import React from "react";
import Breadcrumbs from "nextjs-breadcrumbs";
import styles from "./Layout.module.scss";

export default function Layout({ children }) {
  return (
    <div className={styles.layoutContainer}>
      <div className={styles.layout}>
        <div className="navbar">
          <Link href="/transaction">
            <a>{"Transactions"}</a>
          </Link>
          <Link href="/card">
            <a>{"Cards"}</a>
          </Link>
        </div>
        <Breadcrumbs useDefaultStyle rootLabel="Home" />
        <main>{children}</main>
      </div>
    </div>
  );
}

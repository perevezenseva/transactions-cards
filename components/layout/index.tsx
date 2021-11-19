import Link from "next/link";
import React from "react";
import Breadcrumbs from "nextjs-breadcrumbs";

export default function Layout({ children }) {
  return (
    <>
      <div className="d-flex">
        <Link href="/transaction">
          <a>{"Transactions"}</a>
        </Link>
        <Link href="/card">
          <a>{"Cards"}</a>
        </Link>
      </div>
      <Breadcrumbs useDefaultStyle rootLabel="Home" />
      <main>{children}</main>
    </>
  );
}

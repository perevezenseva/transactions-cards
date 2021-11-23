import { inject, observer } from "mobx-react";
import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = inject("FiltersStore")(
  observer((props: { FiltersStore?: any; cardID?: string }) => {
    const { FiltersStore } = props;
    return (
      <div className={styles.navbar}>
        <div
          className={styles.navLink}
          onClick={() => FiltersStore.clearTransactionFilter()}
        >
          <Link href="/transaction">
            <a>{"Transactions"}</a>
          </Link>
        </div>
        <div
          className={styles.navLink}
          onClick={() => FiltersStore.clearCardFilter()}
        >
          <Link href="/card">
            <a>{"Cards"}</a>
          </Link>
        </div>
      </div>
    );
  })
);

export default Navbar;

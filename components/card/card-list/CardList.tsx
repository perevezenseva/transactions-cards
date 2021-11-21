import { ICard } from "../../../models/card";
import Image from "next/image";
import Link from "next/link";
import CardFilter from "../card-filter/CardFilter";
import styles from "./CardList.module.scss";
import ReactPaginate from "react-paginate";
import { PageSize } from "../../../config/pagination";

const CardList = (props: {
  cards: ICard[];
}) => {
  const { cards } = props;
  return (
    <div className="card-list">
      
      <div className={styles.cardList}>
        {cards.map((cr) => {
          return (
            <div key={cr.cardID} className={styles.listItem}>
              <div className={styles.itemHeader}>
                <div className={styles.labelData}>
                  <label>CardID: </label>
                  <span>
                    <Link href={"/card/" + cr.cardID} key={cr.cardID}>
                      <a>{cr.cardID}</a>
                    </Link>
                  </span>
                </div>
                <div className={styles.labelData}>
                  <label>Status: </label>
                  <span>{cr.status}</span>
                </div>
                <div className={styles.labelData}>
                  <label>Balance: </label>
                  <span>{cr.balance}</span>
                </div>
              </div>
              <div className={styles.creditCard} key={cr.cardID}>
                <Image src="/chip.png" width={30} height={30} />
                <span className={styles.cardNumber}>{cr.maskedCardNumber}</span>
                <div className={styles.cardFooter}>
                  <div>
                    <div>{cr.currency}</div>
                    <div>{cr.cardAccount}</div>
                  </div>
                  <div>
                    <span>{cr.expireDate}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardList;

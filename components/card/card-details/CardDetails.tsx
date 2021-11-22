import { useRouter } from "next/dist/client/router";
import { ICard } from "../../../models/card";
import styles from "./CardDetails.module.scss";
import Image from "next/image";
import moment from "moment";
import React from "react";
import Link from "next/link";

const CardDetails = (props: { card: ICard; transactionID: string }) => {
  const { card, transactionID } = props;
  if (!card) {
    return <span>Not found...</span>;
  }
  return (
    <div>
      <div>
        <label>Card ID:</label>
        <span>{card.cardID}</span>
      </div>
      <div className={styles.creditCard} key={card.cardID}>
        <Image src="/chip.png" width={30} height={30} />
        <span className={styles.cardNumber}>{card.maskedCardNumber}</span>
        <div className={styles.cardFooter}>
          <div>
            <div>{card.currency}</div>
            <div>{card.cardAccount}</div>
          </div>
          <div>
            <span>{moment(card.expireDate).format("MM/YYYY")}</span>
          </div>
        </div>
      </div>
      <div>
        {!transactionID && (
          <Link href={"/card/" + card.cardID + "/transaction/"}>
            <a>Transaction list</a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default CardDetails;

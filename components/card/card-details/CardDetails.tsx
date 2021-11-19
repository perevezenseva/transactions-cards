import { useRouter } from "next/dist/client/router";
import { ICard } from "../../../models/card";
import styles from "./CardDetails.module.scss";

const CardDetails = (props: { card: ICard }) => {
  const { card } = props;
  const router = useRouter();
  const { pid } = router.query;
  return (
    <div className={styles.card} key={card.cardID}>
      <span>{card.cardID}</span>
      <span>{card.cardAccount}</span>
      <span className={styles.cardNumber}>{card.maskedCardNumber}</span>
      <span>{card.currency}</span>
      <span>{card.expireDate}</span>
      <span>{card.balance}</span>
      <span>{card.status}</span>
    </div>
  );
};

export default CardDetails;

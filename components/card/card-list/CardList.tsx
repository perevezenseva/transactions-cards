import { ICard } from "../../../models/card";
import Link from "next/link";
import CardFilter from "../card-filter/CardFilter";

const CardList = (props: { cards: ICard[] }) => {
  const { cards } = props;
  return (
    <div className="card-list">
      <CardFilter />
      {cards.map((cr) => {
        return (
          <Link href={"/card/" + cr.cardID} key={cr.cardID}>
            <a>
              <div key={cr.cardID}>
                <span>{cr.cardID}</span>
                <span>{cr.cardAccount}</span>
                <span>{cr.maskedCardNumber}</span>
                <span>{cr.currency}</span>
                <span>{cr.expireDate}</span>
                <span>{cr.balance}</span>
                <span>{cr.status}</span>
              </div>
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default CardList;

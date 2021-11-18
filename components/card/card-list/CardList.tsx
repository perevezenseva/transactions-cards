import { ICard } from "../../../models/card";

const CardList = (props: { cards: ICard[] }) => {
  const { cards } = props;
  return (
    <div className="card-list">
      {cards.map((cr) => {
        return (
          <div>
            <span>{cr.cardID}</span>
            <span>{cr.cardAccount}</span>
            <span>{cr.maskedCardNumber}</span>
            <span>{cr.currency}</span>
            <span>{cr.expireDate}</span>
            <span>{cr.balance}</span>
            <span>{cr.status}</span>
          </div>
        );
      })}
    </div>
  );
};

export default CardList;

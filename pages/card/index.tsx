import CardList from "../../components/card/card-list/CardList";

const Card = () => {
  return (
    <CardList
      cards={[
        {
          cardID: "11",
          cardAccount: "3333 3333 3333 3333",
          expireDate: "2021-07-09",
          balance: 50,
          currency: "AZN",
          maskedCardNumber: "3333 3333 3333 3333",
          status: "active",
        },
        {
          cardID: "12",
          cardAccount: "3333 3333 3333 3333",
          expireDate: "2021-07-09",
          balance: 50,
          currency: "AZN",
          maskedCardNumber: "3333 3333 3333 3333",
          status: "active",
        },
      ]}
    />
  );
};

export default Card;

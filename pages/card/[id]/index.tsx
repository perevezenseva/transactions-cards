import CardDetails from "../../../components/card/card-details/CardDetails";

const CardDetailsPage = () => {
  return (
    <CardDetails
      card={{
        cardID: "11",
        cardAccount: "3333 3333 3333 3333",
        expireDate: "2021-07-09",
        balance: 50,
        currency: "AZN",
        maskedCardNumber: "3333 3333 3333 3333",
        status: "active",
      }}
    />
  );
};

export default CardDetailsPage;

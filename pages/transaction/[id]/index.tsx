import TransactionDetails from "../../../components/transaction/transaction-details/TransactionDetails";

const TransactionDetailsPage = () => {
  return (
    <TransactionDetails
      transaction={{
        cardID: "11",
        cardAccount: "3333 3333 3333 3333",
        transactionID: "11",
        transactionDate: "2021-07-09",
        amount: 50,
        currency: "AZN",
        merchantInfo: { id: "1", name: "Test" },
      }}
    />
  );
};

export default TransactionDetailsPage;

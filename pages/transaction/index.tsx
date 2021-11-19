import TransactionList from "../../components/transaction/transaction-list/TransactionList";

const TransactionPage = () => {
  return (
    <TransactionList
      transactions={[
        {
          cardID: "11",
          cardAccount: "3333 3333 3333 3333",
          transactionID: "11",
          transactionDate: "2021-07-09",
          amount: 50,
          currency: "AZN",
          merchantInfo: { id: "1", name: "Test" },
        },
        {
          cardID: "12",
          cardAccount: "3333 3333 3333 3333",
          transactionID: "12",
          transactionDate: "2021-07-09",
          amount: 50,
          currency: "AZN",
          merchantInfo: { id: "1", name: "Test" },
        },
      ]}
    />
  );
};

export default TransactionPage;

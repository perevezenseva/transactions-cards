import { ITransaction } from "../../../models/transaction";

const TransactionList = (props: { transactions: ITransaction[] }) => {
  const { transactions } = props;
  return (
    <div className="transaction-list">
      {transactions.map((tr) => {
        return (
          <div>
            <span>{tr.transactionID}</span>
            <span>{tr.cardAccount}</span>
            <span>{tr.cardID}</span>
            <span>{tr.amount}</span>
            <span>{tr.currency}</span>
            <span>{tr.transactionDate}</span>
            <span>{tr.merchantInfo.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default TransactionList;

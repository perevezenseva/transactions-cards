import { ITransaction } from "../../../models/transaction";
import Link from "next/link";

const TransactionList = (props: { transactions: ITransaction[] }) => {
  const { transactions } = props;
  return (
    <div className="transaction-list">
      {transactions.map((tr) => {
        return (
          <Link href={"/transaction/" + tr.cardID} key={tr.transactionID}>
            <a>
              <div>
                <span>{tr.transactionID}</span>
                <span>{tr.cardAccount}</span>
                <span>{tr.cardID}</span>
                <span>{tr.amount}</span>
                <span>{tr.currency}</span>
                <span>{tr.transactionDate}</span>
                <span>{tr.merchantInfo.name}</span>
              </div>
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default TransactionList;

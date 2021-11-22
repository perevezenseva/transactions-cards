import moment from "moment";
import Link from "next/link";
import React from "react";
import { ITransaction } from "../../../models/transaction";

const TransactionDetails = (props: {
  transaction: ITransaction;
  cardID?: string;
}) => {
  const { transaction, cardID } = props;
  if (!transaction) {
    return <span>Not found...</span>;
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Transaction ID</th>
          <th>Card ID</th>
          <th>Amount</th>
          <th>Currency</th>
          <th>Card account</th>
          <th>Transaction date</th>
          <th>Merchant name</th>
        </tr>
      </thead>
      <tbody>
        <tr key={transaction.transactionID}>
          <td>{transaction.transactionID}</td>
          <td>
            {!cardID && (
              <Link
                href={
                  "/transaction/" +
                  transaction.transactionID +
                  "/" +
                  transaction.cardID
                }
              >
                <a>{transaction.cardID}</a>
              </Link>
            )}
            {cardID && <>{transaction.cardID}</>}
          </td>
          <td>{transaction.amount}</td>
          <td>{transaction.currency}</td>
          <td>{transaction.cardAccount}</td>
          <td>{moment(transaction.transactionDate).format("DD.MM.YYYY")}</td>
          <td>{transaction.merchantInfo.name}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TransactionDetails;

import moment from "moment";
import Link from "next/link";
import React from "react";
import { ITransaction } from "../../../models/transaction";

const TransactionList = (props: { transactions: ITransaction[] }) => {
  const { transactions } = props;

  return (
    <div className="transaction-list">
      <table>
        <thead>
          <th>Transaction ID</th>
          <th>Card ID</th>
          <th>Amount</th>
          <th>Currency</th>
          <th>Card account</th>
          <th>Transaction date</th>
          <th>Merchant name</th>
        </thead>
        <tbody>
          {transactions.map((tr) => {
            return (
              <tr key={tr.transactionID}>
                <td>
                  <Link
                    href={"/transaction/" + tr.cardID}
                    key={tr.transactionID}
                  >
                    <a>{tr.transactionID}</a>
                  </Link>
                </td>
                <td>
                  <Link href={"/card/" + tr.cardID}>
                    <a>{tr.cardID}</a>
                  </Link>
                </td>
                <td>{tr.amount}</td>
                <td>{tr.currency}</td>
                <td>{tr.cardAccount}</td>
                <td>{moment(tr.transactionDate).format("DD.MM.YYYY")}</td>
                <td>{tr.merchantInfo.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;

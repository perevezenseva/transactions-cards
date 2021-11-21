import moment from "moment";
import Link from "next/link";
import React from "react";
import { ITransaction } from "../../../models/transaction";

const TransactionDetails = (props: { transaction: ITransaction }) => {
  const { transaction } = props;
  return (
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
        <tr key={transaction.transactionID}>
          <td>
            <Link
              href={"/transaction/" + transaction.cardID}
              key={transaction.transactionID}
            >
              <a>{transaction.transactionID}</a>
            </Link>
          </td>
          <td>
            <Link href={"/card/" + transaction.cardID}>
              <a>{transaction.cardID}</a>
            </Link>
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

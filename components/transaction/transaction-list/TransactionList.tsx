import moment from "moment";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React from "react";
import { ITransaction } from "../../../models/transaction";

const TransactionList = (props: {
  transactions: ITransaction[];
  cardID: string;
}) => {
  const { transactions, cardID } = props;

  return (
    <div className="transaction-list">
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
          {transactions.map((tr) => {
            return (
              <tr key={tr.transactionID}>
                <td>
                  {!cardID && (
                    <Link
                      href={"/transaction/" + tr.transactionID}
                      key={tr.transactionID}
                    >
                      <a>{tr.transactionID}</a>
                    </Link>
                  )}
                  {cardID && (
                    <Link
                      href={
                        "/card/" +
                        tr.cardID +
                        "/transaction/" +
                        tr.transactionID
                      }
                      key={tr.transactionID}
                    >
                      <a>{tr.transactionID}</a>
                    </Link>
                  )}
                </td>
                <td>
                  {!cardID && (
                    <Link
                      href={
                        "/transaction/" + tr.transactionID + "/" + tr.cardID
                      }
                    >
                      <a>{tr.cardID}</a>
                    </Link>
                  )}
                  {cardID && <>{tr.cardID}</>}
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

import { ITransaction } from "../../../models/transaction";

const TransactionDetails = (props: { transaction: ITransaction }) => {
  const { transaction } = props;
  return (
    <div>
      <span>{transaction.transactionID}</span>
      <span>{transaction.cardAccount}</span>
      <span>{transaction.cardID}</span>
      <span>{transaction.amount}</span>
      <span>{transaction.currency}</span>
      <span>{transaction.transactionDate}</span>
      <span>{transaction.merchantInfo.name}</span>
    </div>
  );
};

export default TransactionDetails;

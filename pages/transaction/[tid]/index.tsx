import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import TransactionDetails from "../../../components/transaction/transaction-details/TransactionDetails";
import api from "../../../config/api";

const TransactionDetailsPage = () => {
  const router = useRouter();
  const { tid, cid } = router.query;
  const [loading, setLoading] = useState(false);
  const [transaction, setTransaction] = useState(null);

  const fetchData = (id: string) => {
    setLoading(true);
    api.transactionsApi.get_transaction(id).then((data) => {
      setTransaction(data);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchData(tid as string);
  }, [tid]);

  if (loading) {
    return <span>Loading...</span>;
  }

  return (
    <TransactionDetails transaction={transaction} cardID={cid as string} />
  );
};

export default TransactionDetailsPage;

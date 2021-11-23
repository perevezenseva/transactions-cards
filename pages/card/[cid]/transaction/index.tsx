import { inject, observer } from "mobx-react";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import TransactionLayout from "../../../../components/transaction/transaction-layout/TransactionLayout";
import api from "../../../../config/api";

const CardTransactions = inject("FiltersStore")(
  observer(({ FiltersStore }) => {
    const router = useRouter();
    const { cid } = router.query;

    const [transactions, setTransaction] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pagingOptions, setPagingOptions] = useState({
      total: 0,
      page: 0,
    });

    const transactionFilter = FiltersStore.transactionFilter;
    const fetchData = (page: number) => {
      setLoading(true);
      api.transactionsApi
        .query_transactions(page, {
          ...transactionFilter,
          cardID: cid as string,
        })
        .then((data) => {
          setTransaction(data ? data.items : []);
          setPagingOptions({ total: data.total, page: page });
          setLoading(false);
        });
    };

    useEffect(() => {
      fetchData(0);
    }, [cid, transactionFilter]);

    return (
      <TransactionLayout
        transactions={transactions}
        pagingOptions={pagingOptions}
        fetchData={fetchData}
        loading={loading}
        cardID={cid as string}
      />
    );
  })
);

export default CardTransactions;

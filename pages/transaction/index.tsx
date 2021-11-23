import React, { useEffect, useState } from "react";
import TransactionLayout from "../../components/transaction/transaction-layout/TransactionLayout";
import api from "../../config/api";
import { inject, observer } from "mobx-react";

const TransactionPage = inject("FiltersStore")(
  observer(({ FiltersStore }) => {
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
        .query_transactions(page, transactionFilter)
        .then((data) => {
          setTransaction(data ? data.items : []);
          setPagingOptions({ total: data.total, page: page });
          setLoading(false);
        });
    };

    useEffect(() => {
      fetchData(0);
    }, [transactionFilter]);

    return (
      <>
        <TransactionLayout
          transactions={transactions}
          pagingOptions={pagingOptions}
          loading={loading}
          fetchData={fetchData}
        />
      </>
    );
  })
);

export default TransactionPage;

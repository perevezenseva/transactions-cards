import React, { useEffect, useState } from "react";
import TransactionFilter from "../../components/transaction/transaction-filter/TransactionFilter";
import TransactionList from "../../components/transaction/transaction-list/TransactionList";
import api from "../../config/api";
import ReactPaginate from "react-paginate";
import { PageSize } from "../../config/pagination";

const TransactionPage = () => {
  const [transactions, setTransaction] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [pagingOptions, setPagingOptions] = useState({
    total: 0,
  });

  const fetchData = (page: number) => {
    setPage(page);
    setLoading(true);
    api.transactionsApi.query_transactions(page).then((data) => {
      setTransaction(data ? data.items : []);
      setPagingOptions({ total: data.total });
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchData(0);
  }, []);

  if (loading) {
    return <span>Loading...</span>;
  }
  return (
    <>
      <TransactionFilter />
      <TransactionList transactions={transactions} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={(page: { selected: number }) => fetchData(page.selected)}
        pageRangeDisplayed={PageSize}
        pageCount={Math.ceil(pagingOptions.total / PageSize)}
        previousLabel="<"
        renderOnZeroPageCount={null}
        forcePage={page}
        containerClassName="pagination"
      />
    </>
  );
};

export default TransactionPage;

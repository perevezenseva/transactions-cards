import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { PageSize } from "../../../config/pagination";
import { ITransaction, ITransactionFilter } from "../../../models/transaction";
import TransactionFilter from "../transaction-filter/TransactionFilter";
import TransactionList from "../transaction-list/TransactionList";

const TransactionLayout = (props: {
  transactions: ITransaction[];
  pagingOptions: { total: number };
  fetchData: (page?: number, filter?: ITransactionFilter) => void;
  cardID?: string;
}) => {
  const { transactions, pagingOptions, cardID, fetchData } = props;
  const [page, setPage] = useState(0);
  return (
    <>
      <TransactionFilter />
      <TransactionList transactions={transactions} cardID={cardID}/>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={(page: { selected: number }) => {
          setPage(page.selected);
          fetchData(page.selected);
        }}
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

export default TransactionLayout;

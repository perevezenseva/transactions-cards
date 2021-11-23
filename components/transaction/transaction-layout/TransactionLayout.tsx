import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { PageSize } from "../../../config/pagination";
import { ITransaction, ITransactionFilter } from "../../../models/transaction";
import TransactionFilter from "../transaction-filter/TransactionFilter";
import TransactionList from "../transaction-list/TransactionList";

const TransactionLayout = (props: {
  transactions: ITransaction[];
  pagingOptions: { total: number, page: number };
  fetchData: (page?: number, filter?: ITransactionFilter) => void;
  cardID?: string;
}) => {
  const { transactions, pagingOptions, cardID, fetchData } = props;
  return (
    <>
      <TransactionFilter cardID={cardID} />
      <TransactionList transactions={transactions} cardID={cardID} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={(page: { selected: number }) => {
          fetchData(page.selected);
        }}
        pageRangeDisplayed={PageSize}
        pageCount={Math.ceil(pagingOptions.total / PageSize)}
        previousLabel="<"
        renderOnZeroPageCount={null}
        forcePage={pagingOptions.page}
        containerClassName="pagination"
      />
    </>
  );
};

export default TransactionLayout;

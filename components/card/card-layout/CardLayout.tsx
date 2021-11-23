import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { PageSize } from "../../../config/pagination";
import { ICard, ICardFilter } from "../../../models/card";
import CardFilter from "../card-filter/CardFilter";
import CardList from "../card-list/CardList";

const CardLayout = (props: {
  cards: ICard[];
  pagingOptions: { total: number; page: number };
  loading: boolean;
  fetchData: (page?: number, filter?: ICardFilter) => void;
  transactionID?: string;
}) => {
  const { cards, pagingOptions, loading, fetchData } = props;
  return (
    <>
      <CardFilter />
      {!loading && <CardList cards={cards} />}
      {loading && <span>Loading...</span>}
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

export default CardLayout;

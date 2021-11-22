import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { PageSize } from "../../../config/pagination";
import { ICard, ICardFilter } from "../../../models/card";
import CardFilter from "../card-filter/CardFilter";
import CardList from "../card-list/CardList";

const CardLayout = (props: {
  cards: ICard[];
  pagingOptions: { total: number };
  fetchData: (page?: number, filter?: ICardFilter) => void;
  transactionID?: string;
}) => {
  const { cards, pagingOptions, fetchData } = props;
  const [page, setPage] = useState(0);
  return (
    <>
      <CardFilter />
      <CardList cards={cards} />
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

export default CardLayout;

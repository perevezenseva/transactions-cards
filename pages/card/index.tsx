import React, { useEffect, useState } from "react";
import CardFilter from "../../components/card/card-filter/CardFilter";
import CardList from "../../components/card/card-list/CardList";
import api from "../../config/api";
import styles from "./CardList.module.scss";
import ReactPaginate from "react-paginate";
import { PageSize } from "../../config/pagination";

const Card = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [pagingOptions, setPagingOptions] = useState({
    total: 0,
  });

  const fetchData = (page: number) => {
    setPage(page);
    setLoading(true);
    api.cardsApi.query_cards(page).then((data) => {
      setCards(data ? data.items : []);
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
      <CardFilter />
      <CardList
        cards={cards}
      />
       <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={(page: {selected: number}) => fetchData(page.selected)}
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

export default Card;

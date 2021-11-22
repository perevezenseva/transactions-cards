import { inject, observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import CardLayout from "../../components/card/card-layout/CardLayout";
import api from "../../config/api";

const Card = inject("FiltersStore")(
  observer(({ FiltersStore }) => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pagingOptions, setPagingOptions] = useState({
      total: 0,
    });
    const cardFilter = FiltersStore.cardFilter;
    const fetchData = (page: number) => {
      setLoading(true);
      api.cardsApi.query_cards(page, cardFilter).then((data) => {
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
      <CardLayout
        cards={cards}
        pagingOptions={pagingOptions}
        fetchData={fetchData}
      />
    );
  })
);

export default Card;

import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import CardDetails from "../../../components/card/card-details/CardDetails";
import api from "../../../config/api";

const CardDetailsPage = () => {
  const router = useRouter();
  const { cid, tid } = router.query;
  const [loading, setLoading] = useState(false);
  const [card, setCard] = useState(null);

  const fetchData = (id: string) => {
    setLoading(true);
    api.cardsApi.get_card(id).then((data) => {
      setCard(data);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchData(cid as string);
  }, [cid]);

  if (loading) {
    return <span>Loading...</span>;
  }

  return <CardDetails card={card} transactionID={tid as string}/>;
};

export default CardDetailsPage;

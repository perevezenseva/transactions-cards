import axios, { AxiosInstance } from "axios";
import { ICard, ICardFilter, ICardPaging } from "../models/card";
import { PageSize } from "./pagination";

const URL_CARDS = "/cards.json";

export interface ICardAPI {
  query_cards: (page?: number, filter?: ICardFilter) => Promise<ICardPaging>;
  get_card: (id: string) => Promise<ICard>;
}

export class CardAPI implements ICardAPI {
  client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      withCredentials: true,
    });
  }

  query_cards(page?: number, filter?: ICardFilter) {
    let url = URL_CARDS;
    return this.client.get(url, { params: filter }).then((reply) => {
      let data = reply.data;
      data.total = data.items.length;
      if (page != null) {
        data.items = data.items.splice(
          page * PageSize,
          page * PageSize < data.total ? PageSize : data.total % PageSize
        );
      }
      return data as ICardPaging;
    });
  }

  get_card(id) {
    let url = `${URL_CARDS}`;
    return this.client.get(url).then((reply) => {
      const data = reply.data;
      const foundObject = data.items.find((d) => d.cardID == id);
      return foundObject as ICard;
    });
  }
}

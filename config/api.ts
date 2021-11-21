import { CardAPI, ICardAPI } from "./cards-api";
import { ITransactionAPI, TransactionAPI } from "./transaction-api";

class ServerAPI {
  cardsApi: ICardAPI;
  transactionsApi: ITransactionAPI;
  constructor() {
    this.cardsApi = new CardAPI();
    this.transactionsApi = new TransactionAPI();
  }
}

// export singleton API
const api = new ServerAPI();
export default api;

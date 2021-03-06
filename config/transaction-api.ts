import axios, { AxiosInstance } from "axios";
import {
  ITransaction,
  ITransactionFilter,
  ITransactionPaging,
} from "../models/transaction";
import { PageSize } from "./pagination";

const URL_TRANSACTIONS = "/transactions.json";

export interface ITransactionAPI {
  query_transactions: (
    page?: number,
    filter?: ITransactionFilter
  ) => Promise<ITransactionPaging>;
  get_transaction: (id: string) => Promise<ITransaction>;
}

export class TransactionAPI implements ITransactionAPI {
  client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      withCredentials: true,
    });
  }

  query_transactions(page?: number, filter?: ITransactionFilter) {
    let url = URL_TRANSACTIONS;
    return this.client.get(url, { params: filter }).then((reply) => {
      let data = reply.data;
      if(filter) {
        if (filter.cardID) {
          data.items = data.items.filter((c) => c.cardID == filter.cardID);
        }
        if (filter.cardAccount) {
          data.items = data.items.filter((c) => c.cardAccount.includes(filter.cardAccount));
        }
        if (filter.amount) {
          data.items = data.items.filter((c) => c.amount == filter.amount);
        }
        if (filter.currency) {
          data.items = data.items.filter((c) => c.currency == filter.currency);
        }
        if (filter.date) {
          data.items = data.items.filter((c) => c.transactionDate == filter.date);
        }
      }      
      data.total = data.items.length;
      if (page != null) {
        data.items = data.items.splice(
          page * PageSize,
          page * PageSize < data.total ? PageSize : data.total % PageSize
        );
      }
      return data as ITransactionPaging;
    });
  }

  get_transaction(id) {
    let url = `${URL_TRANSACTIONS}`;
    return this.client.get(url).then((reply) => {
      const data = reply.data;
      const foundObject = data.items.find((d) => d.transactionID == id);
      return foundObject as ITransaction;
    });
  }
}

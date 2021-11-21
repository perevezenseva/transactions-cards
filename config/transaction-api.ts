import axios, { AxiosInstance } from "axios"
import { ITransaction, ITransactionFilter, ITransactionPaging } from "../models/transaction";
import { PageSize } from "./pagination";

const URL_TRANSACTIONS = "/transactions.json";

export interface ITransactionAPI {
    query_transactions: (page?: number, filter?: ITransactionFilter) => Promise<ITransactionPaging>;
    get_transaction: (id: number) => Promise<ITransaction>;
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
        return this.client.get(url, { params: filter }).then(reply => {
            let data = reply.data;
            if(page != null) { 
                data.items = data.items.splice(page * PageSize, page * PageSize < data.total ? PageSize: data.total % PageSize);
            }
            return data as ITransactionPaging;
        });
    }

    get_transaction(id) {
        let url = `${URL_TRANSACTIONS}${id}`;
        return this.client.get(url).then(reply => {return reply.data as ITransaction});
    }
}
export interface ITransaction {
  transactionID: string;
  cardAccount: string;
  cardID: string;
  amount: number;
  currency: string;
  transactionDate: string;
  merchantInfo: {
    id: string;
    name: string;
  };
}

export interface ITransactionFilter {
  cardID?: string;
  cardAccount?: string;
  amount?: number;
  currency?: string;
  date?: string;
}

export interface ITransactionPaging {
  items: ITransaction[];
  total: number;
}

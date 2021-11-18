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

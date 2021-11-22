export interface ICard {
  cardID: string;
  cardAccount: string;
  maskedCardNumber: string;
  expireDate: string;
  // (AZN | EUR | USD)
  currency: string;
  // (active | blocked)
  status: string;
  balance: number;
}

export interface ICardFilter {
  cardID?: string;
  cardAccount?: string;
  maskedCardNumber?: string;
  expireDate?: string;
  currency?: string;
  status?: string;
  balance?: string;
}

export interface ICardPaging {
  items: ICard[];
  total: number;
}

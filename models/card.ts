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

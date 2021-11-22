import { observable, action, makeObservable } from "mobx";
import { useStaticRendering } from "mobx-react";
import { ICardFilter } from "../models/card";
import { ITransactionFilter } from "../models/transaction";

const isServer = typeof window === "undefined";
// eslint-disable-next-line react-hooks/rules-of-hooks
useStaticRendering(isServer);

export class FiltersStore {
  @observable cardFilter: ICardFilter = {};
  @observable transactionFilter: ITransactionFilter = {};

  constructor() {
    makeObservable(this);
  }
  @action updateCardFilter(newFilter: ICardFilter) {
    this.cardFilter = newFilter;
  }
  @action updateTransactionFilter(newFilter: ITransactionFilter) {
    this.transactionFilter = newFilter;
  }
  @action clearCardFilter() {
    this.cardFilter = {};
  }
  @action clearTransactionFilter() {
    this.transactionFilter = {};
  }
}

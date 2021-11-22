import { Field, Form, Formik } from "formik";
import { inject, observer } from "mobx-react";
import React from "react";
import { ITransactionFilter } from "../../../models/transaction";
import styles from "./TransactionFilter.module.scss";

const TransactionFilter = inject("FiltersStore")(
  observer(({ FiltersStore }) => {
    const initialValues: ITransactionFilter = FiltersStore.transactionFilter;
    return (
      <div className="transaction-filter">
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            FiltersStore.updateTransactionFilter(values);
            actions.setSubmitting(false);
          }}
          onReset={(values, actions) => {
            FiltersStore.clearTransactionFilter();
          }}
        >
          <Form className={styles.filterForm}>
            <div className="d-flex flex-wrap">
              <div className={styles.filterField}>
                <label htmlFor="cardID">Card ID</label>
                <Field id="cardID" name="cardID" placeholder="Card ID" />
              </div>
              <div className={styles.filterField}>
                <label htmlFor="cardAccount">Card Account</label>
                <Field
                  id="cardAccount"
                  name="cardAccount"
                  placeholder="Card account"
                />
              </div>
              <div className={styles.filterField}>
                <label htmlFor="amount">Amount</label>
                <Field id="amount" name="amount" placeholder="Amount" />
              </div>
              <div className={styles.filterField}>
                <label htmlFor="currency">Currency</label>
                <Field
                  id="currency"
                  as="select"
                  name="currency"
                  placeholder="Currency"
                >
                  <option></option>
                  <option value="AZN">AZN</option>
                  <option value="EUR">EUR</option>
                  <option value="USD">USD</option>
                </Field>
              </div>
              <div className={styles.filterField}>
                <label htmlFor="date">Date</label>
                <Field id="date" type="date" name="date" placeholder="Date" />
              </div>
            </div>
            <button className={styles.submitBtn} type="submit">
              Submit
            </button>
            <button className={styles.clearBtn} type="reset">
              Clear
            </button>
          </Form>
        </Formik>
      </div>
    );
  })
);

export default TransactionFilter;

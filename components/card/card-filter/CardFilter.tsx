import { Field, Form, Formik } from "formik";
import React from "react";
import styles from "./CardFilter.module.scss";

interface CardFilter {
  cardID?: string;
  cardAccount?: string;
  maskedCardNumber?: string;
  expireDate?: string;
  currency?: string;
  status?: string;
  balance?: string;
}

const CardFilter = (props: {}) => {
  const initialValues: CardFilter = {
    cardID: null,
    cardAccount: null,
    maskedCardNumber: null,
    currency: null,
    expireDate: null,
    status: null,
    balance: null,
  };
  return (
    <div className="card-filter">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
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
              <label htmlFor="status">Status</label>
              <Field
                id="status"
                as="select"
                name="status"
                placeholder="Status"
              >
                <option></option>
                <option value="active">Active</option>
                <option value="bloked">Blocked</option>
              </Field>
            </div>
          </div>
          <button className={styles.submitBtn} type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default CardFilter;

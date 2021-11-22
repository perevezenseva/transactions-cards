import { Field, Form, Formik } from "formik";
import { inject, observer } from "mobx-react";
import React from "react";
import { ICardFilter } from "../../../models/card";
import styles from "./CardFilter.module.scss";

const CardFilter = inject("FiltersStore")(
  observer((props: { FiltersStore?: any }) => {
    const { FiltersStore } = props;
    const initialValues: ICardFilter = FiltersStore.cardFilter;
    return (
      <div className="card-filter">
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            FiltersStore.updateCardFilter(values);
            actions.setSubmitting(false);
          }}
          onReset={(values, actions) => {
            FiltersStore.clearCardFilter();
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
            <button className={styles.clearBtn} type="reset">
              Clear
            </button>
          </Form>
        </Formik>
      </div>
    );
  })
);

export default CardFilter;

<<<<<<< HEAD
import App from "next/app";
import React from "react";
import { Provider } from "mobx-react";
import { fetchInitialStoreState, DataStore } from "../stores/DataStore";
import Layout from "./../components/layout";

class MyApp extends App {
  state = {
    dataStore: new DataStore(),
  };

  // Fetching serialized(JSON) store state
  static async getInitialProps(appContext) {
    const appProps = await App.getInitialProps(appContext);
    const initialStoreState = await fetchInitialStoreState();

    return {
      ...appProps,
      initialStoreState,
    };
  }

  // Hydrate serialized state to store
  static getDerivedStateFromProps(props, state) {
    state.dataStore.hydrate(props.initialStoreState);
    return state;
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider dataStore={this.state.dataStore}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    );
  }
=======
import "../styles.scss";
import 'nextjs-breadcrumbs/dist/index.css';
import Layout from "../components/layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
>>>>>>> 82c02db66ea328d954156e233a7ab98a7fa1d024
}
export default MyApp;

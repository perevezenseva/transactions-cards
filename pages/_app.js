import App from "next/app";
import React from "react";
import { Provider } from "mobx-react";
import { fetchInitialStoreState, DataStore } from "../stores/DataStore";
import Layout from "./../components/layout";
import "../styles.scss";
import "nextjs-breadcrumbs/dist/index.css";

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
}
export default MyApp;

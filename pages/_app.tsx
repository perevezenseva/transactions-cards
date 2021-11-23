import App, { AppContext } from "next/app";
import React from "react";
import { initializeStore, Store } from "../stores/stores";
import { Provider } from "mobx-react";
import "../styles.scss";
import "../breadcrumbs.css";
import Layout from "../components/layout";

class MyApp extends App {
  mobxStore: Store;

  constructor(props: any) {
    super(props);
    const isServer = typeof window === "undefined";
    this.mobxStore = isServer
      ? props.initialMobxState
      : initializeStore(props.initialMobxState);
  }

  static async getInitialProps(appContext: AppContext): Promise<any> {
    const ctx: any = appContext.ctx;
    ctx.mobxStore = initializeStore();
    const appProps = await App.getInitialProps(appContext);

    return {
      ...appProps,
      initialMobxState: ctx.mobxStore,
    };
  }

  render() {
    const { Component, pageProps }: any = this.props;
    return (
      <Provider {...this.mobxStore}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    );
  }
}
export default MyApp;

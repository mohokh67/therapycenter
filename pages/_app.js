import App, { Container } from 'next/app';
import Page from '../components/Page';
import { initializeAuthStore } from '../stores/';
import { Provider } from 'mobx-react';

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    // Get or Create the store with `undefined` as initialState
    // This allows you to set a custom default initialState
    const authStore = initializeAuthStore();
    // Provide the store to getInitialProps of pages
    ctx.authStore = authStore;

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    pageProps.query = ctx.query;
    pageProps.authStore = authStore;
    return { pageProps };
  }

  constructor(props) {
    super(props);
    const isServer = !process.browser;
    this.authStore = isServer
      ? props.authStore
      : initializeAuthStore(props.authStore);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Provider authStore={this.authStore}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </Provider>
      </Container>
    );
  }
}

export default MyApp;

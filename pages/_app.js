import App, { Container } from 'next/app';
import { Provider } from 'react-redux';

import Page from '../components/Page';
import withReduxStore from '../lib/withReduxStore';
import store from '../store';

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Container>
        <Page>
          <Provider store={reduxStore}>
            <Component {...pageProps} />
          </Provider>
        </Page>
      </Container>
    );
  }
}

export default withReduxStore(MyApp);

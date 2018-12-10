import React, { Component, Fragment } from 'react';
import TheHeader from './TheHeader';
import TheMeta from './TheMeta';
import TheFooter from './TheFooter';

export default class Page extends Component {
  render() {
    return (
      <div className="site">
        <TheMeta />
        <TheHeader />
        <main className="site-content">{this.props.children}</main>
        <TheFooter />
        <style jsx>{`
          .site {
            display: flex;
            min-height: 100vh;
            flex-direction: column;
          }
          .site-content {
            flex: 1;
          }
        `}</style>
      </div>
    );
  }
}

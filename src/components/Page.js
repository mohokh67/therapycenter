import React, { Component } from 'react';
import TheNavbar from './TheNavbar';
// import TheHeader from './TheHeader';
// import TheMeta from './TheMeta';
// import TheFooter from './TheFooter';
// import ContactForm from './ContactForm';

export default class Page extends Component {
  render() {
    return (
      <div className="site">
        {/* <TheMeta /> */}
        <TheNavbar />
        {/* <TheHeader /> */}
        <main className="site-content">{this.props.children}</main>
        {/* <TheFooter />
        <ContactForm /> */}
        {/* <style jsx>{`
          .site {
            display: flex;
            min-height: 100vh;
            flex-direction: column;
          }
          .site-content {
            flex: 1;
            padding-top: 1rem;
          }
        `}</style> */}
      </div>
    );
  }
}

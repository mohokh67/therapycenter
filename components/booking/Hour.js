import React, { Component, Fragment } from 'react';
import getConfig from 'next/config';
// import Link from 'next/link';
// import moment from 'moment';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

class Hour extends Component {
  render() {
    // Not working, break, off
    let hourColor = 'has-background-grey-lighter';

    if (this.props.availability === 1) {
      // available
      hourColor = 'has-background-success';
    } else if (this.props.availability === 2) {
      // booked
      hourColor = 'has-background-danger';
    }

    return (
      <div className="column has-text-centered">
        <div className={hourColor}>
          {this.props.startFrom}-{this.props.startFrom + 1}
        </div>
      </div>
    );
  }
}

export default Hour;

import React, { Component, Fragment } from 'react';
import getConfig from 'next/config';
// import Link from 'next/link';
import moment from 'moment';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

class Hour extends Component {
  bookMe = () => {
    const updatedBooking = {
      name: 'MoHo Khaleqi',
      available: 'booked',
      createdAt: moment().valueOf(),
      updatedAt: 0
    };
    this.props.updateBooking(
      this.props.today,
      this.props.startFrom,
      updatedBooking
    );
  };

  render() {
    // Not working, break, off
    let hourColor = 'has-background-grey-lighter';
    let altText = '';

    if (this.props.availability === 1) {
      // available
      hourColor = 'button is-success';
      altText = publicRuntimeConfig.booking.freeToBook;
    } else if (this.props.availability === 2) {
      // booked
      hourColor = 'button is-danger';
      altText = publicRuntimeConfig.booking.alreadyBooked;
    }

    return (
      <div className="column has-text-centered">
        <div className={hourColor} title={altText} onClick={this.bookMe}>
          {this.props.startFrom}-{this.props.startFrom + 1}
        </div>
      </div>
    );
  }
}

export default Hour;

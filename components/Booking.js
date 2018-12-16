import React, { Component, Fragment } from 'react';
import Link from 'next/link';
import moment from 'moment';

class Booking extends Component {
  render() {
    return (
      <Fragment>
        nook
        {moment.calendarFormat()}
      </Fragment>
    );
  }
}

export default Booking;

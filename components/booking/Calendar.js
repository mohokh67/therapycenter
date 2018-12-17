import React, { Component, Fragment } from 'react';
import Link from 'next/link';
import getConfig from 'next/config';
import moment from 'moment';
import Day from './Day';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

class Calendar extends Component {
  render() {
    const bookingEndDate = moment().add(2, 'months');
    let calendarDays = [];
    let currentDate = moment();
    const workingDays = publicRuntimeConfig.booking.workingDays.map(x =>
      parseInt(x, 10)
    );

    let i = 0;
    while (currentDate.isSameOrBefore(bookingEndDate)) {
      calendarDays.push({
        dayDate: currentDate,
        working: workingDays.includes(currentDate.day())
      });
      i++;
      currentDate = moment().add(i, 'days');
    }

    return (
      <Fragment>
        <Day />
      </Fragment>
    );
  }
}

export default Calendar;

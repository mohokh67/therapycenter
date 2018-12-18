import React, { Component, Fragment } from 'react';
import getConfig from 'next/config';
import moment from 'moment';
import Day from './Day';
import CalendarView from './CalendarView';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

class Calendar extends Component {
  calcBookingEndDate(view) {
    if (view === 'fortnight') {
      return moment().add(2, 'weeks');
    } else if (view === 'monthly') {
      return moment().add(1, 'months');
    }

    return moment().add(1, 'weeks');
  }

  render() {
    const bookingEndDate = this.calcBookingEndDate(this.props.view);
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
        <CalendarView title={this.props.title} view={this.props.view} />
        {calendarDays.map(thisDay => (
          <Day key={thisDay.dayDate.unix()} today={thisDay} />
        ))}
      </Fragment>
    );
  }
}

export default Calendar;

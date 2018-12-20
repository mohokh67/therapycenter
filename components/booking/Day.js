import React, { Component, Fragment } from 'react';
import getConfig from 'next/config';
// import Link from 'next/link';
// import moment from 'moment';
import Hour from './Hour';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

class Day extends Component {
  render() {
    const today = this.props.today;
    const workingDays = publicRuntimeConfig.booking.workingDays.map(x =>
      parseInt(x, 10)
    );
    const isWorkingDay = workingDays.includes(today.day());
    let hourAvailability = 3;

    if (!isWorkingDay) {
      return (
        <div className="columns">
          <div className="column monospace is-size-7">
            {today.format('ddd, D MMM')}
          </div>
          <div className="column">
            {publicRuntimeConfig.booking.nonWorkingDay}
          </div>
        </div>
      );
    }

    const dayBeginsAt = publicRuntimeConfig.booking.dayBeginsAt;
    const dayEndsAt = publicRuntimeConfig.booking.dayEndsAt;
    const workingHours = Array.from(
      { length: dayEndsAt - dayBeginsAt },
      (x, i) => dayBeginsAt + i
    );
    hourAvailability = 1;

    return (
      <div className="columns">
        <div className="column monospace is-size-7">
          {today.format('ddd, D MMM')}
        </div>
        {workingHours.map(thisHour => (
          <Hour
            key={thisHour}
            startFrom={thisHour}
            today={today.unix()}
            availability={hourAvailability}
            updateBooking={this.props.updateBooking}
          />
        ))}
      </div>
    );
  }
}

export default Day;

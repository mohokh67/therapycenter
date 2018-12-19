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
          <div className="column">Closed!</div>
        </div>
      );
    }

    const dayBeginsAt = parseInt(publicRuntimeConfig.booking.dayBeginsAt);
    const dayEndsAt = parseInt(publicRuntimeConfig.booking.dayEndsAt);
    const workingHours = Array.from(
      { length: dayEndsAt - dayBeginsAt },
      (x, i) => dayBeginsAt + i
    );
    hourAvailability = 2;

    return (
      <div className="columns">
        <div className="column monospace is-size-7">
          {today.format('ddd, D MMM')}
        </div>
        {workingHours.map(thisHour => (
          <Hour
            key={thisHour}
            startFrom={thisHour}
            availability={hourAvailability}
          />
        ))}
      </div>
    );
  }
}

export default Day;

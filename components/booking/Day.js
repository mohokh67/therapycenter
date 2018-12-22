import React, { Component } from 'react';
import getConfig from 'next/config';
import Hour from './Hour';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

class Day extends Component {
  render() {
    const today = this.props.today;
    const workingDays = publicRuntimeConfig.booking.workingDays.map(x =>
      parseInt(x, 10)
    );
    const isWorkingDay = workingDays.includes(today.day());

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
            updateBooking={this.props.updateBooking}
            massageId={this.props.massageId}
          />
        ))}
      </div>
    );
  }
}

export default Day;

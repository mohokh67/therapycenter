import React from 'react';
import Hour from './Hour';

export default function Day(props) {

  const today = props.today;
  const workingDays = process.env.REACT_APP_BOOKING_WORKING_DAYS.split(',').map(x =>
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
          {process.env.REACT_APP_BOOKING_NON_WORKING_DAY_TEXT}
        </div>
      </div>
    );
  }

  const dayBeginsAt =  parseInt(process.env.REACT_APP_BOOKING_DAY_BEGINS_AT);
  const dayEndsAt =  parseInt(process.env.REACT_APP_BOOKING_DAY_ENDS_AT);
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
          updateBooking={props.updateBooking}
          massageId={props.massageId}
        />
      ))}
    </div>
  );
}


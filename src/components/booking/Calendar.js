import React from 'react';
import moment from 'moment';
import Day from './Day';
import CalendarView from './CalendarView';

export default function Calendar (props) {

  const calcBookingEndDate = view => {
    if (view === 'fortnight') {
      return moment().add(2, 'weeks');
    } else if (view === 'monthly') {
      return moment().add(1, 'months');
    }

    return moment().add(1, 'weeks');
  }


    const bookingEndDate = calcBookingEndDate(props.view);
    let calendarDays = [];
    let currentDate = moment();
    let i = 0;
    while (currentDate.isSameOrBefore(bookingEndDate)) {
      calendarDays.push(currentDate);
      i++;
      currentDate = moment().add(i, 'days');
    }

    return (
      <>
        <CalendarView massageId={props.massageId} view={props.view} />
        {calendarDays.map(thisDay => (
          <Day
            key={thisDay.unix()}
            today={thisDay}
            updateBooking={props.updateBooking}
            massageId={props.massageId}
          />
        ))}
      </>
    );

}

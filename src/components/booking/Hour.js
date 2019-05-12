import React, { useEffect, useState } from 'react';
import moment from 'moment';
import swal from 'sweetalert';
import { hasBooked } from './../../lib/bookingsCollector';

export default function Hour(props) {

  const [isFree, setIsFree] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { startFrom } = props;
  const dateTimeStamp = moment.unix(props.today).format('YYYYMMDD');

  useEffect(() => {
    let isSubscribed = true
    async function check() {
      const result = await hasBooked({
        date: dateTimeStamp,
        startFrom
      });

      if (!result && isSubscribed){
        setIsFree(true);
      }
    }
    check();
    setIsLoading(false);
    return () => isSubscribed = false
  }, [dateTimeStamp, startFrom])

  const bookMe = () => {
    if (isLoading) {
      return false;
    }

    if (!isFree) {
      console.log('already booked.');
      swal('Sorry!', process.env.REACT_APP_BOOKING_UNAVAILABLE_HOUR_ALT_TEXT, 'error');
      return false;
    }

    const updatedBooking = {
      serviceId: props.massageId,
      name: 'MoHo Khaleqi',
      available: 'booked',
      createdAt: moment().valueOf(),
      updatedAt: 0
    };

    props.updateBooking(
     props.today,
      startFrom,
      updatedBooking
    );
  };

  return (
    <div
      className="column has-text-centered is-loading"
      title={
        isFree
          ? process.env.REACT_APP_BOOKING_AVAILABLE_HOUR_ALT_TEXT
          : process.env.REACT_APP_BOOKING_UNAVAILABLE_HOUR_ALT_TEXT
      }
    >
      <div
        className={
          'button is-small is-outlined ' +
          (isFree ? 'is-success' : 'is-danger') +
          ( isLoading ? ' is-loading' : '')
        }
        onClick={bookMe}
      >
        {startFrom}-{startFrom + 1}
      </div>
    </div>
  );
}

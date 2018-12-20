import React, { Component } from 'react';
import { withRouter } from 'next/router';
import moment from 'moment';
import base from '../lib/base';
import Item from '../components/Item';
import sourceData from '../data';
import Calendar from '../components/booking/Calendar';

const Massage = withRouter(props => {
  const massageId = props.router.query.title;
  const currentMassage = sourceData.massages.find(
    massage => massage.id == massageId
  );
  return <Item service={currentMassage} key={currentMassage.id} />;
});

const Booking = withRouter(props => {
  let book = new Book();
  return (
    <div className="column is-8">
      <Calendar
        view={props.router.query.view}
        massageId={props.router.query.title}
        updateBooking={book.updateBooking}
      />
    </div>
  );
});

class Book extends Component {
  state = {
    bookings: {}
  };

  componentDidMount() {
    console.log('🔥 Booking Mounted');
    const massageId = this.props.query.title;
    this.ref = base.syncState(`bookings/${massageId}`, {
      context: this,
      state: 'bookings'
    });
    console.log(this.state);
  }

  /**
   * @integer date: unix timestamp
   * @integer startFrom: a number between 9 to 18
   */
  updateBooking = (date, startFrom, updatedBooking) => {
    console.log('going to update the state');
    this.setState({ name: 'ssss' });
    let massageId = 'sports-massage';
    let bookings = { ...this.state.bookingsMo };
    let dateTimeStamp = moment.unix(date).format('YYYYMMDD');

    bookings[massageId] = {};
    bookings[massageId][dateTimeStamp] = {};
    bookings[massageId][dateTimeStamp][startFrom] = {};
    bookings[massageId][dateTimeStamp][startFrom] = updatedBooking;
    this.setState({ bookings });
    console.log(this.state);
  };

  componentWillUnmount() {
    console.log('📤 App Unmounting');
    base.removeBinding(this.ref);
  }

  render() {
    return (
      <div className="container is-fluid">
        <div className="columns is-multiline">
          <Massage />
          <Booking />
        </div>
      </div>
    );
  }
}

export default Book;

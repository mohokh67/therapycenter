import React, { Component } from 'react';
import moment from 'moment';
import swal from 'sweetalert';
import { fetchItem } from '../../lib/utility';


class Hour extends Component {
  _isMounted = false;

  state = {
    isFree: false,
    isLoading: true
  };

  componentDidMount() {
    this._isMounted = true;
    const dateTimeStamp = moment.unix(this.props.today).format('YYYYMMDD');

    fetchItem({
      resource: `bookings/${dateTimeStamp}/${this.props.startFrom}`
    }).then(result => {
      if (this._isMounted) {
        this.setState({ isLoading: false });
      }
      if (result == null || result.available === 'free') {
        if (this._isMounted) {
          this.setState({ isFree: true });
        }
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  bookMe = () => {
    if (this.state.isLoading) {
      return false;
    }

    if (!this.state.isFree) {
      console.log('already booked.');
      swal('Sorry!', process.env.REACT_APP_BOOKING_UNAVAILABLE_HOUR_ALT_TEXT, 'error');
      return false;
    }

    const updatedBooking = {
      serviceId: this.props.massageId,
      name: 'MoHo Khaleqi',
      available: 'booked',
      createdAt: moment().valueOf(),
      updatedAt: 0
    };

    this.props.updateBooking(
      this.props.today,
      this.props.startFrom,
      updatedBooking
    );
  };

  render() {
    return (
      <div
        className="column has-text-centered is-loading"
        title={
          this.state.isFree
            ? process.env.REACT_APP_BOOKING_AVAILABLE_HOUR_ALT_TEXT
            : process.env.REACT_APP_BOOKING_UNAVAILABLE_HOUR_ALT_TEXT
        }
      >
        <div
          className={
            'button is-outlined ' +
            (this.state.isFree ? 'is-success' : 'is-danger') +
            (this.state.isLoading ? ' is-loading' : '')
          }
          onClick={this.bookMe}
        >
          {this.props.startFrom}-{this.props.startFrom + 1}
        </div>
      </div>
    );
  }
}

export default Hour;

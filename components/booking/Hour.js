import React, { Component } from 'react';
import getConfig from 'next/config';
import moment from 'moment';
import { fetchItem } from '../../lib/utility';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

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
      if (result == null || result.available == 'free') {
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
    if (!this.state.isFree || this.state.isLoading) {
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
            ? publicRuntimeConfig.booking.freeToBook
            : publicRuntimeConfig.booking.alreadyBooked
        }
      >
        <div
          className={
            'button is-outlined ' +
            (this.state.isFree ? 'is-success' : 'is-danger is-static') +
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

import React, { Component } from 'react';
import getConfig from 'next/config';
import moment from 'moment';
import { fetchItem } from '../../lib/utility';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

class Hour extends Component {
  componentDidMount() {
    const { props } = this;
    const dateTimeStamp = moment.unix(props.today).format('YYYYMMDD');

    fetchItem({
      resource: `bookings/${props.massageId}/${dateTimeStamp}/${
        props.startFrom
      }`
    }).then(result => {
      const thisHourButton = document.getElementById(this.generateUniqueId());
      // I don't like this approach :(
      if (result == null || result.available == 'free') {
        thisHourButton.classList.add('is-success');
        thisHourButton.addEventListener('click', this.bookMe);
        thisHourButton.setAttribute(
          'title',
          publicRuntimeConfig.booking.freeToBook
        );
      } else {
        thisHourButton.classList.add('is-danger');
        thisHourButton.setAttribute(
          'title',
          publicRuntimeConfig.booking.alreadyBooked
        );
      }
    });
  }

  bookMe = () => {
    const updatedBooking = {
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

  generateUniqueId = () => {
    const dateTimeStamp = moment.unix(this.props.today).format('YYYYMMDD');
    return `button-${dateTimeStamp}-${this.props.startFrom}`;
  };

  render() {
    return (
      <div className="column has-text-centered">
        <div className="button" id={this.generateUniqueId()}>
          {this.props.startFrom}-{this.props.startFrom + 1}
        </div>
      </div>
    );
  }
}

export default Hour;

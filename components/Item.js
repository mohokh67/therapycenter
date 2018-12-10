import React, { Component, Fragment } from 'react';

export default class Item extends Component {
  formatTime = timeInMinute => {
    if (timeInMinute < 60) {
      return `${timeInMinute} Minutes`;
    }
    if (timeInMinute >= 60) {
      var hours = Math.floor(timeInMinute / 60);
      var minutes = timeInMinute % 60;
      if (minutes) {
        return `${hours} Hour ${minutes} Minutes`;
      } else {
        return `${hours} Hour`;
      }
    }
  };

  formatPrice = PriceInPence => {
    if (PriceInPence == 0) {
      return '';
    }
    var pounds = Math.floor(PriceInPence / 100);
    var pence = PriceInPence % 100;
    if (pence) {
      return `£${pounds}.${pence}`;
    } else {
      return `£${pounds}`;
    }
  };

  render() {
    const {
      benefits,
      description,
      duration,
      name,
      priceNew,
      priceOld
    } = this.props.service;

    return (
      <div className="column is-4">
        <div className="card">
          <div className="card-header has-background-primary has-text-light">
            <div className="columns is-multiline">
              <div className="column is-full has-text-centered">
                <h2 className="is-size-4">
                  <del>{this.formatPrice(priceOld)}</del>{' '}
                  {this.formatPrice(priceNew)}
                </h2>
              </div>

              <div className="column is-full card-header-title has-text-light has-text-centered">
                <h1 className="is-size-1">{name}</h1>
              </div>

              <div className="column is-full has-text-centered">
                <h3 className="is-size-4">{this.formatTime(duration)}</h3>
              </div>
            </div>
          </div>
          <div className="card-content">
            {description}
            <ul>
              {benefits.map(benefit => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>
          <div className="card-footer has-background-primary">
            <a href="#" className="has-text-light card-footer-item is-size-4">
              Book Now
            </a>
          </div>
        </div>
      </div>
    );
  }
}

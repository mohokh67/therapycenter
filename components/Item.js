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

  render() {
    const {
      benefits,
      description,
      duration,
      name,
      priceNew,
      priceOld
    } = this.props.service;
    // const price = `£ ${priceNew}`;
    // if(priceOld > 0) {
    //   return (<del>{priceOld}</del>) + 'ddd'
    // }

    return (
      <div className="column is-4">
        <div className="card">
          <div className="card-header has-background-primary has-text-light">
            <div className="columns is-multiline">
              <div className="column is-full has-text-centered">
                <del>{priceOld}</del>
                {priceNew}
              </div>

              <div className="column is-full card-header-title has-text-light has-text-centered">
                <h2 className="is-size-2">{name}</h2>
              </div>

              <div className="column is-full has-text-centered">
                <span>{this.formatTime(duration)}</span>
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
            <a href="#" className="has-text-light card-footer-item">
              Book Now
            </a>
          </div>
        </div>
      </div>
    );
  }
}

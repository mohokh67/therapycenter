import React, { Component, Fragment } from 'react';
import { withRouter } from 'next/router';
import moment from 'moment';
import getConfig from 'next/config';
import Item from '../components/Item';
import sourceData from '../data';
import Calendar from '../components/booking/Calendar';
// Only holds serverRuntimeConfig and publicRuntimeConfig from next.config.js nothing else.
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

const Massage = withRouter(props => {
  const massageId = props.router.query.title;
  const currentMassage = sourceData.massages.find(
    massage => massage.id == massageId
  );
  return <Item service={currentMassage} key={currentMassage.id} />;
});

const Calander = () => {
  return (
    <div className="column">
      <Calendar />
    </div>
  );
};

class Book extends Component {
  render() {
    // console.log(sourceData);
    return (
      <div className="container is-fluid">
        <div className="columns is-multiline">
          <Massage />
          <Calander />
        </div>
      </div>
    );
  }
}

export default Book;

import React, { Component, Fragment } from 'react';
import { withRouter } from 'next/router';
import moment from 'moment';
import Item from '../components/Item';

import sourceData from '../data';

const Content = withRouter(props => {
  const massageId = props.router.query.title;
  const currentMassage = sourceData.massages.find(
    massage => massage.id == massageId
  );
  return <Item service={currentMassage} key={currentMassage.id} />;
});

const Calander = () => {
  return <div className="column">{moment().format()}</div>;
};

class Book extends Component {
  render() {
    // console.log(sourceData);
    return (
      <div className="container is-fluid">
        <div className="columns is-multiline">
          <Content />
          <Calander />
        </div>
      </div>
    );
  }
}

export default Book;

import React, { Component } from 'react';
import sourceData from '../data';
// import TheMap from '../components/TheMap'
import Item from '../components/Item';

export default class Index extends Component {
  render() {
    console.log(sourceData);
    return (
      <div className="container is-fluid">
        <div className="columns is-multiline">
          {sourceData.massages.map(massage => (
            <Item service={massage} key={massage.id} />
          ))}
        </div>
      </div>
    );
  }
}

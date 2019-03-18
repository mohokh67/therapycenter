import React, { Component, Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import sourceData from '../data';
import TheMap from '../components/TheMap';
import Item from '../components/Item';

import getConfig from 'next/config';
// Only holds serverRuntimeConfig and publicRuntimeConfig from next.config.js nothing else.
// const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

// console.log(serverRuntimeConfig.mySecret); // Will only be available on the server side
// console.log(publicRuntimeConfig); // Will be available on both server and client

@inject('authStore')
@observer
export default class Index extends Component {
  render() {
    // console.log(sourceData);
    const { authStore } = this.props;
    console.log(authStore);
    return (
      <Fragment>
        <div className="container is-fluid">
          <div className="columns is-multiline">
            {sourceData.massages.map(massage => (
              <Item service={massage} key={massage.id} />
            ))}
          </div>
          <hr />
        </div>
        <TheMap />
      </Fragment>
    );
  }
}

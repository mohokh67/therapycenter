import React, { Component } from 'react';
import TheHeader from './TheHeader';
import TheMeta from './TheMeta';

export default class Page extends Component {
  render() {
    return (
      <div>
        <TheMeta />
        <TheHeader />
        <div>{this.props.children}</div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signin } from '../actions/authActions';
import TheMap from './../components/TheMap';
import TheHeader from './../components/TheHeader';
import Item from '../components/Item';

import sourceData from '../data';
class Home extends Component {
  render() {
    return (
      <>
        <TheHeader />
        <div className="container is-fluid">
          <div className="columns is-multiline">
            {sourceData.massages.map(massage => (
              <Item service={massage} key={massage.id} showBooking={true} />
            ))}
          </div>
          <hr />
        </div>
        <TheMap />
      </>
    );
  }
}

const mapStoreToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => {
  return {
    signIn: userId => {
      dispatch(signin(userId));
    }
  }
}

export default connect(mapStoreToProps, mapDispatchToProps)(Home);
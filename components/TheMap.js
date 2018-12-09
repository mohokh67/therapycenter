import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const style = { height: '100vh', width: '100%' };

class TheMap extends Component {
  render() {
    return (
      <div style={style}>
        <Map
          google={this.props.google}
          zoom={16}
          initialCenter={{
            lat: 51.478,
            lng: -2.59
          }}
        >
          <Marker onClick={this.onMarkerClick} name={'Current location'} />

          <InfoWindow onClose={this.onInfoWindowClose}>
            <h1>sss</h1>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD7uWuQ35Ya08kV10fqrZaKylgKnmwJ0q8'
})(TheMap);

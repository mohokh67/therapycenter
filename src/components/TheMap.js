import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const mapHeight = '400px';
const style = {
  height: '420px'
};

const addressCenter = {
  justifyContent: 'center',
  alignItems: 'center'
};

class TheMap extends Component {
  componentDidMount() {
    const mapContainer = document.querySelector('.theMap');
    mapContainer.style.height = mapHeight;
  }
  render() {
    return (
      <div style={style} id="theLocation">
        <address className="with-icon" style={addressCenter}>
          <i className="material-icons">location_on</i>
          <h3 className="is-size-4">174 Gloucester Road, Bristol, BS7 8NU</h3>
        </address>
        <Map
          google={this.props.google}
          zoom={16}
          initialCenter={{
            lat: 51.478,
            lng: -2.59
          }}
          className="theMap"
        >
          <Marker onClick={this.onMarkerClick} name={'Current location'} />

          <InfoWindow onClose={this.onInfoWindowClose}>
            <h1>:|</h1>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD7uWuQ35Ya08kV10fqrZaKylgKnmwJ0q8'
})(TheMap);

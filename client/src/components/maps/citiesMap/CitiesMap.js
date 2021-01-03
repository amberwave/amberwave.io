import React, { PureComponent } from 'react';
import ReactMapGL from 'react-map-gl';
import Pins from '../common/Pins';

const TOKEN = process.env.MAPBOX_ACCESS_TOKEN; // Set your mapbox token here

const CITIES = [
  { name: 'San Jose', latitude: 37.3382, longitude: 121.8863 },
  { name: 'Sunnyvale', latitude: 37.3688, longitude: 122.0363 },
  { name: 'San Francisco', latitude: 37.7749, longitude: 122.4194 },
  { name: 'Vallejo', latitude: 38.1041, longitude: 122.2566 },
];

class CitiesMap extends PureComponent {
  state = {
    viewport: {
      latitude: 37.78,
      longitude: -122.41,
      zoom: 8,
    },
  };

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        width="100vw"
        height="80vh"
        onViewportChange={(viewport) => this.setState({ viewport })}
        mapboxApiAccessToken={TOKEN}
      >
        <Pins data={CITIES} />
      </ReactMapGL>
    );
  }
}

export default CitiesMap;
